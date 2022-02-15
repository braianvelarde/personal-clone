import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const RelevantInfoBanner = () => {
  const [close, setClose] = useState(false);
  const handleClose = () => {
    setClose(!close);
  };
  return (
    <div
      className={
        close
          ? "hidden"
          : "container mt-2 md:px-0 px-4 mx-auto relative h-[251px] overflow-hidden "
      }
    >
      <img
        src="/fibertel-ahora-es-personal-desktop2.jpg"
        srcSet="/fibertel-ahora-es-personal-mobile2.jpg 428w,
        /fibertel-ahora-es-personal-desktop2.jpg 768w"
        sizes="(min-width:640px) 100vw, 70vw"
      />

      <FontAwesomeIcon
        onClick={handleClose}
        className="cursor-pointer h-6 w-6 text-white absolute top-9 right-5"
        icon={faTimes}
      />
    </div>
  );
};

export default RelevantInfoBanner;
