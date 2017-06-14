import renderScreen from './render-screen';
import introNode from './intro';
import {initStatisticStore} from './data/statistic';

renderScreen(introNode());
initStatisticStore();
