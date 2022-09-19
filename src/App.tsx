/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/require-default-props */
import React, { PropsWithChildren } from "react";
import { Provider as ReduxProvider } from "react-redux";
import { QueryClientProvider, QueryClient } from "react-query";
import { Routes, Route } from "react-router-dom";
import { store } from "./store";
// import AppPage from "./pages/AppPage";
import HomesPage from "./pages/homes/HomesPage";
import ProductHomesDetail from "./components/products/ProductHomesDetail";
import ProductViewAll from "./components/products/ProductViewAll";
import ProductViewByCategories from "./components/products/ProductViewByCategories";
import CartPage from "./pages/cart/CartPage";
import CartProvider from "./utils/hooks/useContext";

const queryClient = new QueryClient();

function AppWithProviders({ children }: PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>
      <ReduxProvider store={store}>
        <CartProvider>{children}</CartProvider>
      </ReduxProvider>
    </QueryClientProvider>
  );
}

function App() {
  return (
    <AppWithProviders>
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
