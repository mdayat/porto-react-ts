type CardsProps = {
  ulStyle: string;
  imgStyle: string;
};

export const Cards = ({ ulStyle, imgStyle }: CardsProps) => {
  const projectImgCards = [
    {
      name: "porto-reactjs.png",
      link: "https://dayat-portofolio-reactjs.netlify.app/",
    },
    {
      name: "porto-web.png",
      link: "https://codepen.io/DayT22/pen/powamNM",
    },
    {
      name: "landing-page.png",
      link: "https://codepen.io/DayT22/pen/ZEyrpXP",
    },
    {
      name: "survey-form.png",
      link: "https://codepen.io/DayT22/pen/jOwGewV",
    },
  ];
  return (
    <ul className={ulStyle}>
      {projectImgCards.map((card) => (
        <li key={card.name} className="w-fit">
          <a href={card.link}>
            <img src={card.name} alt={card.name} className={imgStyle} />
          </a>
        </li>
      ))}
    </ul>
  );
};
