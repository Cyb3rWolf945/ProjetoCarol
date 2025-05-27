
import React from 'react';
import { useNavigate } from 'react-router';

function Product(props){
  const id = props.data.id;
  const name = props.data.nome;
  const price = props.data.preco;
  const image = props.data.imagem;
  const description = props.data.descricao;

  let navigate = useNavigate();

  function handleClick() {
    navigate(`/product/${id}`);
  }
  /*
    <div className="bg-background-5" style={{padding: '10px', borderRadius: '5px', boxShadow: '2px 2px 2px #00000055'}}>  
      <a href="#" className="group">
        <img src={image} alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"/>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginTop: '10px'}}>
          <p className="text-sm text-white">{name}</p>
          <p className="text-lg font-medium text-white">{price}€</p>
        </div>
      </a>
    </div> */
  return (
    <a onClick={handleClick}>
        <div class="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white shadow-md duration-300 hover:scale-105">
        <img class="h-48 w-full object-cover object-center" src={image} alt="Product Image" />
        <div class="p-4 flex flex-col">
        <h2 class="mb-2 text-lg font-medium text-gray-900">{name}</h2>
        <p class="mb-2 text-base text-gray-700">{description}</p>
        <div class="w-full flex items-center justify-end gap-1 mt-10">
            <p class="text-gray-900">Preço: </p>
            <p class="bg-background-2 p-2 rounded-sm mr-2 text-lg font-semibold text-gray-900 pt-0 pb-0">{price}€</p>
        </div>
        </div>
    </div>
    </a>
  )
}

export default Product