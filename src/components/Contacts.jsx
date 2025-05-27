import React from "react";

function Contacts() {
  return (
    <>
      <div class="bg-background-1 py-24 sm:py-32">
        <div class="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
          <div class="max-w-xl">
            <h2 class="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">
              Conheça a nossa liderança
            </h2>
            <p class="mt-6 text-lg/8 text-gray-600">
              Somos um grupo dinâmico de indivíduos apaixonados pelo que fazemos
              e dedicados a alcançar os melhores resultados para os nossos
              clientes.
            </p>
          </div>
          <ul
            role="list"
            class="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
          >
            <li>
              <div class="flex items-center gap-x-6">
                <img
                  class="size-16 rounded-full"
                  src="https://avatar.iran.liara.run/public/83"
                  alt=""
                />
                <div>
                  <h3 class="text-base/7 font-semibold tracking-tight text-gray-900">
                    Ana Soares
                  </h3>
                  <p class="text-sm/6 font-semibold text-indigo-600">
                    Co-Founder / Comercial / Marketing / Qualidade / Logística
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div class="flex items-center gap-x-6">
                <img
                  class="size-16 rounded-full"
                  src="https://avatar.iran.liara.run/public/83"
                  alt=""
                />
                <div>
                  <h3 class="text-base/7 font-semibold tracking-tight text-gray-900">
                    Carolina Prata
                  </h3>
                  <p class="text-sm/6 font-semibold text-indigo-600">
                    Co-Founder / RH / Comunicação / Financeiro
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div class="flex items-center gap-x-6">
                <img
                  class="size-16 rounded-full"
                  src="https://avatar.iran.liara.run/public/36"
                  alt=""
                />
                <div>
                  <h3 class="text-base/7 font-semibold tracking-tight text-gray-900">
                    David Santos
                  </h3>
                  <p class="text-sm/6 font-semibold text-indigo-600">
                    Co-Founder / R. Direção Estratégica / Diretor-Geral
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Contacts;
