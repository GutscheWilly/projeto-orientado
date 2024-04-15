import { Implementation } from "./Implementation";
import { Queue } from "./Queue";

export class FifoQueue extends Queue {
  constructor(
    public list: Implementation
  ) {
    super(list)
  }

  dequeue(): Object {
    return this.list.remove(0)
  }

  enqueue(object: Object): void {
    const last = this.list.size() - 1
    this.list.add(object, last)
  }
}
