/** @format */

import React, { memo } from "react";
import type { FC, ReactNode } from "react";

/** @format */
interface IProps {
  children?: ReactNode;
}

const Tools: FC<IProps> = () => {
  return <div>Tools</div>;
};

export default memo(Tools);
