import { ProjectsCard } from "./projectsCard";

export const Project = () => {
  return (
    <main id="projects" className="min-h-screen py-16">
      <h2 className="text-center font-patrickHand uppercase text-lg font-black mb-12 md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl">
        My Projects
      </h2>
      <ProjectsCard />
    </main>
  );
};
