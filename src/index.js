import './index.html';
import './index.scss';
import { router } from './modules/router';
import { mainPage } from './modules/mainPage/mainPage';
import { mainManPage } from './modules/mainPage/mainManPage';
import { mainWomanPage } from './modules/mainPage/mainWomanPage';
import { renderHeader } from './modules/render/renderHeader';
import { renderFooter } from './modules/render/renderFooter';
import { getData } from './modules/getData';
import { API_URL, DATA } from './modules/const';
import { createCssColors } from './modules/createCssColors';

const init = async () => {
  DATA.navigation = await getData(`${API_URL}/api/categories`);
  DATA.colors = await getData(`${API_URL}/api/colors`);
  createCssColors(DATA.colors);

  router.on('*', () => {
    renderHeader();
    renderFooter();
  });

  router.on('/', () => {
    mainPage();
  });

  router.on('women', () => {
    mainWomanPage();
  });

  router.on('men', () => {
    mainManPage();
  });

  /*setTimeout( () => {
    router.navigate('men');
  }, 3000);

  setTimeout( () => {
    router.navigate('women');
  }, 6000);*/

  router.resolve();
};

init();




