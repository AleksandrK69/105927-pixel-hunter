import HeaderView from './header-view';

export default ({timer, lives}) => {
  const header = new HeaderView();
  header.timer = timer;
  header.lives = lives;

  return header.template;
};
