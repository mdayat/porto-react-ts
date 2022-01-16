import { MdCopyright } from "react-icons/md";
import { Address } from "./address";
import { Contact } from "./contact";

export const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-black text-white h-[calc(40vh+10vh)] py:8 lg:pt-16"
    >
      <section className="grid h-full w-11/12 lg:w-10/12 mx-auto place-self-center">
        <div className="w-full lg:pb-0 text-center lg:flex justify-around items-center place-self-center">
          <Contact />
          <Address />
        </div>
      </section>
      <span className="bg-gray-800 h-14 lg:h-16 font-poppins uppercase text-sm lg:text-md flex justify-center items-center">
        &copy; by Muhammad Nur Hidayat
      </span>
    </footer>
  );
};
