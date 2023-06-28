import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import App from "./App";
import "./index.css";
import store from "./store";
import "./i18n";
import Loading from "./components/Loading";


// ----------- models --------------
// import CartSideModel from "@/components/Models/CartSideModel";
// import QuickViewModel from "@/components/Models/QuickViewModel";
// import PictureModel from "@/components/Models/PictureModel";

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 0, refetchOnWindowFocus: false } },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Suspense fallback={<Loading />}>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <App />
      </Provider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </Suspense>
  // </React.StrictMode> 
);
