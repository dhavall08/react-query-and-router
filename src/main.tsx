import React from "react";
import { RouterProvider } from "react-router-dom"
import ReactDOM from "react-dom/client";
import { QueryClientProvider } from "@tanstack/react-query";

import router, { queryClient } from "./routes";
import "./index.css";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <div className="max-w-screen-lg mx-auto px-2">
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} position="bottom" />
      </div>
    </QueryClientProvider>
  </React.StrictMode>,
);
