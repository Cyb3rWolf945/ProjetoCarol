import React from "react";
import { Link } from "react-router";

function HeroSection() {
  return (
    <>
      <div className="relative overflow-hidden mt-2 m-5">
        <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48 ">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8 ">
            <div className="sm:max-w-xl">
              <h1 className="text-4xl font-bold tracking-tight text-textColor sm:text-6xl">
                🌞 Estilo de Verão com Inclusão
              </h1>
              <p className="mt-4 text-xl text-textColor font-semibold">
                Na Horizon Inclusive, o verão chega com leveza, conforto e
                acessibilidade.
              </p>
              <p className="mt-4 text-sm text-textColor">
                Descobre a nossa nova coleção pensada para todas as pessoas —
                com peças adaptadas, elegantes e feitas a pensar nas diferentes
                necessidades do teu dia a dia.
              </p>
            </div>
            <div>
              <div className="mt-10">
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:top-0 sm:left-1/2 sm:translate-x-8 lg:top-1/2 lg:left-1/2 lg:translate-x-8 lg:-translate-y-1/2">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <img
                            src="https://i.pinimg.com/736x/cd/28/7e/cd287ea5a095e2b85e6da9df64795e06.jpg"
                            alt=""
                            className="size-full object-cover"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://i.pinimg.com/736x/9e/79/f9/9e79f91648888220181fb5bec97bc611.jpg"
                            alt=""
                            className="size-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://i.pinimg.com/736x/66/a7/a6/66a7a60264c53f4b89630bc7b22d6d9e.jpg"
                            alt=""
                            className="size-full object-cover"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://i.pinimg.com/736x/22/54/fc/2254fc17e7758a3c4b79d115458a8b5d.jpg"
                            alt=""
                            className="size-full object-cover"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://i.pinimg.com/736x/48/8e/07/488e07799f1b72cf4ad2e713662792f8.jpg"
                            alt=""
                            className="size-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://i.pinimg.com/736x/39/cc/8c/39cc8cb1a9dd1b5c0816a1c32ad155ad.jpg"
                            alt=""
                            className="size-full object-cover"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://i.pinimg.com/736x/2c/7a/34/2c7a34e2bd95943ab2801719d27172e3.jpg"
                            alt=""
                            className="size-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Link
                  to="/product"
                  className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
                >
                  Comprar
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
