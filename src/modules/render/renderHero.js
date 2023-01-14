import { createElement } from "../createElement";

export const renderHero = (gender) => {
  const hero = document.querySelector('.hero');

  if (!gender) {
    hero.style.display = 'none';
    return;
  }

  hero.style.display = '';
  hero.className = `hero hero__${gender}`;

  hero.textContent = '';

  const container = createElement('div', 
    {
      className: "container"
    },
    {
      parent: hero
    }
  );

  createElement('div',
    {
      className: 'hero__content',
      innerHTML: `<h2 class="hero__title">Новая коллекция Бюстгальтер-балконет</h2>`
    },
    {
      parent: container,
      append: createElement('a',
        {
          className: "hero__link",
          textContent: 'Перейти',
          href: '#/'
        }
      )
    }
  );


  /*hero.innerHTML = `
    <div class="container">
      <div class="hero__content">
        

        <a class="hero__link" href="#">Перейти</a>
      </div>
    </div>
  `;*/
};