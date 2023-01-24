import { router } from "../utils/router";
import { renderNavigation } from "../render/renderNavigation";
import { renderHero } from "../render/renderHero"; 
import { renderProducts } from "../render/renderProducts";
import { renderCard } from "../render/renderCard";
import { renderCart } from "../render/renderCart";
import { renderOrder } from "../render/renderOrder";

export const searchController = formSearch => {
  
  formSearch.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = formSearch.querySelector('.search__input'); 
    
    if (input.value) {
      router.navigate(`search?value=${formSearch.search.value}`);
    }
        
  });
};

export const searchPageController = (routerData) => {

  const params = {
    search: routerData.params.value,
    
  };

  if (routerData.params?.page) {
    params.page = routerData.params.page;
  }
  renderNavigation({render: true, repeat: true});
  renderHero({render: false});
  renderCard({render: false});
  renderProducts({title: routerData.params.value, params, render: true});
  renderCart({render: false});
  renderOrder({render: false});
};