/** @format */

import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import { Card } from "antd";

/** @format */
interface IProps {
  children?: ReactNode;
}

const Menu: FC<IProps> = () => {
  return (
    <div className="blog_menu warp-v1">
      <div className="blog_container">
        <div className="card">
          <h1>Blog</h1>
          <h2>write by Jam</h2>
          <span>Some technical blogs and life logs about Web.</span>
        </div>
        <div className="card">
          <Card hoverable={true} cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
            <span className="span-1">在空闲时间，我喜欢编码、羽毛球、游戏和结识新朋友。</span>
            <span className="span-2">想一起做点什么吗？或者说是有什么关于技术上的疑问？只要给我发电子邮件。扫描二维码在微信上添加我。知无不言！</span>
          </Card>
        </div>
        <div className="card">
          <Card hoverable={true} cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
            <span className="span-1">在空闲时间，我喜欢编码、羽毛球、游戏和结识新朋友。</span>
            <span className="span-2">想一起做点什么吗？或者说是有什么关于技术上的疑问？只要给我发电子邮件。扫描二维码在微信上添加我。知无不言！</span>
          </Card>
        </div>
        <div className="card">
          <Card hoverable={true} cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
            <span className="span-1">在空闲时间，我喜欢编码、羽毛球、游戏和结识新朋友。</span>
            <span className="span-2">想一起做点什么吗？或者说是有什么关于技术上的疑问？只要给我发电子邮件。扫描二维码在微信上添加我。知无不言！</span>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default memo(Menu);
