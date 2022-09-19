/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { PropsWithChildren, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Cart } from "../types";

function getInitialState() {
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : [];
}

export default function CartProvider(props: PropsWithChildren<{}>) {
  const [cartProduct, setCartProduct] = useState<Cart[]>(getInitialState);

  const addProductToCarts = (
    idProduct: number,
    title: string,
    thumbnail: string,
    price: number,
    discount: number,
    quantityItem: number,
  ) => {
    const cartCopy = [...cartProduct];
    const existingItems = cartProduct.find(
      (cartItem) => cartItem.id === idProduct,
    );

    const itemProduct = {
      id: idProduct,
      title,
      thumbnail,
      price,
      discount,
      quantity: quantityItem,
    };

    if (existingItems) {
      existingItems.quantity += quantityItem;
    } else {
      cartCopy.push(itemProduct);
    }
    setCartProduct(cartCopy);
    localStorage.setItem("cart", JSON.stringify(cartCopy));
  };

  const deleteItemProductFromCarts = (idProduct: number) => {
    let cartCopy = [...cartProduct];

    cartCopy = cartCopy.filter((item) => item.id !== idProduct);

    setCartProduct(cartCopy);
    localStorage.setItem("cart", JSON.stringify(cartCopy));
  };

  return (
    <CartContext.Provider
      value={{ cartProduct, addProductToCarts, deleteItemProductFromCarts }}
      {...props}
    />
  );
}
