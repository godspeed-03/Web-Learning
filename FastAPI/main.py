from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from pydantic import BaseModel
from passlib.context import CryptContext
from jose import JWTError, jwt
from typing import Optional
import os
from datetime import datetime, timedelta

# Initialize FastAPI
app = FastAPI()

# Secret key for JWT encoding/decoding (Use a more secure key in production)
SECRET_KEY = "5a4b6db3e7988471345321c1a2b30124fcd50f5cf0c1284b7e6c7f56b4ccf9e2"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

# Password hashing
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# OAuth2 scheme (for login and token generation)
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

# User data store (in-memory for this example)
fake_users_db = {
    "john": {
        "username": "john",
        "hashed_password": pwd_context.hash("password123"),
    }
}

# Pydantic model for User
class User(BaseModel):
    username: str

# Pydantic model for the User in the response
class UserInDB(User):
    hashed_password: str

# Pydantic model for Token
class Token(BaseModel):
    access_token: str
    token_type: str

# Pydantic model for login request
class UserInLogin(BaseModel):
    username: str
    password: str

# Verify password
def verify_password(plain_password: str, hashed_password: str) -> bool:
    return pwd_context.verify(plain_password, hashed_password)

# Hash password
def get_password_hash(password: str) -> str:
    return pwd_context.hash(password)

# Get user by username from fake DB
def get_user(db, username: str) -> Optional[UserInDB]:
    if username in db:
        user_dict = db[username]
        return UserInDB(**user_dict)
    return None

# Create JWT token
def create_access_token(data: dict, expires_delta: timedelta = timedelta(minutes=15)) -> str:
    to_encode = data.copy()
    expire = datetime.utcnow() + expires_delta
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

# Authenticate user
def authenticate_user(db, username: str, password: str):
    user = get_user(db, username)
    if user is None or not verify_password(password, user.hashed_password):
        return False
    return user

# Route to create the JWT token (login endpoint)
@app.post("/token", response_model=Token)
def login_for_access_token(form_data: OAuth2PasswordRequestForm = Depends()):
    user = authenticate_user(fake_users_db, form_data.username, form_data.password)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid credentials",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": form_data.username}, expires_delta=access_token_expires
    )
    return {"access_token": access_token, "token_type": "bearer"}

# Route to get the current user from the JWT token
@app.get("/users/me", response_model=User)
def read_users_me(current_user: User = Depends(oauth2_scheme)):
    return current_user

# Dependency to get the current user
def get_current_user(token: str = Depends(oauth2_scheme)) -> User:
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        username: str = payload.get("sub")
        if username is None:
            raise credentials_exception
        token_data = User(username=username)
    except JWTError:
        raise credentials_exception
    return token_data
