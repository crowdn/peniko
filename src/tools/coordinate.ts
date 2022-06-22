import { Point, Rect } from '../protocol';
function convertRelativeCoordinate(point: Point, rect: Rect) {
  return new Point(point.x - rect.x, point.y - rect.y);
}
function revertRelativeCoordinate(point: Point, rect: Rect) {
  return new Point(point.x + rect.x, point.y + rect.y);
}

function isPointInRect(point: Point, rect: Rect) {
  if (!point || !rect) return false;
  return (
    point.x > rect.left &&
    point.y > rect.top &&
    point.x < rect.right &&
    point.y < rect.bottom
  );
}
export { convertRelativeCoordinate, revertRelativeCoordinate, isPointInRect };
