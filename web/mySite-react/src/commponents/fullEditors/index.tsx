/** @format */

/** @format */

import React, { memo, useEffect, useLayoutEffect, useState } from "react";
import type { FC, ReactNode } from "react";
import "./css/index.less";
import type { CollapseProps, TreeProps } from "antd";
import { Collapse, Tree } from "antd";
import TurndownService from "turndown";
import { useHeadsList, useParseHeads } from "./hooks/index";
import { DownOutlined } from "@ant-design/icons";
import { DataNode } from "antd/es/tree";

/** @format */
interface IProps {
  children?: ReactNode;
}

// interface window {
//   tinymce: TinyMCE;
// }

const treeData1: DataNode[] = [
  {
    title: "parent 1",
    key: "0-0",
    children: [
      {
        title: "parent 1-0",
        key: "0-0-0",
        children: [
          {
            title: "leaf",
            key: "0-0-0-0",
          },
          {
            title: "leaf",
            key: "0-0-0-1",
          },
          {
            title: "leaf",
            key: "0-0-0-2",
          },
        ],
      },
      {
        title: "parent 1-1",
        key: "0-0-1",
        children: [
          {
            title: "leaf",
            key: "0-0-1-0",
          },
        ],
      },
      {
        title: "parent 1-2",
        key: "0-0-2",
        children: [
          {
            title: "leaf",
            key: "0-0-2-0",
          },
          {
            title: "leaf",
            key: "0-0-2-1",
          },
        ],
      },
    ],
  },
];

const tinymce = (window as any).tinymce;
let editor: any = null;
const turndownService = new TurndownService();
const parser = new DOMParser();

const FullEditor: FC<IProps> = () => {
  const [treeData, setTreeData] = useState<DataNode[]>();
  useEffect(() => {
    tinymce.init({
      selector: "#mytextarea",
      // initValue:"<p>hello this is my full</p>",
      // selector: '#mytinymce',
      // inline: true
      language: "zh-Hans",
      plugins: "code lists advlist fullscreen wordcount anchor  emoticons image",
      // // toolbar: "code"
      toolbar: "bullist numlist wordcount anchor emoticons image code fullscreen",
      // plugins: "image code",
      // toolbar: "image code",
      // autoresize_overflow_padding: 20,
      branding: false,
      //         advlist_bullet_styles: 'square',
      // advlist_number_styles: 'lower-alpha,lower-roman,upper-alpha,upper-roman'
      // skin: 'oxide-dark',      //皮肤
      height: "100vh",
      width: "70vw",
    });
    editor = tinymce.get("mytextarea");
    editor.on("input", async function (e: any) {
      // 获取实时输入的内容
      let content = editor.getContent();
      // 在这里处理 content
      const toMd: HTMLDivElement = document.querySelector(".to_md") as HTMLDivElement;

      console.log(turndownService.turndown(content));
      toMd.innerText = turndownService.turndown(content);
      console.log(content);
      let doc = parser.parseFromString(content, "text/html");

      let heads: NodeListOf<HTMLHeadingElement> = doc.querySelectorAll("h1,h2,h3,h4,h5,h6");
      const headsList = useHeadsList(heads);
      const headTreeData = await useParseHeads(headsList);
      setTreeData(headTreeData);
    });
  }, []);

  const onSelect: TreeProps["onSelect"] = (selectedKeys, info) => {
    console.log("selected", selectedKeys, info);
  };

  return (
    <div className="fullEditor">
      <textarea name="" id="mytextarea"></textarea>
      <div className="right">
        <Tree showLine switcherIcon={<DownOutlined />} onSelect={onSelect} treeData={treeData} />
        <div className="to_md"></div>
      </div>
    </div>
  );
};

export default memo(FullEditor);
