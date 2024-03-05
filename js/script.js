// Use window.onload to ensure the DOM is fully loaded before executing JavaScript
window.onload = function () {
  // Select the button by its ID
  const loadButton = document.getElementById("loadButton");

  // Add an event listener to the button
  loadButton.addEventListener("click", function () {
    loadProducts();
  });
};

function loadProducts() {
  // Simulate fetching products from the server
  fetch("php/api.php?action=get_products")
    .then((response) => response.json())
    .then((products) => {
      displayProducts(products);
    });
}

function displayProducts(products) {
  const productListDiv = document.getElementById("product-list");
  productListDiv.innerHTML = "";

  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.innerHTML = `<p>${product.name} - $${product.price}</p>`;
    productListDiv.appendChild(productDiv);
  });
}
