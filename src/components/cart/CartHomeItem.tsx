/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CartContext, CartContextType } from "../../utils/context/CartContext";
import { Cart } from "../../utils/types";

function CartHomeItem() {
  const [cart, setCart] = useState([]);
  const { cartProduct } = useContext(CartContext) as CartContextType;

  useEffect(() => {
    const cartItems = localStorage.getItem("cart");
    if (cartItems !== null) setCart(JSON.parse(cartItems));
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartProduct));
    const cartItems = localStorage.getItem("cart");
    if (cartItems !== null) setCart(JSON.parse(cartItems));
  }, [cartProduct]);

  return (
    <div className="group block sm:group sm:block">
      <div className="flex">
        <AiOutlineShoppingCart className="lg:text-2xl sm:text-xl hover:cursor-pointer hover:text-blue-500" />
        {cart?.length > 0 && (
          <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
        )}
      </div>
      <div className="absolute hidden text-gray-700 pt-1 right-0 group-hover:block sm:pt-1 sm:w-60 sm:p-4 sm:group-hover:block md:pt-1 md:w-96 md:p-10 md:group-hover:block lg:pt-1 lg:w-96 lg:p-12">
        <div
          className="rounded-t bg-white py-2 px-4 inline-block shadow-3xl w-full"
          style={{
            border: "solid .0625rem #000",
            borderRadius: ".25rem",
            position: "relative",
            zIndex: "5",
          }}
        >
          <span className="text-md font-bold text-gray-700">Shopping cart</span>
          {cart!.length > 0 ? (
            <>
              <div className="flex flex-col overflow-y-auto max-h-56 w-full">
                {cart?.map((productData: Cart) => (
                  <div
                    className="flex flex-row mt-2 max-w-full"
                    key={productData.id}
                  >
                    <img
                      src={productData.thumbnail}
                      alt="img-cart"
                      className="object-contain border-2"
                      style={{ height: 80, width: 80 }}
                    />
                    <div className="flex flex-col pl-2 ">
                      <span className="text-md font-semibold">
                        {productData.title}
                      </span>
                      <div className="flex flex-row justify-between max-w-full">
                        <p className="text-base font-semibold">
                          $
                          {productData.price
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        </p>
                        <p className="text-md text-gray-400">
                          Qty: {productData.quantity}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col mt-8">
                <a
                  href="/products/cart"
                  className="text-center bg-white-500 text-blue-700 font-bold py-2 px-4 rounded border-blue-700 border mt-2"
                >
                  View chart
                </a>
              </div>
            </>
          ) : (
            <>
              <p className="text-md font-bold text-gray-700">
                Your chart is empty
              </p>
              <p className="text-sm font-normal text-gray-400">
                Time to start shopping!
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default CartHomeItem;
