import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom";
import "./index.css";

import Root from "./routes/root";
import ErrorPage from './error-page';
import TicTacToe from "./routes/tic-tac-toe";
import { ticTacToeLoader } from "./loaders/tic_tac_toe_loader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/tic-tac-toe",
    element: <TicTacToe />,
    loader: ticTacToeLoader,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
