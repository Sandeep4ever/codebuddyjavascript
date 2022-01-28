//Level 2

function sumFibbo(n) {
  let fib = [];
  if (n <= 0) {
    return 0;
  } else if (n == 1) {
    return 1;
  }
  fib[0] = 0;
  fib[1] = 1;
  let sum = fib[0] + fib[1];
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
    sum += fib[i];
  }
  console.log(sum);
}
let n = 6;
sumFibbo(n);
