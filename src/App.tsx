import React, { PropsWithChildren } from "react";
import { Provider as ReduxProvider } from "react-redux";
import { QueryClientProvider, QueryClient } from "react-query";
import { Routes, Route } from "react-router-dom";
import { store } from "./store";
// import AppPage from "./pages/AppPage";
import HomesPage from "./pages/homes/HomesPage";
import ProductHomesDetail from "./components/products/ProductHomesDetail";
import ProductViewAll from "./components/products/ProductViewAll";

const queryClient = new QueryClient();

function AppWithProviders({ children }: PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>
      <ReduxProvider store={store}>{children}</ReduxProvider>
    </QueryClientProvider>
  );
}

function App() {
  return (
    <AppWithProviders>
      <Routes>
        <Route path="/" element={<HomesPage />} />
        <Route path="/products" element={<ProductViewAll />} />
        <Route path="/products/:id" element={<ProductHomesDetail />} />;
      </Routes>
    </AppWithProviders>
  );
}

export default App;
