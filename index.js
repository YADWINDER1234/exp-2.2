const products = [
  { name: "Laptop", category: "electronics" },
  { name: "Smartphone", category: "electronics" },
  { name: "T-shirt", category: "clothing" },
  { name: "Jeans", category: "clothing" },
  { name: "Novel", category: "books" },
  { name: "Dictionary", category: "books" }
];

const productList = document.getElementById("product-list");
const categorySelect = document.getElementById("category");

function displayProducts(items) {
  productList.innerHTML = "";
  items.forEach(product => {
    const li = document.createElement("li");
    li.textContent = product.name;
    productList.appendChild(li);
  });
}

categorySelect.addEventListener("change", () => {
  const selected = categorySelect.value;
  if (selected === "all") {
    displayProducts(products);
  } else {
    const filtered = products.filter(p => p.category === selected);
    displayProducts(filtered);
  }
});

displayProducts(products);
