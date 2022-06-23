interface PaintStyle {
  // CanvasCompositing
  globalAlpha?: number;
  globalCompositeOperation?: string;
  // CanvasFillStrokeStyles
  fillStyle?: string | CanvasGradient | CanvasPattern;
  strokeStyle?: string | CanvasGradient | CanvasPattern;
  filter?: string;

  // CanvasImageSmoothing
  imageSmoothingEnabled?: boolean;
  imageSmoothingQuality?: ImageSmoothingQuality;

  // CanvasPathDrawingStyles
  lineCap?: CanvasLineCap;
  lineDashOffset?: number;
  lineJoin?: CanvasLineJoin;
  lineWidth?: number;
  miterLimit?: number;

  // CanvasShadowStyles
  shadowBlur?: number;
  shadowColor?: string;
  shadowOffsetX?: number;
  shadowOffsetY?: number;

  // CanvasTextDrawingStyles
  direction?: CanvasDirection;
  font?: string;
  textAlign?: CanvasTextAlign;
  textBaseline?: CanvasTextBaseline;
}
export default PaintStyle;
