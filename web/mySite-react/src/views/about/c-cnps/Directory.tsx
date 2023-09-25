/** @format */

import React, { memo } from "react";
import type { FC, ReactNode } from "react";

/** @format */
interface IProps {
  children?: ReactNode;
}

const Directory: FC<IProps> = () => {
  return (
    <div className="directory">
      <ul className="directory_list">
        <li>node</li>
        <li>ts</li>
        <li>ts</li>
        <li>ts</li>
      </ul>
    </div>
  );
};

export default memo(Directory);
