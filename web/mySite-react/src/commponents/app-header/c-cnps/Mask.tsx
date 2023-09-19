/** @format */

import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import "../css/mask.less";

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
          <h1 style={{ color: "red" }}>My</h1>
          <h1>About</h1>
          <h1>Blob</h1>
        </div>
      </div>
    </div>
  );
};

export default memo(Mask);
