class LinePath extends Path2D {
  svgPath: string = '';
  constructor(path?: string | LinePath) {
    super(path);
    if (typeof path == 'string') {
      this.svgPath = path;
    } else if (path instanceof LinePath) {
      this.svgPath = path.svgPath;
    }
  }

  private _appendToPath(path: string) {
    this.svgPath = this.svgPath.concat(path);
  }

  moveTo(x: number, y: number) {
    this._appendToPath(` M ${x} ${y}`);
    return super.moveTo(x, y);
  }

  lineTo(x: number, y: number) {
    if (x == 0) {
      this._appendToPath(` V ${y}`);
    } else if (y == 0) {
      this._appendToPath(` H ${x}`);
    } else {
      this._appendToPath(` L ${x} ${y}`);
    }
    return super.lineTo(x, y);
  }

  bezierCurveTo(
    cp1x: number,
    cp1y: number,
    cp2x: number,
    cp2y: number,
    x: number,
    y: number
  ) {
    //Todo: 若两个控制点按实际数据点连线的中垂线对称，可简写为 [S cp2x cp2y x y]
    this._appendToPath(` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${x} ${y}`);
    super.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
  }

  quadraticCurveTo(cpx: number, cpy: number, x: number, y: number) {
    this._appendToPath(` Q ${cpx} ${cpy}, ${x} ${y}`);
    super.quadraticCurveTo(cpx, cpy, x, y);
  }

  closePath() {
    this._appendToPath(` Z`);
    return super.closePath();
  }
}
export default LinePath;
