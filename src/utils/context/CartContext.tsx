import { createContext } from "react";
import { Cart } from "../types";

type CartContextType = {
  cart?: Cart;
  updateProductToCart: (product: Cart) => void;
};

export const CartContext = createContext<CartContextType>({
  updateProductToCart: () => {},
});
