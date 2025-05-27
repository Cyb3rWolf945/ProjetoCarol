import React from "react";
import { CartContext, DataContext } from "../DataContext";
import { useContext } from "react";
import { Link } from "react-router";
import { CartItem } from '../components/CartItem'

function Cart() {
  const cart = useContext(CartContext).cart;
  const data = useContext(DataContext);
  console;
  const chosenItems = cart;
  console.log(cart);
  const chosenItemsValue = () => {
    let value = 0;
    chosenItems.forEach((item) => {
      value += data.filter((value) => value.id == item)[0].preco;
    });
    return value;
  };
  const shipping = 2;
  const tax = 0.24 * chosenItemsValue();
  const total = chosenItemsValue() + shipping;
  return (
    // <div className="container mx-auto p-20" style={{flex: 1, flexDirection: 'column', justifyItems: 'center'}}>
    //   <svg className="size-50" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-4 -4 32 32" stroke-width="1.5" stroke="currentColor">
    //     <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />

    //     <circle cx="12" cy="12" r="15"/>
    //   </svg>
    //   <p className="p-5">O teu carrinho de compras acessível está vazio. 😔</p>
    // </div>

    /*   ____    */
    /*   |  |    */
    /*   |  |    */
    /*   |  |    */
    /*  _|  |_   */
    /*  \    /   */
    /*   \  /    */
    /*    \/     */
    /*cart.length*/
    <>
      {true}

      {cart.length === 0 ? (
        <div
          className="container mx-auto p-20"
          style={{ flex: 1, flexDirection: "column", justifyItems: "center" }}
        >
          <svg
            className="size-50"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="-4 -4 32 32"
            stroke-width="1.5"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />

            <circle cx="12" cy="12" r="15" />
          </svg>
          <p className="p-5">
            O teu carrinho de compras acessível está vazio. 😔
          </p>
        </div>
      ) : (
        <div className="max-w-5xl max-lg:max-w-2xl mx-auto p-4">
          <h1 className="text-xl font-semibold text-slate-900">Carrinho</h1>
          <div className="grid lg:grid-cols-3 lg:gap-x-8 gap-x-6 gap-y-8 mt-6">
            <div className="lg:col-span-2 space-y-6">
              {chosenItems.map((item, i) => (
                <CartItem id={item} pos={i}/>
              ))}
            </div>

            <div className="bg-white rounded-md px-4 py-6 h-max shadow-sm border border-gray-200">
              <ul className="text-slate-500 font-medium space-y-4">
                <li className="flex flex-wrap gap-4 text-sm">
                  Subtotal{" "}
                  <span className="ml-auto font-semibold text-slate-900">
                    {chosenItemsValue().toFixed(2)}€
                  </span>
                </li>
                <li className="flex flex-wrap gap-4 text-sm">
                  Shipping{" "}
                  <span className="ml-auto font-semibold text-slate-900">
                    {shipping.toFixed(2)}€
                  </span>
                </li>
                <li className="flex flex-wrap gap-4 text-sm">
                  Tax{" "}
                  <span className="ml-auto font-semibold text-slate-900">
                    {tax.toFixed(2)}€
                  </span>
                </li>
                <hr className="border-slate-300" />
                <li className="flex flex-wrap gap-4 text-sm font-semibold text-slate-900">
                  Total <span className="ml-auto">{total.toFixed(2)}€</span>
                </li>
              </ul>
              <div className="mt-8 space-y-4">
                <button
                  type="button"
                  className="text-sm px-4 py-2.5 w-full font-medium tracking-wide border-background border-2 bg-background-2 hover:bg-background-4 hover:text-white text-black rounded-md cursor-pointer"
                >
                  Comprar Agora
                </button>
                <Link to="/product">
                  <button
                    type="button"
                    className="text-sm px-4 py-2.5 w-full font-medium tracking-wide bg-slate-50 hover:bg-slate-100 text-slate-900 border border-gray-300 rounded-md cursor-pointer"
                  >
                    Continuar a comprar
                  </button>
                </Link>
              </div>
              <div className="mt-5 flex flex-wrap justify-center gap-4">
                <img
                  src="https://readymadeui.com/images/master.webp"
                  alt="card1"
                  className="w-10 object-contain"
                />
                <img
                  src="https://readymadeui.com/images/visa.webp"
                  alt="card2"
                  className="w-10 object-contain"
                />
                <img
                  src="https://readymadeui.com/images/american-express.webp"
                  alt="card3"
                  className="w-10 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;
