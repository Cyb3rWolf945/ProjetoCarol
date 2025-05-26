import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const comments = [
    {
      text: "“Fiquei verdadeiramente surpreendida com a utilidade do produto. Comprei para a minha irmã, que tem mobilidade reduzida, e foi incrível ver o quanto a ajudou no dia a dia. Já recomendei a várias pessoas!”",
      name: "Sofia Almeida",
      title: "Consultora de Imagem",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    {
      text: "“Produto excelente! Comprei para o meu pai, que tem algumas dificuldades motoras, e facilitou-lhe bastante as tarefas diárias. É reconfortante poder dar mais autonomia a quem mais gostamos.”",
      name: "Rui Simões",
      title: "Engenheiro informático",
      avatar: "https://media.licdn.com/dms/image/v2/D4D03AQER-JFOO_0TzA/profile-displayphoto-shrink_800_800/B4DZSDCohNHkAg-/0/1737365294048?e=1753920000&v=beta&t=Zadg9dm9enzyw61L8NjDwBZ-8eO9VIZlqF1f2UOcKTE"
    },
    {
      text: "“O serviço foi impecável e a entrega rápida. Ofereci o produto ao meu sogro, que está a recuperar de um AVC, e ajudou-o imenso na rotina diária. Estamos muito gratos por esta solução prática e eficaz.”",
      name: "Joana Matos",
      title: "Gestora de Projetos",
      avatar: "https://randomuser.me/api/portraits/women/22.jpg"
    },
    {
      text: "“Uma agradável surpresa! Comprei para a minha mãe, que tem dificuldades visuais, e foi incrível ver como se adaptou tão bem. Uma solução simples que fez uma grande diferença.”",
      name: "António Gonçalves",
      title: "Designer Gráfico",
      avatar: "https://media.licdn.com/dms/image/v2/D4D35AQHmP9nFDRu5mw/profile-framedphoto-shrink_200_200/B4DZbzUv1jGYAs-/0/1747839024977?e=1748901600&v=beta&t=ws2x1Kfuh4G2qi9PFpaxUORkkmlVZCKB5t1VKJahTCs"
    },
  ]
  
  

function CarrouselComments() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false
  }

  return (
    <section className="relative isolate overflow-hidden bg-background-2 px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <Slider {...settings} className="mt-10">
          {comments.map((comment, index) => (
            <figure key={index} className="text-center">
              <blockquote className="text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
                <p>{comment.text}</p>
              </blockquote>
              <figcaption className="mt-10">
                <img className="mx-auto size-10 rounded-full" src={comment.avatar} alt={comment.name} />
                <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                  <div className="font-semibold text-gray-900">{comment.name}</div>
                  <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" className="fill-gray-900">
                    <circle cx="1" cy="1" r="1" />
                  </svg>
                  <div className="text-gray-600">{comment.title}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default CarrouselComments
