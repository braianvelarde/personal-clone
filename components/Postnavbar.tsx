import { faMapMarker } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Postnavbar = () => {
  return (
    <div className="block md:hidden bg-black bg-opacity-[0.85] text-white text-sm">
      <div className="flex text-xs font-normal items-center px-6 py-3 opacity-70 hover:bg-gray-900 cursor-pointer">
        <FontAwesomeIcon className="h-4 w-4" icon={faMapMarker} />
        <span className="mx-2">
          Estás en <strong>CAPITAL FEDERAL</strong>
        </span>
      </div>
    </div>
  );
};

export default Postnavbar;
