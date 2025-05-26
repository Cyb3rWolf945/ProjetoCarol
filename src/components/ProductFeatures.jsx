import React from "react";

function ProductFeatures() {
  return (
    <>
      <div className="p-5">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Funcionalidade com Estilo
            </h2>
            <p className="mt-4 text-gray-500">
              As nossas peças são desenhadas para se adaptarem ao teu dia a dia,
              oferecendo conforto, autonomia e elegância. Desde roupa fácil de
              vestir até acessórios adaptados, tudo foi pensado para simplificar
              e valorizar cada momento.
            </p>

            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Acessibilidade</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  Fechos magnéticos, botões fáceis de manusear e cortes pensados
                  para facilitar o vestir.
                </dd>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">
                  Materiais Inclusivos
                </dt>
                <dd className="mt-2 text-sm text-gray-500">
                  Tecidos macios, respiráveis e resistentes, ideais para peles
                  sensíveis ou uso prolongado.
                </dd>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Design Adaptado</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  Modelos ajustáveis e sem costuras irritantes — para conforto
                  durante todo o dia.
                </dd>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Estilo para Todos</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  Moda inclusiva que combina funcionalidade com tendências
                  atuais, sem comprometer o estilo.
                </dd>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Pensado em Ti</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  Desenvolvido com a colaboração de pessoas com deficiência —
                  por e para a comunidade.
                </dd>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Tamanhos Reais</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  Variedade de tamanhos e ajustes que respeitam todas as formas
                  e corpos.
                </dd>
              </div>
            </dl>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
            <img
              src="https://contents.mediadecathlon.com/p2487410/k$7d9eff029a64716a30070af5dae90c97/sq/casaco-com-fecho-facil-de-vestir-desporto-adaptado-mulher-bege.jpg?format=auto&f=1200x1200"
              alt="Pessoa a vestir uma camisola adaptada com fecho fácil."
              className="rounded-lg bg-gray-100 h-70 w-74"
            />
            <img
              src="https://i.pinimg.com/736x/0c/b1/3b/0cb13b8bea9a3813503868023dcbd681.jpg"
              alt="Sapatos acessíveis com design moderno."
              className="rounded-lg bg-gray-100 h-70 w-74"
            />
            <img
              src="https://i.pinimg.com/736x/ad/ee/a9/adeea9cad3e7a16ef8aed9fc06a00dbd.jpg"
              alt="Mulher sentada com roupa inclusiva e confortável."
              className="rounded-lg bg-gray-100 h-70 w-74"
            />
            <img
              src="https://tix.life/wp-content/uploads/2018/05/navegacao-para-cegos-1080x608-870x490.jpg"
              alt="Homem com deficiência visual a usar um acessório prático."
              className="rounded-lg bg-gray-100 h-70 w-74"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductFeatures;
