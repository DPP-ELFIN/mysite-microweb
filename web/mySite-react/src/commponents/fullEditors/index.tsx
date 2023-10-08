/** @format */

// /** @format */

// import React, { memo } from "react";
// import type { FC, ReactNode } from "react";
// // import type {TinyMce} from "@/assets/js/tinymce_6.7.0/tinymce/js/tinymce/tinymce"

// /** @format */
// interface IProps {
//   children?: ReactNode;
// }

// export default class FullEditor extends React.Component<IProps> {
//   render(): React.ReactNode {
//     return (
//       <div className="fullEditor">
//         <textarea name="" id="mytextarea"></textarea>
//       </div>
//     );
//   }
//   componentDidMount() {
//     tinymce.init({
//       selector: "#mytextarea",
//       // selector: '#mytinymce',
//       // inline: true
//       language: "zh-Hans",
//       plugins: "code lists advlist fullscreen wordcount anchor autoresize emoticons image",
//       // // toolbar: "code"
//       toolbar: "bullist numlist wordcount anchor emoticons image code fullscreen",
//       // plugins: "image code",
//       // toolbar: "image code",
//       // autoresize_overflow_padding: 20,
//       branding: false,
//       //         advlist_bullet_styles: 'square',
//       // advlist_number_styles: 'lower-alpha,lower-roman,upper-alpha,upper-roman'
//       // skin: 'oxide-dark',      //皮肤
//       // width: 300,
//       // height: 300,
//     });
//   }
// }

/** @format */

import React, { memo, useEffect } from "react";
import type { FC, ReactNode } from "react";
import "./css/index.less";
import type { CollapseProps } from "antd";
import { Collapse } from "antd";

/** @format */
interface IProps {
  children?: ReactNode;
}

// interface window {
//   tinymce: TinyMCE;
// }

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const items: CollapseProps["items"] = [
  {
    key: "1",
    label: "This is panel header 1",
    children: <p>{text}</p>,
  },
  {
    key: "2",
    label: "This is panel header 2",
    children: <p>{text}</p>,
  },
  {
    key: "3",
    label: "This is panel header 3",
    children: <p>{text}</p>,
  },
];

const FullEditor: FC<IProps> = () => {
  useEffect(() => {
    (window as any).tinymce.init({
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
  });

  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return (
    <div className="fullEditor">
      <textarea name="" id="mytextarea"></textarea>
      <div className="right">
        <Collapse items={items} defaultActiveKey={["1"]} onChange={onChange} />
      </div>
    </div>
  );
};

export default memo(FullEditor);
