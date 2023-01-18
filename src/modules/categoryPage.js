import { DATA } from "./const";
import { renderNavigation } from "./render/renderNavigation";
import { renderHero } from "./render/renderHero";
import { renderProducts } from "./render/renderProducts";

export const categoryPage = (routerData) => {

  const { gender, category} = routerData.data;
  const params = { gender, category};

  if (routerData.params?.page) {
    params.page = routerData.params.page;
  }

  const title = DATA.navigation[gender].list.find(item => item.slug === category).title;

  renderNavigation(gender, category);
  renderHero(false);
  renderProducts(title, params);
};