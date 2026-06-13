import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { router } from "./Routes/MainRouter.jsx";
import "./index.css";
import { Store } from "./App/Store.js";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <Provider store={Store}>
    <RouterProvider router={router} />
  </Provider>,
);
