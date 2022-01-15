import { Cards } from "../cards";

export const ProjectsCard = () => {
  return (
    <section className="h-full grid w-11/12 md:w-11/12 lg:w-10/12 mx-auto">
      <div className="h-full text-center lg:h-fit lg:place-self-center">
        <Cards
          ulStyle="flex flex-wrap justify-evenly"
          imgStyle="w-72 rounded-md xl:w-96 shadow-xl mx-2 mb-8 hover:shadow-2xl duration-300 ease-in-out"
        />
      </div>
    </section>
  );
};
