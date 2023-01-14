export const renderProducts = () => {
  const products = document.querySelector('.goods');

  products.innerHTML = `
    <div class="container">
      <h2 class="goods__title">новинки</h2>

      <ul class="goods__list">
        <li class="goods__item">
          <article class="product">
            <a class="product__link" href="#">
              <img class="product__image" src="img/product01.jpg" alt="Бюстгальтер-Балконет Wien из Микрофибры">
              <h3 class="product__title">Бюстгальтер-Балконет Wien из Микрофибры</h3>
            </a>

            <div class="product__row">
              <p class="product__price">руб 2999</p>
              <button class="product__btn-favorite" aria-label="Добавить в избранное"></button>
            </div>

            <ul class="product__color-list">
              <li class="product__color-item">
                <div class="color color_white color-check"></div>
              </li>
              <li class="product__color-item">
                <div class="color color_red"></div>
              </li>
              <li class="product__color-item">
                <div class="color color_black"></div>
              </li>
            </ul>
          </article>
        </li>
        <li class="goods__item">
          <article class="product">
            <a class="product__link" href="#">
              <img class="product__image" src="img/product01.jpg" alt="Бюстгальтер-Балконет Wien из Микрофибры">
              <h3 class="product__title">Бюстгальтер-Балконет Wien из Микрофибры</h3>
            </a>
        
            <div class="product__row">
              <p class="product__price">руб 2999</p>
              <button class="product__btn-favorite product__btn-favorite_active" aria-label="Добавить в избранное"></button>
            </div>
        
            <ul class="product__color-list">
              <li class="product__color-item">
                <div class="color color_white color-check"></div>
              </li> 
              <li class="product__color-item">
                <div class="color color_red"></div>
              </li>
              <li class="product__color-item">
                <div class="color color_black"></div>
              </li>
            </ul>
          </article>
        </li>
        <li class="goods__item">
          <article class="product">
            <a class="product__link" href="#">
              <img class="product__image" src="img/product01.jpg" alt="Бюстгальтер-Балконет Wien из Микрофибры">
              <h3 class="product__title">Бюстгальтер-Балконет Wien из Микрофибры</h3>
            </a>
        
            <div class="product__row">
              <p class="product__price">руб 2999</p>
              <button class="product__btn-favorite" aria-label="Добавить в избранное"></button>
            </div>
        
            <ul class="product__color-list">
              <li class="product__color-item">
                <div class="color color_white color-check"></div>
              </li>
              <li class="product__color-item">
                <div class="color color_red"></div>
              </li>
              <li class="product__color-item">
                <div class="color color_black"></div>
              </li>
            </ul>
          </article>
        </li>
        <li class="goods__item">
          <article class="product">
            <a class="product__link" href="#">
              <img class="product__image" src="img/product02.jpg" alt="Бюстгальтер-Балконет Wien из Микрофибры">
              <h3 class="product__title">Бюстгальтер-Балконет Wien из Микрофибры</h3>
            </a>
        
            <div class="product__row">
              <p class="product__price">руб 2999</p>
              <button class="product__btn-favorite" aria-label="Добавить в избранное"></button>
            </div>
        
            <ul class="product__color-list">
              <li class="product__color-item">
                <div class="color color_white color-check"></div>
              </li>
              <li class="product__color-item">
                <div class="color color_red"></div>
              </li>
              <li class="product__color-item">
                <div class="color color_black"></div>
              </li>
            </ul>
          </article>
        </li>
        <li class="goods__item">
          <article class="product">
            <a class="product__link" href="#">
              <img class="product__image" src="img/product02.jpg" alt="Бюстгальтер-Балконет Wien из Микрофибры">
              <h3 class="product__title">Бюстгальтер-Балконет Wien из Микрофибры</h3>
            </a>
        
            <div class="product__row">
              <p class="product__price">руб 2999</p>
              <button class="product__btn-favorite" aria-label="Добавить в избранное"></button>
            </div>
        
            <ul class="product__color-list">
              <li class="product__color-item">
                <div class="color color_white color-check"></div>
              </li>
              <li class="product__color-item">
                <div class="color color_red"></div>
              </li>
              <li class="product__color-item">
                <div class="color color_black"></div>
              </li>
            </ul>
          </article>
        </li>
        <li class="goods__item">
          <article class="product">
            <a class="product__link" href="#">
              <img class="product__image" src="img/product02.jpg" alt="Бюстгальтер-Балконет Wien из Микрофибры">
              <h3 class="product__title">Бюстгальтер-Балконет Wien из Микрофибры</h3>
            </a>
        
            <div class="product__row">
              <p class="product__price">руб 2999</p>
              <button class="product__btn-favorite" aria-label="Добавить в избранное"></button>
            </div>
        
            <ul class="product__color-list">
              <li class="product__color-item">
                <div class="color color_white color-check"></div>
              </li>
              <li class="product__color-item">
                <div class="color color_red"></div>
              </li>
              <li class="product__color-item">
                <div class="color color_black"></div>
              </li>
            </ul>
          </article>
        </li>
      </ul>
      </div>
  `;
};