import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

function Password() {
  const [password, setPassword] = useState(true);

  const handleclick = () => {
    setPassword(!password);
  };
  return (
    <>
      <div className=" bg-yellow-300 flex items-center justify-center h-[100px] w-full">
        <input
          type={password ? "password" : "text"}
          className="border-2 rounded-lg border-blue-600 p-3 w-96"
        />
        <div className="-ml-10">
          <span onClick={handleclick}>
          {password ? (
            <Eye />
          ) : (
            <EyeOff />
          )}
          </span>
          
        </div>
      </div>
    </>
  );
}

export default Password;
