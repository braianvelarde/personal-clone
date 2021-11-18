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
      className={close ? "hidden" : "container mt-2 mx-auto relative h-[251px]"}
    >
      <Image
        src="/fibertel-ahora-es-personal-desktop2.jpg"
        layout="fill"
        objectFit="contain"
        quality={100}
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
