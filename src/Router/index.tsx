import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../components/share/Layout";
import Home from "../container/Home";

const route = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [{ path: "/", Component: Home }],
  },
]);

function Router() {
  return (
    <div>
      <RouterProvider router={route} />
    </div>
  );
}

export default Router;
