import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTablet, faMobile, faTv } from "@fortawesome/free-solid-svg-icons";

export const FlowSection = () => {
  return (
    <div className="container mx-auto justify-center items-center flex flex-col md:flex-row-reverse">
      <div className="relative container h-96 w-full">
        <Image layout="fill" src="/flow-entreteniemiento-home-desktop.png" />
      </div>

      <div className="w-full space-y-4">
        <div className="relative h-10 w-28">
          <Image layout="fill" src="/flow.png" />
        </div>
        <h2 className="text-2xl font-normal">
          TV en vivo en casa y donde vayas
        </h2>
        <p className="text-sm text-gray-600">
          Con Flow tenés el mejor entretenimiento en cualquier dispositivo.
          Mirá, pausá, grabá y volvé a mirar todos tus programas en vivo,
          películas, series y eventos deportivos favoritos.
        </p>
        <p className="text-sm">Disponible para</p>
        <div className="flex space-x-4">
          <div className="flex space-x-2 items-center text-gray-600">
            <FontAwesomeIcon className="h-5 w-5" icon={faTv}></FontAwesomeIcon>
            <span>TV</span>
          </div>
          <div className="flex space-x-2 items-center text-gray-600">
            <FontAwesomeIcon
              className="h-5 w-5"
              icon={faTablet}
            ></FontAwesomeIcon>
            <span>Tablet</span>
          </div>
          <div className="flex space-x-2 items-center text-gray-600">
            <FontAwesomeIcon
              className="h-5 w-5"
              icon={faMobile}
            ></FontAwesomeIcon>
            <span>Celular</span>
          </div>
        </div>
        <a className="text-blue-400 text-sm block hover:underline cursor-pointer">
          Conocé más sobre Flow
        </a>
      </div>
    </div>
  );
};
