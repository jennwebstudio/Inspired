import { renderNavigation } from '../render/renderNavigation';
import { renderHero } from '../render/renderHero';
import { renderProducts } from '../render/renderProducts';

export const mainPage = (gender = 'woman') => {
  console.log('gender: ', gender);
  
  renderNavigation(gender);
  renderHero(gender);
  renderProducts(gender);
};