/** @format */

import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import "./css/index.less";

/** @format */
interface IProps {
  children?: ReactNode;
}

const AppFooter: FC<IProps> = () => {
  return (
    <div className="app_footer warp-v1">
      <div className="container">
        <div className="top">
          <h1 className="title">W.P.Jam</h1>
          <ul className="about">
            <li>My</li>
            <li>About</li>
            <li>Blob</li>
          </ul>
        </div>
        <div className="link">
          <a href="https://github.com/DPP-ELFIN" target="_blank"></a>
        </div>
        <div className="record">
          <a href="https://beian.miit.gov.cn">©本网站已备案：粤ICP备2023050388号-1</a>
        </div>
      </div>
    </div>
  );
};

export default memo(AppFooter);
