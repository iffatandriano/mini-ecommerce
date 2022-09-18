/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/require-default-props */
import React, { PropsWithChildren, useState } from "react";
import { Provider as ReduxProvider } from "react-redux";
import { QueryClientProvider, QueryClient } from "react-query";
import { Routes, Route } from "react-router-dom";
import { store } from "./store";
// import AppPage from "./pages/AppPage";
import HomesPage from "./pages/homes/HomesPage";
import ProductHomesDetail from "./components/products/ProductHomesDetail";
import ProductViewAll from "./components/products/ProductViewAll";
import ProductViewByCategories from "./components/products/ProductViewByCategories";
import { CartContext } from "./utils/context/CartContext";
import { Cart } from "./utils/types";
import CartPage from "./pages/cart/CartPage";

const queryClient = new QueryClient();

type Props = {
  cart?: Cart;
  setCart: React.Dispatch<React.SetStateAction<Cart | undefined>>;
};

function AppWithProviders({
  children,
  cart,
  setCart,
}: PropsWithChildren & Props) {
  return (
    <QueryClientProvider client={queryClient}>
      <ReduxProvider store={store}>
        <CartContext.Provider value={{ cart, updateProductToCart: setCart }}>
          {children}
        </CartContext.Provider>
      </ReduxProvider>
    </QueryClientProvider>
  );
}

function App() {
  const [cart, setCart] = useState<Cart>();
  return (
    <AppWithProviders cart={cart} setCart={setCart}>
      <Routes>
        <Route path="/" element={<HomesPage />} />
        <Route path="/products" element={<ProductViewAll />} />
        <Route path="/products/:id" element={<ProductHomesDetail />} />
        <Route
          path="/products/category/:category"
          element={<ProductViewByCategories />}
        />
        <Route path="/products/cart" element={<CartPage />} />
      </Routes>
    </AppWithProviders>
  );
}

export default App;
