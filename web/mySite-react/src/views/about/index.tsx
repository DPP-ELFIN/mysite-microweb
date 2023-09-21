/** @format */

import React, { memo } from "react";
import type { FC, ReactNode } from "react";

/** @format */
interface IProps {
  children?: ReactNode;
}

const About: FC<IProps> = () => {
  return <div>About</div>;
};

export default memo(About);
