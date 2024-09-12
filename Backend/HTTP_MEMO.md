# How to contribute setup server locally

Server is running on a public domain : `https://sparsh.up.railway.app/api/v1`

This should be a pretty simple setup, as the app doesn't have many external service dependencies.

## Forking and Cloning the project

Development is on development branch. 

to clone a single branch development 

```
git clone --branch developemnt https://github.com/Sparsh-PU/sparsh-Backend.git

```

To clone main production branch 
```
git clone https://github.com/Sparsh-PU/sparsh-Backend.git

```


I suggest reading the [Github's guide on forking projects.](https://guides.github.com/activities/forking/)

<br />

## Visual Studio Code Setup

I also suggest using Visual Studio Code as your IDE, with the following extensions installed:

- ESLint
- Prettier - Code formatter

<br />

## Installing Node.js

The app depend on Node.js, a JavaScript runtime built on Chrome's V8 Engine.

You can download it here: https://nodejs.org/en/download/. The project currently supports version 18.17+

<br />

## Installing dependencies

Open the terminal on the root directory (I use the VSCode terminal) and do the following steps:

Go into the app directory

```
cd sparsh-backend
```

Install dependencies using npm

```
npm i
```

This should add a _package-lock.json_ file and a _node_modules_ directory inside the _app_ directory.

<br />

## Environment Variables

Copy all the variables to configure the server

```
touch .env 
```
or create new .env file

**copy all envs to .env file**

<br />
<br />

**Finally! You're done with the setup and installation, now you can start the server**

## Running the development app

If you have done every step above, you're ready to start developing.

Make sure you're in the app directory, if you're not, run this command:

```
cd sparsh-backend
```

And now you can start the app by running the command:

```
npm run start
```

And there it is! You can now access the app at:

http://localhost:8000



# Commit protocols

### Type: The type of change, which could be one of the following:

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc.)
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `perf`: A code change that improves performance
- `test`: Adding missing or correcting existing tests
- `chore`: Changes to the build process or auxiliary tools and libraries such as documentation generation

### Commit Msg protocol

`[Type]`: Brief Summary of Changes

Detailed description of the change, reasoning behind it, and any additional information that might be useful for other developers or for future reference.

`Fixes`: `#[Issue Number]` (if applicable)
`Related`: `#[Issue Number]` (if applicable)

# HTTP response code Protocol
### 1xx : Information Response
- 100 : Continue — Server received request from Headers. After, Client should send Body.
- 101 : Switching Protocol — Notice server change Protocol
- 103 : Processing— Server received request and processing
- 103 : Early Hints — Return the response of some Headers before all information is sent

### 2xx : Successful
- 200 : OK
- 201 : Created
- 202 : Accepted
- 203 : Non-Authoritative Information
- 204 : No Content
- 205 : Reset Content
- 206 : Partial Content
- 207 : Multi-Status
- 208 : Already Reported
- 226 : IM Used — Server has successfully processed the resource request. and the response showed all the results. or part of the resource

### 3xx : Redirection
- 300 : Multiple Choice — Multiple resource for Client
- 301 : Moved Permanently
- 302 : Found
- 303 : See Other
- 304 : Not Modified
- 305 : Use Proxy
- 306 : Switch Proxy (Permanent)
- 307 : Temporary Redirect
- 308 : Permanent Redirect (Experimental)

### 4xx : Client Side Error
- 400 : Bad Request
- 401 : Unauthorized
- 402 : Payment Required
- 403 : Forbidden
- 404 : Not Found
- 405 : Method Not Allowed
- 406 : Not Acceptable
- 407 : Proxy Authentication Required
- 408 : Request Timeout
- 409 : Conflict
- 410 : Gone
- 411 : Length Required
- 412 : Precondition Failed
- 413 : Request Entity Too Large (Payload Too Large)
- 414 : Request URI Too Long
- 415 : Unsupported Media Type
- 416 : Requested Range Not Satisfiable
- 417 : Expectation Failed
- 417 : I’m a teapot (Easter Egg)
- 421 : Misdirected Request
- 422 : Unprocessable Entity
- 423 : Locked
- 424 : Failed Dependency
- 425 : Too Early
- 426 : Upgrade Required
- 428 : Precondition Required
- 429 : Too Many Requests
- 431 : Request Header Fields Too Large
- 451 : Unavailable For Legal Reasons

### 5xx : Server Side Error
- 500 : Internal Server Error
- 501 : Not Implemented
- 502 : Bad Gateway
- 503 : Service Unavailable
- 504 : Gateway Timeout
- 505 : HTTP Version Not Supported
- 506 : Variant Also Negotiates
- 507 : Insufficient Storage
- 508 : Loop Detected
- 510 : Not Extended
- 511 : Network Authentication Require