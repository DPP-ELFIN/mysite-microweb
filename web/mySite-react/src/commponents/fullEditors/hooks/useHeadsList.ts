/** @format */

// 优先级列表
export enum EPriority {
  "H1",
  "H2",
  "H3",
  "H4",
  "H5",
  "H6",
}

export type THeading = "H1" | "H2" | "H3" | "H4" | "H5" | "H6";

// export type string = string | number | symbol;

export interface IQueue {
  pop: () => HTMLHeadingElement;
  push: (item: HTMLHeadingElement) => void;
  has: (item: string) => boolean;
  empty: () => void;
  first: () => HTMLHeadingElement;
  toArray: () => Array<HTMLHeadingElement>;
}
export class Queue implements IQueue {
  private items: HTMLHeadingElement[] = [];
  public length: number = 0;
  constructor() {}
  has(item: string) {
    return Boolean(this.items.find((val) => val.nodeName === item));
  }
  pop(): HTMLHeadingElement {
    if (!this.items.length) throw new Error("不允许出队，队列为空");
    this.length--;
    return this.items.shift()!;
  }
  push(item: HTMLHeadingElement) {
    this.items.push(item);
    this.length++;
  }
  empty() {
    this.items = [];
    this.length = 0;
  }
  first() {
    return this.items[0] as HTMLHeadingElement;
  }
  toArray() {
    return this.items;
  }
}

export default (headsList: NodeListOf<HTMLHeadingElement>) => {
  if (!headsList.length) return [];
  const queue = new Queue();
  let firstFloor: Array<Array<HTMLHeadingElement>> = [];
  headsList.forEach((heads: HTMLHeadingElement, index: number) => {
    // 先入队第一个
    if (index === 0) return queue.push(heads);
    // 对比队列第一个标题的优先级
    if (EPriority[<THeading>queue.first().nodeName] < EPriority[<THeading>heads.nodeName]) {
      // 队列第一个标题优先级大于当前标题优先级，则入队
      queue.push(heads);
    } else {
      // 否则将队列推入 firstFloor 并清空队列
      firstFloor.push(queue.toArray());
      queue.empty();
      queue.push(heads);
    }
  });
  firstFloor.push(queue.toArray());
  return firstFloor;
};
