export const wait = (ms: number = 1) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(true), ms)
  });
}