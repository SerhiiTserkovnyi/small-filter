let searchItem = document.querySelector("#search-item");
let catalog = [{
        name: "American pizza",
        price: 2,
        icon: "images/amer.jpg"
    },
    {
        name: "Cheese pizza",
        price: 2,
        icon: "images/cheese.jpg"
    },
    {
        name: "Dom pizza",
        price: 2,
        icon: "images/dom.jpg"
    },
    {
        name: "Firm pizza",
        price: 2,
        icon: "images/firm.jpg"
    },
    {
        name: "Gav pizza",
        price: 2,
        icon: "images/gav.jpg"
    },
    {
        name: "Grusha pizza",
        price: 2,
        icon: "images/gr.jpg"
    },
    {
        name: "Ital pizza",
        price: 2,
        icon: "images/ital.jpg"
    },
    {
        name: "Meat pizza",
        price: 2,
        icon: "images/meat.jpg"
    },
    {
        name: "Sitsilia pizza",
        price: 2,
        icon: "images/syc.jpg"
    },
    {
        name: "Tropic pizza",
        price: 2,
        icon: "images/trop.jpg"
    }
];

function buildCatalog() {
    const productList = document.getElementById("product-list");
    catalog.forEach((item) => {
        const itemElem = createItemElem(item);
        productList.appendChild(itemElem);
    });
}

searchItem.addEventListener("keyup", (event) => {
    // Remove all displayed items in list
    clearProducts();

    const letter = event.target.value;
    const items = catalog.filter(({ name }) => name.includes(letter));
    if (items.length) {
        const productList = document.getElementById("product-list");
        items.forEach((item) => {
            const itemElem = createItemElem(item);
            productList.appendChild(itemElem);
        });
    }
});

const clearProducts = () => {
    const productList = document.getElementById("product-list");
    while (productList.firstChild) {
        productList.removeChild(productList.firstChild);
    }
};

const createItemElem = (item) => {
    const divElem = document.createElement("div");
    divElem.className = "product";

    const imgElem = document.createElement("img");
    imgElem.setAttribute("src", item.icon);
    imgElem.setAttribute("alt", "Item icon");
    imgElem.setAttribute("srcset", "");

    const detailsElem = document.createElement("div");
    detailsElem.className = "p-details";

    const itemNameElem = document.createElement("h2");
    itemNameElem.textContent = item.name;

    const itemPriceElem = document.createElement("h3");
    itemPriceElem.textContent = item.price;

    detailsElem.appendChild(itemNameElem);
    detailsElem.appendChild(itemPriceElem);

    divElem.appendChild(imgElem);
    divElem.appendChild(detailsElem);
    return divElem;
};

buildCatalog();