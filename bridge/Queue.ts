import { Implementation } from "./Implementation";

export abstract class Queue {
  constructor(
    public list: Implementation
  ) {}
  
  abstract dequeue(): Object
  abstract enqueue(object: Object): void

  isEmpty(): boolean {
    return this.list.isEmpty()
  }

  size(): number {
    return this.list.size()
  }

  getItem(index: number): Object {
    return this.list.getItem(index)
  }
}
