let carts = document.querySelectorAll('.add-cart');

let products = [{
        name: "Oil filter",
        tag: "oilfilter",
        price: 20,
        inCart: 0
    },
    {
        name: "Drive shaft",
        tag: "driveshaft",
        price: 800,
        inCart: 0
    },
    {
        name: "Motor oil",
        tag: "motoroil",
        price: 150,
        inCart: 0
    },
    {
        name: "Aluminum boat",
        tag: "aluminumboat",
        price: 1200,
        inCart: 0
    },
    {
        name: "Product five",
        tag: "productfive",
        price: 6000,
        inCart: 0
    },
    {
        name: "Product six",
        tag: "productsix",
        price: 300,
        inCart: 0
    },
    {
        name: "Product seven",
        tag: "productseven",
        price: 3500,
        inCart: 0
    },
    {
        name: "Product eight",
        tag: "producteight",
        price: 3500,
        inCart: 0
    },
    {
        name: "Propeller",
        tag: "propeller",
        price: 3125,
        inCart: 0
    },
    {
        name: "Gel battery",
        tag: "gelbattery",
        price: 9000,
        inCart: 0
    },
    {
        name: "Fuel hose",
        tag: "fuelhose",
        price: 250,
        inCart: 0
    },
    {
        name: "Boat motor",
        tag: "boatmotor",
        price: 6000,
        inCart: 0
    },
    {
        name: "Product nine",
        tag: "productnine",
        price: 4500,
        inCart: 0
    },
    {
        name: "Product ten",
        tag: "productten",
        price: 800,
        inCart: 0
    },
    {
        name: "Product eleven",
        tag: "producteleven",
        price: 4999,
        inCart: 0
    },
    {
        name: "Product twelve",
        tag: "producttwelve",
        price: 900,
        inCart: 0
    }
];

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    });
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    if (productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

function cartNumbers(product, action) {
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);

    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if (action) {
        localStorage.setItem("cartNumbers", productNumbers - 1);
        document.querySelector('.cart span').textContent = productNumbers - 1;
        console.log("action running");
    } else if (productNumbers) {
        localStorage.setItem("cartNumbers", productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem("cartNumbers", 1);
        document.querySelector('.cart span').textContent = 1;
    }
    setItems(product);
}

function setItems(product) {
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if (cartItems != null) {
        let currentProduct = product.tag;

        if (cartItems[currentProduct] == undefined) {
            cartItems = {
                ...cartItems,
                [currentProduct]: product
            }
        }
        cartItems[currentProduct].inCart += 1;

    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        };
    }

    localStorage.setItem('productsInCart', JSON.stringify(cartItems));
}

function totalCost(product, action) {
    let cart = localStorage.getItem("totalCost");

    if (action) {
        cart = parseInt(cart);

        localStorage.setItem("totalCost", cart - product.price);
    } else if (cart != null) {

        cart = parseInt(cart);
        localStorage.setItem("totalCost", cart + product.price);

    } else {
        localStorage.setItem("totalCost", product.price);
    }
}

function displayCart() {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    let cart = localStorage.getItem("totalCost");
    cart = parseInt(cart);

    let productContainer = document.querySelector('.products');

    if (cartItems && productContainer) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map((item, index) => {
            productContainer.innerHTML +=
                `
            <div class="product__cart">
                <i class="fas fa-times"></i>
                <img src="./img/${item.tag}.jpg" />
                <span class="sm-hide price__value">${item.name}</span>
            </div>
            <div class="price sm-hide price__value">${item.price},00 $</div>
            <div class="quantity">
                <i class="far fa-minus-square decrease"></i>
                    <span class="num">${item.inCart}</span>
                <i class="fas fa-plus-square increase"></i>
            </div>
            <div class="amount price__value">${item.inCart * item.price},00 $</div>
            `;

        });
        productContainer.innerHTML += `
            <div class="basketAmountContainer">
                <h4 class="basketTotalTitle">Basket Total</h4>
                <h4 class="basketTotal">${cart},00 $</h4>
            </div>`



        deleteButtons();
        manageQuantity();
    }
}

function manageQuantity() {
    let decreaseButtons = document.querySelectorAll('.decrease');
    let increaseButtons = document.querySelectorAll('.increase');
    let currentQuantity = 0;
    let currentProduct = '';
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    for (let i = 0; i < increaseButtons.length; i++) {
        decreaseButtons[i].addEventListener('click', () => {
            console.log(cartItems);
            currentQuantity = decreaseButtons[i].parentElement.querySelector('span').textContent;
            console.log(currentQuantity);
            currentProduct = decreaseButtons[i].parentElement.previousElementSibling.previousElementSibling.querySelector('span').textContent.toLocaleLowerCase().replace(/ /g, '').trim();
            console.log(currentProduct);

            if (cartItems[currentProduct].inCart > 1) {
                cartItems[currentProduct].inCart -= 1;
                cartNumbers(cartItems[currentProduct], "decrease");
                totalCost(cartItems[currentProduct], "decrease");
                localStorage.setItem('productsInCart', JSON.stringify(cartItems));
                displayCart();
            }
        });

        increaseButtons[i].addEventListener('click', () => {
            console.log(cartItems);
            currentQuantity = increaseButtons[i].parentElement.querySelector('span').textContent;
            console.log(currentQuantity);
            currentProduct = increaseButtons[i].parentElement.previousElementSibling.previousElementSibling.querySelector('span').textContent.toLocaleLowerCase().replace(/ /g, '').trim();
            console.log(currentProduct);

            cartItems[currentProduct].inCart += 1;
            cartNumbers(cartItems[currentProduct]);
            totalCost(cartItems[currentProduct]);
            localStorage.setItem('productsInCart', JSON.stringify(cartItems));
            displayCart();
        });
    }
}

function deleteButtons() {
    let deleteButtons = document.querySelectorAll('.product__cart i');
    let productNumbers = localStorage.getItem('cartNumbers');
    let cartCost = localStorage.getItem("totalCost");
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    let productName;
    console.log(cartItems);

    for (let i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener('click', () => {
            productName = deleteButtons[i].parentElement.textContent.toLocaleLowerCase().replace(/ /g, '').trim();

            localStorage.setItem('cartNumbers', productNumbers - cartItems[productName].inCart);
            localStorage.setItem('totalCost', cartCost - (cartItems[productName].price * cartItems[productName].inCart));

            delete cartItems[productName];
            localStorage.setItem('productsInCart', JSON.stringify(cartItems));

            displayCart();
            onLoadCartNumbers();
        })
    }
}

onLoadCartNumbers();
displayCart();