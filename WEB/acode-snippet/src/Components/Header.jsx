import React from "react";
import { useState } from "react";
import './animate.css'

const Header = () => {
  const [mobile, setMobile] = useState(false);
  const openmobile = () => {
    setMobile(!mobile);
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
            className={`flex gap-3 md:flex  animate  ${
              mobile
                ? " bg-yellow-500 visible flex-col top-[100px]  absolute left-0 w-full animate "
                : "max-md:hidden "
            } `}
          >
            <li onClick={openmobile}>lis1</li>
            <li onClick={openmobile}>book</li>
            <li onClick={openmobile}>cool</li>
            <li onClick={openmobile}>job</li>
            <li onClick={openmobile}>gog</li>
          </ul>
        </nav>
        <div className="md:hidden">

<span className="font-bold p-2" onClick={openmobile}>
  {mobile? "C" : "O"}

</span>
        </div>
      </div>
    </>
  );
};

export default Header;
