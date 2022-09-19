import React, { useContext } from "react";
import { CartContext, CartContextType } from "../../utils/context/CartContext";

export default function Checkout() {
  const { cartProduct } = useContext(CartContext) as CartContextType;

  const handleToCheckout = () => {
    const currentLocation = document.referrer;
    localStorage.removeItem("cart");
    window.location.replace(currentLocation);
  };

  return (
    <div
      className="w-2/5 bg-white p-2 shadow-3xl"
      style={{
        border: "solid .0450rem #000",
        height: 200,
        borderRadius: "0.25rem",
      }}
    >
      <p className="text-lg font-semibold">Order summary</p>
      <div className="flex flex-row justify-between">
        <div className="">
          <span>Items ({cartProduct?.length})</span>
        </div>
        <div className="px-2">
          <p className="font-normal">
            US $
            {cartProduct
              ?.reduce((total, item) => total + item.price * item.quantity, 0)
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
          </p>
        </div>
      </div>
      <div className="divide-y divide-gray-400 flex flex-col justify-center w-full">
        <br />
        <div className="flex flex-row justify-between">
          <span className="py-2">Subtotal</span>
          <p className="py-2 px-2">
            $
            {cartProduct
              ?.reduce((total, item) => total + item.price * item.quantity, 0)
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
          </p>
        </div>
        <button
          className="mt-4 rounded-lg h-10 w-full font-bold shadow-3xl"
          style={{
            backgroundColor: "#82BEFF",
            border: "solid .0450rem #000",
            borderRadius: "0.25rem",
          }}
          type="button"
          onClick={handleToCheckout}
        >
          GO TO CHECKOUT
        </button>
      </div>
    </div>
  );
}
