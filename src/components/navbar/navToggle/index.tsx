import { MdExpandMore, MdExpandLess } from "react-icons/md";

type NavbarToggleProps = {
  toggleBtnProps: boolean;
  setToggleBtnProps: React.Dispatch<React.SetStateAction<boolean>>;
};

export const NavbarToggle = ({
  toggleBtnProps,
  setToggleBtnProps,
}: NavbarToggleProps) => {
  const btnCollapse = () => {
    toggleBtnProps ? setToggleBtnProps(false) : setToggleBtnProps(true);
  };
  return (
    <div className="lg:hidden">
      <button
        onClick={btnCollapse}
        className="grid place-self-center sm:text-xl md:text-2xl"
      >
        {toggleBtnProps ? <MdExpandLess /> : <MdExpandMore />}
      </button>
    </div>
  );
};
