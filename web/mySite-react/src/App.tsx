/** @format */

import { memo, Suspense } from "react";
import type { FC, ReactNode } from "react";
import AppHeader from "./commponents/app-header";
import AppFooter from "./commponents/app-footer";

/** @format */
interface IProps {
  children?: ReactNode;
}

const App: FC<IProps> = () => {
  return (
    <div className="app">
      <AppHeader />
      <Suspense>
        <div className="main">123</div>
      </Suspense>
      <AppFooter />
    </div>
  );
};

export default memo(App);
