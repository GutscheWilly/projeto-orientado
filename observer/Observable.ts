import { Observer } from "./Observer";

export class Observable {
  private observers: Observer[] = []

  constructor() {}

  add(observer: Observer) {
    this.observers.push(observer)
  }

  remove(observer: Observer) {
    this.observers = this.observers.filter(o => o !== observer)
  }

  notify() {
    this.observers.forEach(o => o.update(this))
  }
}
