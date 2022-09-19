import { createContext } from "react";
import { Cart } from "../types";

export type CartContextType = {
  cartProduct?: Cart[];
  addProductToCarts: (
    idProduct: number,
    title: string,
    thumbnail: string,
    price: number,
    discount: number,
    quantity: number,
  ) => void;
  deleteItemProductFromCarts: (idProduct: number) => void;
  increaseQuantityProductById: (idProduct: number, quantity: number) => void;
  decreaseQuantityProductById: (idProduct: number, quantity: number) => void;
};

export const CartContext = createContext<CartContextType | null>(null);
