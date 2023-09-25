/** @format */

import React from "react";
import { Navigate, RouteObject } from "react-router-dom";

const Work = React.lazy(() => import("@/views/work"));
const My = React.lazy(() => import("@/views/my"));
const About = React.lazy(() => import("@/views/about"));
const Tools = React.lazy(() => import("@/views/tools"));

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to="work" />,
  },
  { path: "/work", element: <Work /> },
  { path: "/my", element: <My /> },
  { path: "/blog", element: <About /> },
  { path: "/tools", element: <Tools /> },
];
export default routes;