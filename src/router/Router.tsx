import { createBrowserRouter, RouterProvider } from "react-router-dom";

import FrontEnd from "../pages/FrontEnd/index.tsx";
import Home from "../pages/FrontEnd/Home.tsx";
import Zod from "../pages/FrontEnd/Zod.tsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <FrontEnd />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/zod',
        element: <Zod />,
      }
    ]
  },

]);

export default function Router() {
  return <RouterProvider router={router} />
}
