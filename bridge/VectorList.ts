import { Implementation } from "./Implementation";

export class VectorList implements Implementation {
  private list: Array<any> = []

  constructor() {}

  add(object: Object, index: number) {
    this.list.splice(index, 0, object)
  }

  remove(index: number): Object {
    const item = this.getItem(index)
    this.list = this.list.filter(i => i !== item)
    return item
  }

  isEmpty(): boolean {
    return this.list.length === 0
  }

  size(): number {
    return this.list.length
  }

  getItem(index: number): Object {
    return this.list[index]
  }
}