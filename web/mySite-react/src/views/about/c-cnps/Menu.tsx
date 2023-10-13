/** @format */

import React, { memo, useEffect, useLayoutEffect, useState } from "react";
import type { FC, ReactNode } from "react";
import { Card } from "antd";

/** @format */
interface IProps {
  children?: ReactNode;
}

interface IWaterItem {
  height?: number;
  background?: string;
  left?: number;
  top?: number;
}

const list: IWaterItem[] = [
  {
    height: 200,
    background: "red",
  },
  {
    height: 100,
    background: "red",
  },
  {
    height: 300,
    background: "red",
  },
  {
    height: 500,
    background: "red",
  },
  {
    height: 400,
    background: "red",
  },
  {
    height: 800,
    background: "red",
  },
  {
    height: 200,
    background: "red",
  },
  {
    height: 200,
    background: "red",
  },
  {
    height: 100,
    background: "red",
  },
  {
    height: 300,
    background: "red",
  },
  {
    height: 400,
    background: "red",
  },
  {
    height: 600,
    background: "red",
  },
  {
    height: 200,
    background: "red",
  },
  {
    height: 100,
    background: "red",
  },
  {
    height: 300,
    background: "red",
  },
  {
    height: 500,
    background: "red",
  },
  {
    height: 400,
    background: "red",
  },
  {
    height: 800,
    background: "red",
  },
  {
    height: 200,
    background: "red",
  },
  {
    height: 200,
    background: "red",
  },
  {
    height: 100,
    background: "red",
  },
  {
    height: 300,
    background: "red",
  },
  {
    height: 400,
    background: "red",
  },
  {
    height: 600,
    background: "red",
  },
];

const Menu: FC<IProps> = () => {
  const [waterList, setWaterList] = useState<IWaterItem[]>([]);
  const heightList: any[] = [];
  const init = () => {
    const width = document.querySelector(".blog_container")!.clientWidth / 2;
    const x = document.querySelector(".blog_container")!.clientWidth;
    const column = Math.floor(x / width);
    const copy = [...waterList];
    for (let i = 0; i < list.length; i++) {
      if (i < column) {
        list[i].left = i * width;
        list[i].top = 0;
        copy.push(list[i]);
        setWaterList([...copy]);
        // waterList.push(list[i]);
        heightList.push(list[i].height);
      } else {
        let current = heightList[0];
        let index = 0;
        heightList.forEach((h, i) => {
          if (current > h) {
            current = h;
            index = i;
          }
        });
        list[i].left = index * width;
        list[i].top = current + 20;
        heightList[index] = heightList[index] + list[i].height + 20;
        copy.push(list[i]);
        setWaterList([...copy]);
      }
    }
  };

  const setWarp = async () => {
    const warp: HTMLElement = document.querySelector(".blog_container .warp") as HTMLElement;
    // const nodesList: NodeListOf<HTMLElement> = (await warp.childNodes) as NodeListOf<HTMLElement>;
    // let height = 0;
    // nodesList.forEach((el: HTMLElement, index: number) => {
    //   // console.log(el.clientHeight);
    //   // console.log(heightList);
    // });
    warp.style.height = heightList[0] + "px";
    warp.style.padding = "0 0  20px 0";
  };

  useLayoutEffect(() => {
    init();
    setWarp();
  }, []);

  const renderWaterList = () => {
    return waterList.map((el: IWaterItem, index: number) => {
      return <div className="item" key={index} style={{ height: el.height, background: el.background, top: el.top, left: el.left }}></div>;
    });
  };
  return (
    <div className="blog_menu warp-v1">
      <div className="blog_container">
        {/* <div className="card">
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
        </div> */}
        <div className="warp">
          {/* <div className="item"></div> */}
          {renderWaterList()}
        </div>
      </div>
    </div>
  );
};

export default memo(Menu);
