import { ContactIcon } from "./contactIcon";

export const Contact = () => {
  return (
    <div>
      <h3 className="font-patrickHand text-lg uppercase font-black mb-5">
        Contact
      </h3>
      <div>
        <address className="mb-4">
          <a
            href="mailto:muhnurdayat@gmail.com"
            className="text-blue-700 hover:underline hover:text-blue-500 hover:ease-in-out hover:duration-300"
          >
            muhnurdayat@gmail.com
          </a>
        </address>
        <ContactIcon />
      </div>
    </div>
  );
};
