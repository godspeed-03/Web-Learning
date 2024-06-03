import React from "react";
import { useState } from "react";

const Header = () => {
  const [mobile, setMobile] = useState(false);
  const openmobile = () => {
    setMobile(true);
  };
  return (
    <>
      <div
        className={`header flex items-center justify-between py-5  mt-10 
    ${mobile ? "bg-yellow-500" : "bg-sky-300"}`}
      >
        <div className="logo">LOGO</div>
        <nav>
          <ul
            className={`flex gap-3 md:flex   ${
              mobile
                ? " bg-yellow-500 visible flex-col top-[100px]  absolute left-0 w-full "
                : "max-md:hidden"
            } `}
          >
            <li onClick={() => setMobile(false)}>lis1</li>
            <li onClick={() => setMobile(false)}>book</li>
            <li onClick={() => setMobile(false)}>cool</li>
            <li onClick={() => setMobile(false)}>job</li>
            <li onClick={() => setMobile(false)}>gog</li>
          </ul>
        </nav>
        <div className="md:hidden">
          {mobile ? (
            <span className="font-bold p-2" onClick={() => setMobile(false)}>
              C
            </span>
          ) : (
            <span className="font-bold p-2" onClick={() => openmobile()}>
              O
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
