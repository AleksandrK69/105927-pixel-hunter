export const timer = () => {
  const interval = 1000;
  let timerId = null;
  let value = 0;

  return {
    start: () => {
      timerId = setInterval(() => {
        value = value + 1;
        const event = new CustomEvent(`timerUpdate`, {detail: {timer: value}});
        document.dispatchEvent(event);
      }, interval);
    },

    stop: () => {
      clearInterval(timerId);
    },

    clear: () => {
      value = 0;
      clearInterval(timerId);
    },

    getTimer: () => {
      return value;
    }
  };
};
