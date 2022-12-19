(async function() {
    const response = await fetch('api/adv.json')
    const products = await response.json();

    function renderCards(products) {
        const tabsContainer = document.querySelector('.cards');
        tabsContainer.innerHTML = '';
        for (const product of products) {
            tabsContainer.innerHTML += `
        <div class="card">
                   <img class="card__img" src="${product.image}" alt="${products.title}">
                    <h2 class="cards__title">${product.title}</h2>
                    <h3 class="cards__subtitle">${product.tabs__subtitle}</h3>
                    <form action="#reguest__section">
                   <button   class="cards__button">${product.btn}</button>
                  </form>
                   
         </div>`;

        }
    }
    renderCards(products);
})();