import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

import { FavoriteProvider } from "./context/FavoriteContext.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(

  <React.StrictMode>

    <BrowserRouter>

      <ThemeProvider>

        <FavoriteProvider>

          <App />

        </FavoriteProvider>

      </ThemeProvider>

    </BrowserRouter>

  </React.StrictMode>

);