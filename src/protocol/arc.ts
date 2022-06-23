import { Point } from '.';

export default class Arc {
  centre: Point;
  startPonint: Point;
  endPoint: Point;
  radius: number;
  startAngle: number;
  endAngle: number;
  anticlockwise?: boolean;

  constructor(
    x: number,
    y: number,
    radius: number,
    startAngle: number,
    endAngle: number,
    anticlockwise?: boolean
  ) {
    this.centre = new Point(x, y);
    this.radius = radius;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
    this.anticlockwise = anticlockwise;

    const x1 = x + radius * Math.cos(startAngle);
    const y1 = y + radius * Math.sin(startAngle);
    const x2 = x + radius * Math.cos(endAngle);
    const y2 = y + radius * Math.sin(endAngle);
    this.startPonint = new Point(x1, y1);
    this.endPoint = new Point(x2, y2);
  }
  get args() {
    return [
      ...this.centre.args,
      this.radius,
      this.startAngle,
      this.endAngle,
      this.anticlockwise,
    ];
  }
  serialize() {
    const { centre, radius, startAngle, endAngle, anticlockwise } = this;
    return {
      ...centre.serialize(),
      radius,
      startAngle,
      endAngle,
      anticlockwise,
    };
  }
  static create(data: {
    x: number;
    y: number;
    radius: number;
    startAngle: number;
    endAngle: number;
    anticlockwise?: boolean;
  }) {
    const { x, y, radius, startAngle, endAngle, anticlockwise } = data;
    return new Arc(x, y, radius, startAngle, endAngle, anticlockwise);
  }
}
