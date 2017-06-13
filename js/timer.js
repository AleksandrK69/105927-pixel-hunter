export const timer = () => {
  const interval = 1000;
  let timerId = null;
  let value = 0;

  return {
    start: (timerValue) => {
      value = timerValue;
      timerId = setInterval(() => {
        value = value - 1;

        const event = value > 0 ?
            new CustomEvent(`timerUpdate`, {detail: {timer: value}}) :
            new CustomEvent(`timerStop`);

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
