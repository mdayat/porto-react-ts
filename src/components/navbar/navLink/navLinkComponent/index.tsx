type NavLinkProps = {
  ulStyle: string;
  liStyle: string;
};

export const NavbarLinkComponent = ({ ulStyle, liStyle }: NavLinkProps) => {
  const navLinkList = ["Home", "About", "Projects", "Contact"];
  return (
    <ul className={`${ulStyle}`}>
      {navLinkList.map((item) => (
        <li
          key={item}
          className={`${liStyle} hover:text-gray-400 duration-300 ease-in-out hover:underline`}
        >
          <a href="#">{item}</a>
        </li>
      ))}
    </ul>
  );
};
