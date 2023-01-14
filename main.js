const storieItems = document.querySelector('.product-list');
let searchItem = document.querySelector('#search-item');

let catalog = [{
        name: 'American pizza',
        price: 2,
        icon: 'images/amer.jpg'
    },
    {
        name: 'Cheese pizza',
        price: 2,
        icon: 'images/cheese.jpg'
    },
    {
        name: 'Dom pizza',
        price: 2,
        icon: 'images/dom.jpg'
    },
    {
        name: 'Firm pizza',
        price: 2,
        icon: 'images/firm.jpg'
    },
    {
        name: 'Gav pizza',
        price: 2,
        icon: 'images/gav.jpg'
    },
    {
        name: 'Grusha pizza',
        price: 2,
        icon: 'images/gr.jpg'
    },
    {
        name: 'Ital pizza',
        price: 2,
        icon: 'images/ital.jpg'
    },
    {
        name: 'Meat pizza',
        price: 2,
        icon: 'images/meat.jpg'
    },
    {
        name: 'Sitsilia pizza',
        price: 2,
        icon: 'images/syc.jpg'
    },
    {
        name: 'Tropic pizza',
        price: 2,
        icon: 'images/trop.jpg'
    }
];

function bildCatalog() {
    let newList = '';
    catalog.forEach(({ name, price, icon }) => {
        newList += `<div class="product">
        <img src=${icon} alt="" srcset="">
        <div class="p-details">
            <h2>${name}</h2>
            <h3>$${price}</h3>
        </div>
    </div>`;
    });
    return newList;
}



searchItem.addEventListener('keyup', () => {
    const searchBox = searchItem.value;
    let result = catalog.filter((item) => {
        return item.name.toUpperCase().indexOf(searchBox.toUpperCase()) > -1;
    });
    let newArr = '';
    result.forEach(({ name, price, icon }) => {
        newArr += `<div class="product">
        <img src=${icon} alt="" srcset="">
        <div class="p-details">
            <h2>${name}</h2>
            <h3>$${price}</h3>
        </div>
    </div>`;
    });
    storieItems.innerHTML = newArr;
});




storieItems.innerHTML = bildCatalog();