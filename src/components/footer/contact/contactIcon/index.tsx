import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";

export const ContactIcon = () => {
  const icons = [
    {
      name: "Instagram",
      iconName: <AiFillInstagram />,
      url: "https://www.instagram.com/_mdayat/",
    },
    {
      name: "LinkedIn",
      iconName: <AiFillLinkedin />,
      url: "https://www.linkedin.com/in/mdayat/",
    },
    {
      name: "Twitter",
      iconName: <AiFillTwitterSquare />,
      url: "https://twitter.com/angkenmutu",
    },
    {
      name: "Github",
      iconName: <AiFillGithub />,
      url: "https://github.com/mdayat",
    },
  ];

  return (
    <div className="flex justify-evenly items-center">
      {icons.map((icon) => (
        <a
          href={icon.url}
          key={icon.name}
          className="hover:text-blue-500 ease-in-out duration-300"
        >
          <i className="text-2xl">{icon.iconName}</i>
        </a>
      ))}
    </div>
  );
};
