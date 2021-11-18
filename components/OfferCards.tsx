import Image from "next/image";

const OfferCards = () => {
  return (
    <div className="flex flex-col md:flex-row px-4 md:px-0 container mx-auto my-6 md:space-x-4 space-y-4 md:space-y-0">
      <div className="relative h-96 w-full md:w-2/3">
        <Image
          src="/1-offer-card-desktop.jpg"
          objectFit="cover"
          layout="fill"
          className="rounded-md"
        />
        <div className="absolute top-0 left-0 ml-10 mt-8 text-white">
          <div className="flex md:w-2/3 flex-col space-y-2">
            <h2 className="text-3xl font-normal">
              Vinculá tus servicios y aprovechá una Conexión Total
            </h2>
            <p className="text-sm">
              Por tener Personal en tu casa y en tu celu, accedé a beneficios y
              descuentos en tu factura
            </p>
          </div>
          <button className="bg-black bg-opacity-90 py-2 px-8 rounded-md mt-20">
            Ver Beneficios
          </button>
        </div>
      </div>
      <div className="relative h-96 w-full md:w-1/3 rounded-sm">
        <Image
          src="/2-offer-card-desktop.jpg"
          objectFit="cover"
          layout="fill"
          className="rounded-md"
        />
        <div className="absolute top-0 left-0 ml-10 mt-8 text-white">
          <div className="flex flex-col space-y-2">
            <p className="text-sm uppercase">
              El celu que buscás al mejor precio
            </p>
            <h2 className="text-3xl font-normal">
              Conseguilo en 6 cuotas sin interés y liberado
            </h2>
          </div>
          <button className="bg-black bg-opacity-90 py-2 px-8 rounded-md mt-20">
            Conocer más
          </button>
        </div>
      </div>
    </div>
  );
};

export default OfferCards;
