import { NavbarLinkComponent } from "../../navLink/navLinkComponent";

export const NavbarToggleLink = () => {
  return (
    <div className="py-5 lg:hidden">
      <NavbarLinkComponent
        ulStyle="flex flex-col items-center justify-center"
        liStyle="font-poppins font-bold my-2 text-sm"
      />
    </div>
  );
};
