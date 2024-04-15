import { Implementation } from "./Implementation";
import { Queue } from "./Queue";

export class FifoQueue extends Queue {
  constructor(
    public list: Implementation
  ) {
    super(list)
  }

  dequeue(): Object {
    const last = this.list.size() - 1
    return this.list.remove(last)
  }

  enqueue(object: Object): void {
    this.list.add(object, 0)
  }
}
