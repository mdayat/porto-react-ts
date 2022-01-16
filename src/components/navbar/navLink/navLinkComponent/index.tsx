type NavLinkProps = {
  ulStyle: string;
  liStyle: string;
};

export const NavbarLinkComponent = ({ ulStyle, liStyle }: NavLinkProps) => {
  const navLinkList = [
    {
      id: "#home",
      name: "Home",
    },
    {
      id: "#about",
      name: "About",
    },
    {
      id: "#projects",
      name: "Projects",
    },
    {
      id: "#contact",
      name: "Contact",
    },
  ];
  return (
    <ul className={ulStyle}>
      {navLinkList.map((item) => (
        <li
          key={item.id}
          className={`${liStyle} hover:text-gray-400 duration-300 ease-in-out hover:underline`}
        >
          <a href={item.id}>{item.name}</a>
        </li>
      ))}
    </ul>
  );
};
