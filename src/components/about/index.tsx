import { HeroButton } from "./heroButton";
import { HeroImage } from "./heroImage";
import { HeroText } from "./heroText";

export const About = () => {
  return (
    <header className="bg-gray-200 h-[calc(40vh+10vh)] lg:h-[calc(100vh-64px)]">
      <section className="w-11/12 md:w-11/12 lg:w-10/12 lg:flex justify-between items-center mx-auto py-16 h-full">
        <div className="h-full flex flex-col justify-evenly items-center basis-6/12 text-center lg:h-fit lg:place-self-center">
          <HeroText />
          <HeroButton />
        </div>
        <div className="sm:hidden md:hidden lg:block basis-6/12">
          <HeroImage />
        </div>
      </section>
    </header>
  );
};
