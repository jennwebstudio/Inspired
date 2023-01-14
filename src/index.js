import './index.html';
import './index.scss';
import { router } from './modules/router';
import { mainPage } from './modules/mainPage/mainPage';
import { mainManPage } from './modules/mainPage/mainManPage';
import { mainWomanPage } from './modules/mainPage/mainWomanPage';
import { renderHeader } from './modules/render/renderHeader';
import { renderFooter } from './modules/render/renderFooter';


router.on('*', () => {
  renderHeader();
  renderFooter();
});

router.on('/', () => {
  mainPage();
});

router.on('woman', () => {
  mainWomanPage();
});

router.on('man', () => {
  mainManPage();
});

/*setTimeout( () => {
  router.navigate('man');
}, 3000);

setTimeout( () => {
  router.navigate('woman');
}, 6000);*/

router.resolve();


