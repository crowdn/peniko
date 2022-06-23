export default class Point {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  get args() {
    return [this.x, this.y];
  }
  serialize() {
    const { x, y } = this;
    return { x, y };
  }
  static create({ x, y }: { x: number; y: number }) {
    return new Point(x, y);
  }
}
