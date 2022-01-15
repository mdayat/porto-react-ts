import { NavbarLinkComponent } from "./navLinkComponent";

export const NavbarLink = () => {
  return (
    <div className="sm:hidden md:hidden lg:block">
      <NavbarLinkComponent
        ulStyle="flex justify-evenly items-center"
        liStyle="font-poppins font-bold md:mx-2 lg:uppercase lg:text-sm xl:mx-3 2xl:text-md 3xl:mx-4"
      />
    </div>
  );
};
