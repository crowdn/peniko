/**
 * 降低精度，解决浮点数计算后，最后一位出现的误差
 * @param num
 */ function toPrecised(num: number): number {
  return Number(num.toFixed(10));
}
/**
 * 正态分布函数
 * @param x f(x)-x轴
 * @param mean 平均数
 * @param stdev 标准差
 */
function normalDistributionfun(x: number, mean: number, stdev: number) {
  return (
    (1 / (Math.sqrt(2 * Math.PI) * stdev)) *
    Math.exp((-1 * ((x - mean) * (x - mean))) / (2 * stdev * stdev))
  );
}
export { toPrecised, normalDistributionfun };
