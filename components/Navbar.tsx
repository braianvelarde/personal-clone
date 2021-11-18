import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faUserCircle,
  faMapMarker,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export const Navbar = () => {
  return (
    <nav className="bg-black bg-opacity-90 w-full text-white font-sans">
      <div className="grid grid-cols-3 px-2 md:py-2 container mx-auto items-center justify-between">
        <div className="flex items-center divide-gray-50">
          <div className="shadow-md flex items-center justify-around px-4 md:px-2 py-2 hover:bg-gray-900 cursor-pointer">
            <FontAwesomeIcon className="h-4 w-4" icon={faBars} />
            <span className="hidden font-normal lg:inline mx-2">Menú</span>
          </div>
          <ul className="hidden">
            <li>Flow</li>
            <hr />
            <li>Tienda</li>
            <li>Productos y servicios</li>
            <li>Mi Cuenta</li>
            <li>Ayuda</li>
            <hr />
            <li>Negocios</li>
            <li>Empresas</li>
          </ul>
          <span className="mx-2 font-medium text-black">|</span>
          <div className="hidden text-xs font-normal md:flex items-center justify-around p-2 hover:bg-gray-900 cursor-pointer">
            <FontAwesomeIcon className="h-4 w-4" icon={faMapMarker} />
            <span className="mx-2">
              Estás en <strong>CAPITAL FEDERAL</strong>
            </span>
          </div>
        </div>
        <div className=" place-self-center relative h-8 w-32 my-2">
          <Image src="/personal.png" quality={100} layout="fill" />
        </div>
        <div className="md:hidden inline-block p-2 place-self-end self-center">
          <FontAwesomeIcon className="h-4 w-4 text-white" icon={faUserCircle} />
        </div>
        <div className="hidden md:flex justify-end">
          <span className="text-sm">¡Aún no sos Personal?</span>
        </div>
      </div>
    </nav>
  );
};
