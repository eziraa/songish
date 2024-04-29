import { createBrowserRouter } from "react-router-dom";
import GetStarted from "../../components/pages/get-started/get-started";
import HomePage from "../../components/pages/homepage/home-page";

export const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <GetStarted />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
]);
