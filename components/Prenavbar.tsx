import { faTv, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Prenavbar = () => {
  return (
    <header className="hidden md:block bg-black bg-opacity-[0.85] text-white text-sm">
      <div className="flex items-center px-2 justify-between container mx-auto">
        <div className="flex items-center pl-2 py-2 space-x-6">
          <a className="cursor-pointer">Personal</a>
          <a className="cursor-pointer">Flow</a>
        </div>
        <div className="flex space-x-6 items-center justify-between">
          <FontAwesomeIcon
            className="h-4 w-6 text-green-400 cursor-pointer"
            icon={faTv}
          />
          <div className="flex items-center cursor-pointer">
            <FontAwesomeIcon className="h-4 w-6" icon={faUserCircle} />
            <span className="ml-2">Mi Cuenta</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Prenavbar;
