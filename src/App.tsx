import React, { PropsWithChildren } from "react";
import { Provider as ReduxProvider } from "react-redux";
import { QueryClientProvider, QueryClient } from "react-query";
import { Routes, Route } from "react-router-dom";
import { store } from "./store";
// import AppPage from "./pages/AppPage";
import HomesPage from "./pages/homes/HomesPage";

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
        <Route path="/" element={<HomesPage />} />;
      </Routes>
    </AppWithProviders>
  );
}

export default App;
