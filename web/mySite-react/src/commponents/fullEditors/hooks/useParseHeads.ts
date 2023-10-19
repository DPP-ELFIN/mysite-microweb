/** @format */

import { DataNode } from "antd/es/tree";
import { EPriority, THeading } from "./useHeadsList";

// export type DataNode = DataNode & {
//   nodeName: string;
// };

// 將HTMLHeadingElement[][]转为DataNodep[][]
function headsList2TreeDatas(headsList: HTMLHeadingElement[][]): DataNode[][] {
  const tds = headsList.map((firstfloors: HTMLHeadingElement[], firstfloorIndex: number): DataNode[] => {
    const firstfloor = firstfloors.map((head: HTMLHeadingElement, index: number): DataNode => {
      return {
        key: `${firstfloorIndex}-${index}-${head.nodeName}`,
        title: head.outerText,
        children: [],
      };
    });
    return firstfloor;
  });
  return tds;
}
// 扁平化treeDatas
function toTreeDataMap(toTreeData: DataNode[][], map: Map<string, DataNode>) {
  toTreeData.forEach((firstFloor: DataNode[], firstIndex: number) => {
    firstFloor.forEach((treedata: DataNode, index: number) => {
      map.set(`${firstIndex}-${index}`, treedata);
    });
  });
}

function generaterFlatChild(pre: DataNode, tail: DataNode) {
  const preNode = (pre.key as string).split("-")[2];
  const tailNode = (tail.key as string).split("-")[2];
  if (EPriority[<THeading>preNode] < EPriority[<THeading>tailNode]) {
    pre.children?.push(tail);
    return false;
  } else {
    return true;
  }
}

function generaterFlatTreeDatas(toTreeDatas: DataNode[][], map: Map<string, DataNode>, treeDatas: DataNode[]) {
  let flag = 1;
  let isTrue = true;
  toTreeDatas.forEach((firstfloor: DataNode[], firstfloorIndex: number) => {
    firstfloor.forEach((treedata: DataNode, index: number) => {
      if (index === 0) {
        treeDatas[firstfloorIndex] = treedata;
      } else {
        isTrue = true;
        flag = 1;
        while (isTrue) {
          const pre: DataNode = map.get(`${firstfloorIndex}-${index - flag}`) as DataNode;
          const tail: DataNode = treedata;
          isTrue = generaterFlatChild(pre, tail);
          flag++;
        }
      }
    });
  });
}

// 构造DataNode数据
function generaterTreeData(headsList: HTMLHeadingElement[][]) {
  let treeDatas: DataNode[] = [];
  return new Promise<DataNode[]>((resolve) => {
    const map = new Map();
    const toTreeDatas = headsList2TreeDatas(headsList);
    toTreeDataMap(toTreeDatas, map);
    generaterFlatTreeDatas(toTreeDatas, map, treeDatas);
    resolve(treeDatas);
  });
}

export default (headsList: HTMLHeadingElement[][] = []) => {
  // 构造DataNode数据
  let treeHeaderList = generaterTreeData(headsList);
  return treeHeaderList;
};
