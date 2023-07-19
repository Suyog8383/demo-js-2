const input = [2, 7, 2, 1, 1, 5, 1, 2, 2, -5, 2];
function findValue(input) {
  let count = 0;
  let arr = [];
  for (let i = 0; i < input.length; i++) {
    if (
      input[i] === input[i + 2] &&
      input[i] !== input[i + 1] &&
      input[i + 2] !== input[i + 1]
    ) {
      count++;
      arr.push([input[i], input[i + 1], input[i + 2]]);
    }
  }
  return [arr, count];
}
console.log(findValue(input));
