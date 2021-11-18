import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBox,
  faShoppingCart,
  faMobile,
  faWifi,
  faTv,
} from "@fortawesome/free-solid-svg-icons";

const Tabs = () => {
  return (
    <div className="flex justify-center space-x-14 my-2 scrollbar-hide overflow-x-scroll md:overflow-x-hidden">
      <div className="flex flex-col items-center hover:underline cursor-pointer">
        <FontAwesomeIcon
          className="h-10 w-10 text-black opacity-90 mb-2"
          icon={faBox}
        />
        <p className="text-black opacity-90">Combos</p>
      </div>
      <div className="flex flex-col items-center hover:underline cursor-pointer">
        <FontAwesomeIcon
          className="h-10 w-10 text-black opacity-90 mb-2"
          icon={faShoppingCart}
        />
        <p className="text-black opacity-90">Tienda</p>
      </div>
      <div className="flex flex-col items-center hover:underline cursor-pointer">
        <FontAwesomeIcon
          className="h-10 w-10 text-black opacity-90 mb-2"
          icon={faMobile}
        />
        <p className="text-black opacity-90">Móvil</p>
      </div>
      <div className="flex flex-col items-center hover:underline cursor-pointer">
        <FontAwesomeIcon
          className="h-10 w-10 text-black opacity-90 mb-2"
          icon={faWifi}
        />
        <p className="text-black opacity-90">Internet</p>
      </div>
      <div className="flex flex-col items-center hover:underline cursor-pointer">
        <FontAwesomeIcon
          className="h-10 w-10 text-black opacity-90 mb-2 "
          icon={faTv}
        />
        <p className="text-black opacity-90">TV y Streaming</p>
      </div>
    </div>
  );
};

export default Tabs;
