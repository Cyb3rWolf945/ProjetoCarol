import React from "react";
import { CartContext, DataContext } from "../DataContext";
import { useContext } from "react";
import { Link } from "react-router";

export function CartItem(props) {
    const id = props.id;
    const pos = props.pos;
    const cart = useContext(CartContext);
    const data = useContext(DataContext);
    const currentItem = data.filter((value) => value.id == id)[0];
    const name = currentItem.nome;
    const price = currentItem.preco;
    const image = currentItem.imagem;
    const description = currentItem.descricao;
    const longDescription = currentItem.longDescription;
  
    const onDelete = () => {
      const newCart = [...cart.cart]
      newCart.splice(pos, 1)
      cart.setCart(newCart)
    }
  
    return (
      <div className="flex gap-4 bg-white px-4 py-6 rounded-md shadow-sm border border-gray-200">
        <div className="flex gap-6 sm:gap-4 max-sm:flex-col">
          <div className="w-24 h-24 max-sm:w-24 max-sm:h-24 shrink-0">
            <img src={image} className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="text-sm sm:text-base font-semibold text-slate-900">
                {name}
              </h3>
              <p className="text-[13px] font-medium text-slate-500 mt-2 flex items-center gap-2">
                Cor:{" "}
                <span className="inline-block w-4 h-4 rounded-sm bg-[#e8dcdc]"></span>
              </p>
            </div>
            <div className="mt-auto">
              <h3 className="text-sm font-semibold text-slate-900">{price}€</h3>
            </div>
          </div>
        </div>
  
        <div className="ml-auto flex flex-col">
          <div className="flex items-start gap-4 justify-end">
              <a>
                  <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 cursor-pointer fill-slate-400 hover:fill-pink-600 inline-block"
                  viewBox="0 0 64 64"
              >
                  <path
                  d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                  data-original="#000000"
                  ></path>
              </svg>
              </a>
            <a
              onClick={onDelete}>
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 cursor-pointer fill-slate-400 hover:fill-red-600 inline-block"
                  viewBox="0 0 24 24"
              >
                  <path
                  d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                  data-original="#000000"
                  ></path>
                  <path
                  d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                  data-original="#000000"
                  ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    );
  }