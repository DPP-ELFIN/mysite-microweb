/** @format */

import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import Directory from "./c-cnps/Directory";
import Menu from "./c-cnps/Menu";
import "./css/index.less";

/** @format */
interface IProps {
  children?: ReactNode;
}

const About: FC<IProps> = () => {
  return (
    <div className="blog">
      <Directory />
      <Menu />
    </div>
  );
};

export default memo(About);
