import React, { useContext } from "react";
import { CartContext, CartContextType } from "../../utils/context/CartContext";
import { Cart } from "../../utils/types";

export default function CartContainer() {
  const { cartProduct, deleteItemProductFromCarts } = useContext(
    CartContext,
  ) as CartContextType;
  return (
    <div
      className="w-3/5 flex flex-col bg-white p-2 shadow-3xl"
      style={{ border: "solid .0450rem #000", borderRadius: "0.25rem" }}
    >
      <div className="flex flex-col mt-4 w-full">
        {cartProduct!.length > 0 ? (
          cartProduct?.map((productCart: Cart) => (
            <div className="flex flex-row justify-between" key={productCart.id}>
              <div className="flex flex-row py-2 gap-4">
                <img
                  src={productCart.thumbnail}
                  alt="img-cartlist-1"
                  style={{ width: 100, height: 70 }}
                />
                <div className="flex flex-col">
                  <a
                    href={`/products/${productCart.id}`}
                    className="text-base font-semibold underline hover:cursor-pointer"
                  >
                    {productCart.title}
                  </a>
                </div>
              </div>
              <div className="py-2">
                <span className="text-base font-normal">
                  Qty {productCart.quantity}
                </span>
              </div>
              <div className="py-2 px-4 flex flex-col">
                <span className="text-base font-semibold">
                  US $
                  {productCart.price
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </span>
                <span className="justify-items-end text-end line-through text-sm font-semibold text-gray-400">
                  US $12.99
                </span>
                <button
                  type="button"
                  onClick={() =>
                    deleteItemProductFromCarts(productCart.id as number)
                  }
                  className="justify-items-end text-end underline mt-8 text-blue-700 hover:text-blue-400"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <>
            <p className="text-center text-lg font-semibold">
              Your cart is <span className="text-red-600">empty</span>.
            </p>
            <p className="text-center text-sm font-normal text-gray-400">
              Time to start shopping!
            </p>
          </>
        )}
      </div>
    </div>
  );
}
