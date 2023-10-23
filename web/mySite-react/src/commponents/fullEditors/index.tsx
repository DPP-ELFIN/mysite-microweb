/** @format */

/** @format */

import React, { memo, useEffect, useLayoutEffect, useState } from "react";
import type { FC, ReactNode } from "react";
import "./css/index.less";
import { Menu, MenuProps, TreeProps } from "antd";
import { Tree } from "antd";
import TurndownService from "turndown";
import { useHeadsList, useParseHeads } from "./hooks/index";
import { DownOutlined, MailOutlined } from "@ant-design/icons";
import { DataNode } from "antd/es/tree";

/** @format */
interface IProps {
  children?: ReactNode;
}

const items: MenuProps["items"] = [
  {
    label: "MD",
    key: "MD",
    icon: <MailOutlined />,
  },
  {
    label: "HTML",
    key: "HTML",
    icon: <MailOutlined />,
  },
];

const tinymce = window.tinymce;
let editor: any = null;
const turndownService = new TurndownService();
const parser = new DOMParser();
let toMd: HTMLDivElement;
let toHtml: HTMLDivElement;

const FullEditor: FC<IProps> = () => {
  const [treeData, setTreeData] = useState<DataNode[]>();
  const [current, setCurrent] = useState("MD");
  const [toMdContent, setToMdContent] = useState(""); // 新增状态来存储 Markdown 内容
  const [toHtmlContent, setToHtmlContent] = useState("");

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
      // const toMd: HTMLDivElement = document.querySelector(".to_md") as HTMLDivElement;

      // console.log(turndownService.turndown(content));
      // toMd.innerText = turndownService.turndown(content);
      // console.log(content);
      let doc = parser.parseFromString(content, "text/html");

      let heads: NodeListOf<HTMLHeadingElement> = doc.querySelectorAll("h1,h2,h3,h4,h5,h6");
      const headsList = useHeadsList(heads);
      const headTreeData = await useParseHeads(headsList);
      setTreeData(headTreeData);

      // 更新 Markdown 内容
      setToMdContent(turndownService.turndown(content));
    });
  }, []);

  const onSelect: TreeProps["onSelect"] = (selectedKeys, info) => {
    console.log("selected", selectedKeys, info);
  };
  const onClick: MenuProps["onClick"] = (e) => {
    let content = editor.getContent();
    if (e.key === "MD") {
      // 设置 Markdown 内容
      setToMdContent(turndownService.turndown(content));
      setCurrent(e.key);
    } else if (e.key === "HTML") {
      // 设置 HTML 内容
      setToHtmlContent(content);
      setCurrent(e.key);
    }
  };

  return (
    <div className="fullEditor">
      <textarea name="" id="mytextarea"></textarea>
      <div className="right">
        <Tree showLine switcherIcon={<DownOutlined />} onSelect={onSelect} treeData={treeData} />
        <div className="right_bottom">
          <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
          {/* {onMdOrHtml(current)} */}
          {current === "MD" ? <div className="to_md">{toMdContent}</div> : <div className="to_html">{toHtmlContent}</div>}
        </div>
      </div>
    </div>
  );
};

export default memo(FullEditor);
