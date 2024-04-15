export interface Implementation {
  add(object: Object, index: number): void
  remove(index: number): Object
  isEmpty(): boolean
  size(): number
  getItem(index: number): Object
}
