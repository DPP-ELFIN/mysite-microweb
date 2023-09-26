/** @format */

import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import { CommentOutlined, ToolOutlined } from "@ant-design/icons";
import { FloatButton, Tooltip } from "antd";
import { useNavigate } from "react-router-dom";

/** @format */
interface IProps {
  children?: ReactNode;
}

const Tools: FC<IProps> = () => {
  const navigate = useNavigate();
  const goFullEditors = () => {
    navigate("/fullEditors");
  };
  return (
    <div>
      <FloatButton.Group trigger="hover" type="primary" style={{ right: 94 }} icon={<ToolOutlined />}>
        <Tooltip placement="left" title={"富文本编辑器"}>
          <FloatButton onClick={goFullEditors} />
        </Tooltip>
        {/* <FloatButton icon={<CommentOutlined />} /> */}
      </FloatButton.Group>
    </div>
  );
};

export default memo(Tools);
