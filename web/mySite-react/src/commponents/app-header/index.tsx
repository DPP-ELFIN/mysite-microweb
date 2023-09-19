/** @format */

import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import "./css/index.less";
import { MenuOutlined } from "@ant-design/icons";
import { useState } from "react";
import Mask from "./c-cnps/Mask";
/** @format */
interface IProps {
  children?: ReactNode;
}

const AppHeader: FC<IProps> = () => {
  const [isOpen, setOpen] = useState(false);
  const openMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <div className="app_header">
      <div className="warp-v1">
        <div className="container">
          <div className="left">
            <a href="/">
              <h1>.MySite</h1>
            </a>
          </div>
          <div className="right">
            <MenuOutlined className="menu" onClick={openMenu} />
          </div>
        </div>
      </div>
      {/* <div className="mask" style={{ display: isOpen ? "block" : "none" }}>
        123
      </div> */}
      <Mask isOpen={isOpen}></Mask>
    </div>
  );
};

export default memo(AppHeader);
