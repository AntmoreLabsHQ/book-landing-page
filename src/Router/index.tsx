import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../components/share/Layout";
import Home from "../container/Home";
import React from "react";

const route = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [{ path: "/", Component: Home }],
  },
]);

const Router: React.FC = () => {
  return (
    <div>
      <RouterProvider router={route} />
    </div>
  );
};

export default Router;
