/** @format */

import { memo, Suspense } from "react";
import type { FC, ReactNode } from "react";
import "@/assets/css/app.less";
import { useRoutes } from "react-router-dom";
import routes from "./router";

/** @format */
interface IProps {
  children?: ReactNode;
}

const App: FC<IProps> = () => {
  return (
    <div className="app">
      <Suspense fallback={"loading..."}>{useRoutes(routes)}</Suspense>
    </div>
  );
};

export default memo(App);
