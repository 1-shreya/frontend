import  React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./components/Home";

import Create from "./components/Create";
import Update from "./components/Update";
import About from "./components/About";

const customRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
     
      {
        path: "/create",
        element: <Create />,
      },
      {
        path: "/update",
        element: <Update/>
      },
      {
        path: "/about",
        element: <About/>
      },
    ],
  },
]);

export default customRouter;
