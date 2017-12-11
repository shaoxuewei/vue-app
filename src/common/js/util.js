// 节流函数
export function debounce(func, delay) {
  let timer;
  return function (...args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      // args分别包含新值和旧值
      // 直接调用func,传args
      func.apply(this, args);
    }, delay);
  };
};
