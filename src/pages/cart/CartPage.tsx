import React, { useContext } from "react";
import CartContainer from "../../components/cart/CartContainer";
import Checkout from "../../components/checkout/Checkout";
import MainLayout from "../../components/mainlayout";
import { CartContext, CartContextType } from "../../utils/context/CartContext";

export default function CartPage() {
  const { cartProduct } = useContext(CartContext) as CartContextType;
  return (
    <MainLayout>
      <p className="text-lg font-semibold">
        Shopping cart ({cartProduct?.length} items)
      </p>
      <div className="flex flex-row mt-2 gap-4">
        <CartContainer />
        <Checkout />
      </div>
    </MainLayout>
  );
}
