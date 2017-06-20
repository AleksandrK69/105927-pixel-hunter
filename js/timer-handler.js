const TIMER_CLASS_NAME = `game__timer`;
const TIMER_IS_OVER_VALUE = 5;
const TIMER_IS_OVER_CLASS_NAME = `game__timer-over`;

const timerListener = ({detail: {timer}}) => {
  const timerNode = document.querySelector(`.${TIMER_CLASS_NAME}`);
  if (timerNode) {
    timerNode.innerHTML = timer;
  }

  if (timer <= TIMER_IS_OVER_VALUE && !timerNode.classList.contains(TIMER_IS_OVER_CLASS_NAME)) {
    timerNode.classList.add(TIMER_IS_OVER_CLASS_NAME);
  }
};

export default () => {
  document.removeEventListener(`timerUpdate`, timerListener);
  document.addEventListener(`timerUpdate`, timerListener);
};
