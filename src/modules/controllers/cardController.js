import { API_URL } from "../const";
import { renderNavigation } from "../render/renderNavigation";
import { renderHero } from "../render/renderHero";
import { renderProducts } from "../render/renderProducts";
import { getData } from "../getData";
import { renderCard } from "../render/renderCard";

export const cardController = async (routerData) => {

  const { id } = routerData.data;

  const data = await getData(`${API_URL}/api/goods/${id}`);
  console.log('data: ', data);

  renderNavigation(data.gender, data.category);
  renderHero(false);
  renderCard(data);
  renderProducts('Вам такжe может понравиться', {count: 4, gender: data.gender});
};