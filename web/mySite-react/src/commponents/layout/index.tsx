/** @format */

import React, { memo, Suspense } from "react";
import type { FC, ReactNode } from "react";
import AppHeader from "../app-header";
import Tools from "../tools";
import AppFooter from "../app-footer";
import { Outlet, useRoutes } from "react-router-dom";
import routes from "@/router";

/** @format */
interface IProps {
  children?: ReactNode;
}

const Layout: FC<IProps> = () => {
  return (
    <div className="layout">
      <AppHeader />
      <Suspense fallback="loading...">
        <div className="main">
          <Outlet />
        </div>
        <Tools />
      </Suspense>
      <AppFooter />
    </div>
  );
};

export default memo(Layout);
