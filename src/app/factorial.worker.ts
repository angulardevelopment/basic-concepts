/// <reference lib="webworker" />

addEventListener('message', ({ data }) => {
  const response = factorialCalculator(data);
  postMessage(response);
});


export function factorialCalculator(num: number): number {
  if (num < 0) {
    return -1;
  } else if (num == 0) {
    return 1;
  } else {
    return (num * factorialCalculator(num - 1));
  }
}
