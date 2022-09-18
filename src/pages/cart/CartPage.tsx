import React from "react";
import Cart from "../../components/cart/Cart";
import Checkout from "../../components/checkout/Checkout";
import MainLayout from "../../components/mainlayout";

export default function CartPage() {
  return (
    <MainLayout>
      <p className="text-lg font-semibold">Shopping cart (5 items)</p>
      <div className="flex flex-row mt-2 gap-4">
        <Cart />
        <Checkout />
      </div>
    </MainLayout>
  );
}
