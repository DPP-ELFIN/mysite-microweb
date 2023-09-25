/** @format */

import { memo, Suspense } from "react";
import type { FC, ReactNode } from "react";
import AppHeader from "./commponents/app-header";
import AppFooter from "./commponents/app-footer";
import "@/assets/css/app.less";
import { useRoutes } from "react-router-dom";
import routes from "./router";
import { FloatButton } from "antd";
import { CommentOutlined, ToolOutlined } from "@ant-design/icons";

/** @format */
interface IProps {
  children?: ReactNode;
}

const App: FC<IProps> = () => {
  return (
    <div className="app">
      <AppHeader />
      <Suspense fallback="loading...">
        <div className="main">{useRoutes(routes)}</div>
        <FloatButton.Group trigger="hover" type="primary" style={{ right: 94 }} icon={<ToolOutlined />}>
          <FloatButton />
          {/* <FloatButton icon={<CommentOutlined />} /> */}
        </FloatButton.Group>
      </Suspense>
      <AppFooter />
    </div>
  );
};

export default memo(App);
