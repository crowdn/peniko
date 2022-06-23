export default class Rect {
  x: number;
  y: number;
  width: number;
  height: number;
  constructor(x: number, y: number, width: number, height: number) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
  get args() {
    return [this.x, this.y, this.width, this.height];
  }
  get left() {
    return this.x;
  }
  get top() {
    return this.y;
  }
  get right() {
    return this.x + this.width;
  }
  get bottom() {
    return this.y + this.height;
  }

  serialize() {
    const { x, y, width, height } = this;
    return { x, y, width, height };
  }
  static create(data: { x: number; y: number; width: number; height: number }) {
    const { x, y, width, height } = data;
    return new Rect(x, y, width, height);
  }
}
