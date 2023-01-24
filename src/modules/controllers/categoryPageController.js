import { DATA } from "../const";
import { renderNavigation } from "../render/renderNavigation";
import { renderHero } from "../render/renderHero";
import { renderProducts } from "../render/renderProducts";
import { renderCard } from "../render/renderCard";
import { renderCart } from "../render/renderCart";
import { renderOrder } from "../render/renderOrder";

export const categoryPageController = (routerData) => {

  const { gender, category} = routerData.data;

  if (!Object.keys(DATA.navigation).includes(gender)) {
    return;
  }

  const params = { gender, category};

  if (routerData.params?.page) {
    params.page = routerData.params.page;
  }

  const title = DATA.navigation[gender].list.find((item)=> item.slug === category).title;

  renderNavigation({gender, category, render: true});
  renderHero({render: false});
  renderCard({render: false});
  renderProducts({title, params, render: true});
  renderCart({render: false});
  renderOrder({render: false});
};