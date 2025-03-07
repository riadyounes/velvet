import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Sobre",
};

export default function AboutPage() {
  return (
    <div className="">
      <div
        className="flex h-64 items-center bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/bg-about-2.jpg')" }}
      >
        <div className="mx-auto w-full max-w-[1200px]">
          <div>
            <h1 className="text-left text-5xl font-bold text-white">Sobre</h1>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-4 max-w-[1200px] px-4">
        <div className="mb-12 grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-semibold text-brand-900">
              Nossa História
            </h2>
            <p className="mb-4 text-gray-600">
              A Velvet nasceu em 2010 da paixão de Maria Silva por criar bolos
              deliciosos e visualmente deslumbrantes. O que começou como um
              hobby na cozinha de casa rapidamente se transformou em um negócio
              próspero, graças ao sabor único e à qualidade incomparável dos
              nossos bolos.
            </p>
            <p className="text-gray-600">
              Hoje, a Velvet é reconhecida como uma das melhores confeitarias
              artesanais da cidade, continuando a inovar e encantar nossos
              clientes com criações únicas e saborosas.
            </p>
          </div>
          <div className="relative h-80 md:h-96">
            <Image
              src="/assets/dona.jpg"
              alt="Fundadora Maria Silva na cozinha da Velvet"
              layout="fill"
              objectFit="cover"
              className="rounded-2xl shadow-lg"
            />
            {/* <div className="w-full md:w-1/3">
              <img
                src="/assets/dona.jpg"
                alt="Nossa Chef"
                className="h-auto w-full  object-cover shadow-lg"
              />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
