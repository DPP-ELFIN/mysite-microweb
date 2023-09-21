/** @format */

import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import "../css/mask.less";
import { Link } from "react-router-dom";

/** @format */
interface IProps {
  children?: ReactNode;
  isOpen?: boolean;
}

const Mask: FC<IProps> = (props) => {
  return (
    <div className={"mask animate__animated animate__bounceInDown"} style={{ display: props.isOpen ? "block" : "none" }}>
      <div className="mask_list">
        <div className="mask_main">
          <Link to="/my">
            <h1 style={{ color: "red" }}>My</h1>
          </Link>
          <Link to="/about">
            <h1>About</h1>
          </Link>
          <Link to="/work">
            <h1>work</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default memo(Mask);
