function calculator() {
  const add = (...args) => {
    return args.reduce((prev, curr) => {
      return prev + curr;
    }, 0);
    return a + b;
  };

  const substract = (a, b) => {
    return a - b;
  };

  const mul = (a, b) => {
    return a * b;
  };
  const devide = (a, b) => {
    return a / b;
  };

  return { add, substract, mul, devide };
}

export default calculator;
