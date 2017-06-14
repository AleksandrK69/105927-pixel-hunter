const timerListener = ({detail: {timer}}) => {
  const timerNode = document.querySelector(`.game__timer`);
  if (timerNode) {
    timerNode.innerHTML = timer;
  }
};

export default () => {
  document.removeEventListener(`timerUpdate`, timerListener);
  document.addEventListener(`timerUpdate`, timerListener);
};
