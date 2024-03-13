const products = [
  {
    image: "images/slider-img-1.jpg",
    name: "Blue Mat",
    colors: ["lightblue", "blue", "navy"],
    price: 25,
  },
  {
    image: "images/slider-img-2.jpg",
    name: "Green Pants",
    colors: ["lightgreen", "green", "darkgreen"],
    price: 15,
  },
  {
    image: "images/slider-img-1.jpg",
    name: "Pink Headband",
    colors: ["lightpink", "pink", "hotpink"],
    price: 14,
  },
  {
    image: "images/slider-img-2.jpg",
    name: "Orange Bottle",
    colors: ["orange", "darkorange"],
    price: 22,
  },
  {
    image: "images/slider-img-1.jpg",
    name: "Purple Block",
    colors: ["purple", "darkpurple"],
    price: 7,
  },
  {
    image: "images/slider-img-2.jpg",
    name: "Red Strap",
    colors: ["lightcoral", "red", "darkred"],
    price: 30,
  },
  {
    image: "images/slider-img-1.jpg",
    name: "Yellow Towel",
    colors: ["yellow", "gold"],
    price: 18,
  },
  {
    image: "images/slider-img-2.jpg",
    name: "Turquoise Blanket",
    colors: ["turquoise", "teal"],
    price: 35,
  },
  {
    image: "images/slider-img-1.jpg",
    name: "Gray Socks",
    colors: ["lightgray", "gray", "darkgray"],
    price: 28,
  },
  {
    image: "images/slider-img-2.jpg",
    name: "Black Bag",
    colors: ["black"],
    price: 40,
  },
];

let selectedColorIndex = 0;

products.forEach((product) => (product.selectedColorIndex = 0));

function renderProducts(productsToRender) {
  const productContainer = document.getElementById("productContainer");
  productContainer.innerHTML = "";

  productsToRender.forEach((product, index) => {
    productContainer.innerHTML += `
   <div class="product_card">
      <img src="${product.image}" alt="${
      product.name
    }" onclick="redirectToShop(${index})"/>
        <div style="display: flex; justify-content:space-between;align-items: center;">
          <p>${product.name}</p>
          <div class="clickable-color">
            ${product.colors
              .map(
                (color, colorIndex) => `
                  <span 
                    style="
                      background-color: ${color};
                      border: ${
                        colorIndex === product.selectedColorIndex
                          ? "1px solid black"
                          : "1px solid transparent"
                      };
                    "
                    class="${
                      colorIndex === product.selectedColorIndex
                        ? "selected"
                        : ""
                    }"
                    onclick="selectColor(${colorIndex}, ${index})"
                  ></span>
                `
              )
              .join("")}
          </div>
        </div>
        <p class="product_price">$${product.price}</p>
      </div>
    `;
  });
}
function redirectToShop(productIndex) {
  const selectedProductName = products[productIndex].name;
  window.location.href = `product.html?product=${encodeURIComponent(
    selectedProductName
  )}`;
}

function selectColor(index, productIndex) {
  products[productIndex].selectedColorIndex = index;
  renderProducts(products);
}
function scrollProducts(direction) {
  const productContainer = document.getElementById("productContainer");
  const scrollAmount = 240;

  if (direction === "left") {
    productContainer.scrollLeft -= scrollAmount;
  } else {
    productContainer.scrollLeft += scrollAmount;
  }
}

function sortProducts(sortBy) {
  let sortedProducts = [];

  if (sortBy === "price") {
    sortedProducts = [...products].sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-high") {
    sortedProducts = [...products].sort((a, b) => b.price - a.price);
  } else if (sortBy === "name") {
    sortedProducts = [...products].sort((a, b) => a.name.localeCompare(b.name));
  }

  renderProducts(sortedProducts);
}

document.addEventListener("DOMContentLoaded", function () {
  renderProducts(products);
});
