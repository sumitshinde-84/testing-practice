function analyzeArray(arr) {
  let average = 0;
  let min = 0;
  let max = 0;
  let length = 0;
  let sortedArr = arr.sort();
  average = arr.reduce((prev, curr) => {
    return prev + curr;
  }, 0);
  length = arr.length;
  average /= length;
  min = sortedArr[0];

  max = sortedArr[length - 1];

  return {
    average: average,
    min: min,
    max: max,
    length: length,
  };
}

console.log(analyzeArray([1, 2, 3]));

export default analyzeArray;
