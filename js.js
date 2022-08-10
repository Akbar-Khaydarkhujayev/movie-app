const a = [-1, 2, -3, 4, -5, 6, -7, 0, -8];
const b = function (arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (Math.sign(arr[i]) !== 1 && arr[i] !== 0) {
      ++result;
    }
  }
  return result;
};

console.log(b(a));
