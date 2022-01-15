import React, { useState } from "react";
import { NavbarBrand } from "./navBrand";
import { NavbarLink } from "./navLink";
import { NavbarToggle } from "./navToggle";
import { NavbarToggleLink } from "./navToggle/navToggleLink";

type NavbarProps = {
  children: React.ReactNode;
};

export const Navbar = ({ children }: NavbarProps) => {
  const [toggleBtn, setToggleBtn] = useState(false);
  return (
    <nav className="bg-blue-700 text-white">
      <div className="mx-auto h-16 flex justify-between items-center sm:w-11/12 md:w-11/12 xl:w-10/12">
        {children}
        <NavbarToggle
          toggleBtnProps={toggleBtn}
          setToggleBtnProps={setToggleBtn}
        />
      </div>
      {toggleBtn ? <NavbarToggleLink /> : ""}
    </nav>
  );
};

export const MemoizedNavbarChildren = () => {
  return (
    <React.Fragment>
      <NavbarBrand />
      <NavbarLink />
    </React.Fragment>
  );
};
