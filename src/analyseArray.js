export function analyseArray(arr) {
  const average = arr.reduce((acc, current) => acc + current) / arr.length;
  const minimum = Math.min(...arr);
  const maximum = Math.max(...arr);
  const length = arr.length;
  return {
    average: average,
    min: minimum,
    max: maximum,
    length: length,
  };
}
