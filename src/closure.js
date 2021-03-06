/* eslint-disable */

const counter = () => {
  let count = 0;
  return () => {
    count++;
    return count;
  };
};

const counterFactory = () => {
  let count = 0;
  return {
    increment: () => ++count,
    decrement: () => --count,
  };
};

const limitFunctionCallCount = (cb, n) => {
  let count = 0;
  return (...memo) => {
    if (count === n) {
      return null;
    }
    count++;
    return cb(...memo);
  };
};

/* STRETCH PROBLEM */

const cacheFunction = (cb) => {
  const cache = {};
  return (arg) => {
    if (arg in cache) {
      return cache[arg];
    }
    cache[arg] = cb;
    return cb(arg);
  };
};

/* eslint-enable no-unused-vars */

module.exports = {
  counter,
  counterFactory,
  cacheFunction,
  limitFunctionCallCount,
};
