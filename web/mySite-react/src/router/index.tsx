/** @format */

import React from "react";
import { Navigate, RouteObject } from "react-router-dom";

const Loyout = React.lazy(() => import("@/commponents/layout"));
const Work = React.lazy(() => import("@/views/work"));
const My = React.lazy(() => import("@/views/my"));
const About = React.lazy(() => import("@/views/about"));
const Tools = React.lazy(() => import("@/views/tools"));
const FullEditors = React.lazy(() => import("@/views/fullEditors"));

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to="layout" />,
  },
  {
    path: "/layout",
    element: <Loyout />,
    children: [
      {
        path: "/layout",
        element: <Navigate to="/layout/my" />,
      },
      { path: "/layout/work", element: <Work /> },
      { path: "/layout/my", element: <My /> },
      { path: "/layout/blog", element: <About /> },
      { path: "/layout/tools", element: <Tools /> },
    ],
  },
  {
    path: "/fullEditors",
    element: <FullEditors />,
  },
];
export default routes;
