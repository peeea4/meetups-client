import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ErrorPage } from "../../pages/ErrorPage/ErrorPage";
import { MainPage } from "../../pages/MainPage/MainPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export const AppRoutes = () => {
  return <RouterProvider router={router} />;
};
