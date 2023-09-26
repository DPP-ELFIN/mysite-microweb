/** @format */

import React, { memo } from "react";
import type { FC, ReactNode } from "react";

/** @format */
interface IProps {
  children?: ReactNode;
}

const FullEditors: FC<IProps> = () => {
  return <div>FullEditors</div>;
};

export default memo(FullEditors);
