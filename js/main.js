import renderScreen from './render-screen';
import showIntro from './intro/intro';
import {initStatisticStore} from './data/statistic';

renderScreen(showIntro());
initStatisticStore();
