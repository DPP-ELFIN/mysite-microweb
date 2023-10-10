/** @format */

import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import { Card } from "antd";
import wx from "@/assets/img/7ceaeecfd7db8ea3510fd98d84a20c0.jpg";

import "./css/index.less";
import Meta from "antd/es/card/Meta";

/** @format */
interface IProps {
  children?: ReactNode;
}

const Work: FC<IProps> = () => {
  return (
    <div className="warp-v1">
      <div className="main_contianer">
        <div className="card animate__animated animate__fadeInLeft">
          <h1>Hi!</h1>
          <h2>My name is W.P.Jam</h2>
          <span>I’m a web Developer with an enduring interest in Coding and Write Blog</span>
        </div>
        <div className="card animate__animated animate__fadeInRight">
          <Card hoverable={true}>
            <span className="span-1">在空闲时间，我喜欢编码、羽毛球、游戏和结识新朋友。</span>
            <span className="span-2">想一起做点什么吗？或者说是有什么关于技术上的疑问？只要给我发电子邮件。扫描二维码在微信上添加我。知无不言！</span>
          </Card>
        </div>
        <div className="card animate__animated animate__fadeInLeft">
          <Card hoverable cover={<img alt="WX" src={wx} />}>
            <Meta title="My Email" description="1519037604@qq.com" />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default memo(Work);
