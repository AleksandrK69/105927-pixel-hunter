import createDomElement from './create-dom-element';
import renderScreen from './render-screen';
import footer from './footer';
import greetingNode from './greeting';
import {timer} from './timer';
import {state, setTimer} from './data/state';
import {answers} from './data/answers';
import handleTimer from './timer-handler';

const introNode = () => {
  const node = createDomElement(`
    <div id="main" class="central__content">
      <div id="intro" class="intro">
        <h1 class="intro__asterisk">*</h1>
        <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
      </div>
    </div>
    ${footer}
  `);
  node.querySelector(`.intro__asterisk`).addEventListener(`click`, () => {
    const initState = setTimer(state, timer());
    renderScreen(greetingNode(initState, answers));
  });

  handleTimer();

  return node;
};

export default introNode;
