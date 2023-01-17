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
import { createElement } from './modules/createElement';

const init = async () => {

  try {
    router.on('*', () => {
      renderHeader();
      renderFooter();
    });

    DATA.navigation = await getData(`${API_URL}/api/categories`);
    DATA.colors = await getData(`${API_URL}/api/colors`);
    createCssColors(DATA.colors);

    router.on('/', () => {
      mainPage();
    });

    router.on('women', () => {
      mainWomanPage();
    });

    router.on('men', () => {
      mainManPage();
    });

    router.on('search', (data) => {
      console.log(data.params.value);
      
    });

    router.on('/:gender/:category', (routerData) => {
      const { gender, category} = routerData.data;
      const params = { gender, category};
      
    });

    /*setTimeout( () => {
      router.navigate('men');
    }, 3000);

    setTimeout( () => {
      router.navigate('women');
    }, 6000);*/

  } catch(e) {
      createElement('h2',
        {
          textContent: 'Что-то пошло не так, попробуйте позже...'
        },
        {
          parent: document.querySelector('main'),
          cb(h2) {
            h2.style.textAlign = 'center';
          }
        }
      );
  } finally {
      router.resolve();
  }

  
};

init();




