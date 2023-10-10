/** @format */

import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import { CommentOutlined, QrcodeOutlined, ToolOutlined } from "@ant-design/icons";
import { FloatButton, notification, Tooltip } from "antd";
import { useNavigate } from "react-router-dom";

/** @format */
interface IProps {
  children?: ReactNode;
}

const Tools: FC<IProps> = () => {
  const [api, contextHolder] = notification.useNotification();
  const navigate = useNavigate();
  const goFullEditors = () => {
    navigate("/fullEditors");
  };
  const showQrcode = () => {
    console.log(1);
    // api.open({
    //   message: "Notification Title",
    //   description,

    //   duration: 0,
    // });
  };
  return (
    <div>
      <FloatButton.Group trigger="hover" type="primary" style={{ right: 94 }}>
        <Tooltip placement="left" title={"富文本编辑器"}>
          <FloatButton icon={<ToolOutlined />} onClick={goFullEditors} />
        </Tooltip>
        <Tooltip placement="left" title={"二维码"}>
          <FloatButton icon={<QrcodeOutlined />} onClick={showQrcode} />
        </Tooltip>
        {/* <FloatButton icon={<CommentOutlined />} /> */}
      </FloatButton.Group>
    </div>
  );
};

export default memo(Tools);
