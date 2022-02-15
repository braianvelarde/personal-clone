import Image from "next/image";

export const ServiceSection = () => {
  return (
    <>
      <div className="flex container mx-auto">
        <h2 className="text-lg">
          Viví una experiencia ilimitada con nuestras ofertas
        </h2>
        <a className="text-sm text-blue-400 cursor-pointer hover:underline">
          Ver ofertas
        </a>
      </div>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 items-baseline container mx-auto px-4">
        <div className="pb-4 bg-white flex-1 flex flex-col rounded-md cursor-pointer space-y-2 hover:shadow-2xl">
          <div className="relative h-28 w-full">
            <Image
              quality={100}
              objectFit="cover"
              src="/1-card-offer-desktop.jpg"
              layout="fill"
            />
          </div>
          <div className="px-4 space-y-2">
            <h3 className="text-xs text-gray-600">
              <strong className="text-lg text-black">$2.490 </strong> final x
              mes
            </h3>
            <p className="text-gray-500 text-xs">
              Precio de lista <span className="line-through">$6.913</span>
            </p>
            <p>Móvil 5GB + Internet 100 MB</p>
            <div className=" flex">
              <span className="text-white text-xs font-medium py-1 px-2 bg-pink-700 rounded-md">
                Conexión Total
              </span>
            </div>
          </div>
        </div>
        <div className="pb-4 flex-1  bg-white flex flex-col rounded-md cursor-pointer md:space-y-0   space-y-2 hover:shadow-2xl">
          <div className="relative h-28 w-full">
            <Image
              quality={100}
              objectFit="cover"
              src="/2-card-offer-desktop.jpg"
              layout="fill"
            />
          </div>
          <div className="px-4 space-y-2">
            <h3 className="text-xs text-gray-600">
              <strong className="text-lg text-black">$3.190 </strong> final x
              mes
            </h3>
            <p className="text-gray-500 text-xs">
              Precio de lista <span className="line-through">$8.090</span>
            </p>
            <p>Internet 100 MB + Flow Box</p>
            <div className=" flex">
              <span className="text-white text-xs font-medium py-1 px-2 bg-pink-700 rounded-md">
                Cliente Línea Móvil
              </span>
            </div>
          </div>
        </div>
        <div className="pb-4 flex-1 bg-white flex flex-col rounded-md cursor-pointer space-y-2 hover:shadow-2xl">
          <div className="relative h-28 w-full">
            <Image
              quality={100}
              objectFit="cover"
              src="/3-card-offer-desktop.jpg"
              layout="fill"
            />
          </div>
          <div className="px-4 space-y-2">
            <h3 className="text-xs text-gray-600">
              <strong className="text-lg text-black">$3.520 </strong> final x
              mes
            </h3>
            <p className="text-gray-500 text-xs">
              Precio de lista <span className="line-through">$7.255</span>
            </p>
            <p className="pb-4">Internet 50 MB + Flow Box</p>
          </div>
        </div>
      </div>
    </>
  );
};
