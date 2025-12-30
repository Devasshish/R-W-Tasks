// all variabless
let products = JSON.parse(localStorage.getItem("products")) || [];
let editingId = null;
const titleInput = document.querySelector(
  '.left input[placeholder="Product Title"]'
);
const priceInput = document.querySelector('.left input[placeholder="Price"]');
const categoryInput = document.querySelector(
  '.left input[placeholder="Category"]'
);
const imageInput = document.querySelector(
  '.left input[placeholder="Image URL"]'
);
const addBtn = document.querySelector(".left .btn");
const searchInput = document.querySelector(".right input");
const sortSelect = document.getElementById("price");
const filterSelect = document.getElementById("category");
const productList = document.querySelector(".product-list");

// save ro local storage function
function saveToLocalStorage() {
  localStorage.setItem("products", JSON.stringify(products));
}

// add product to the product list
function addProductToList(list = products) {
  productList.innerHTML = "";
  list.forEach((product) => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${product.image}">
      <h2>${product.title}</h2>
      <h3>${product.category}</h3>
      <div class="price">&#8377 ${product.price}</div>
      <div class="btns">
        <button class="edit-btn blue" onclick="editProduct(${product.id})">Edit</button>
        <button class="delete-btn red" onclick="deleteProduct(${product.id})">Delete</button>
      </div>
    `;
    productList.appendChild(div);
  });
}

// add product function
function addProduct() {
  const title = titleInput.value.trim();
  const price = priceInput.value.trim();
  const category = categoryInput.value.trim();
  const image = imageInput.value.trim();
  if (!title || !price) {
    alert("Product title and price are required!");
    return;
  }
  if (editingId) {
    // updating
    products = products.map((p) =>
      p.id === editingId ? { ...p, title, price, category, image } : p
    );
    editingId = null;
    addBtn.innerText = "+ Add Product";
  } else {
    // creating new product
    const product = {
      id: Date.now(),
      title,
      price,
      category,
      image,
    };
    products.push(product);
  }
  // base functions
  saveToLocalStorage();
  addProductToList();
  clearInputs();
}

// clear the inputs
function clearInputs() {
  titleInput.value = "";
  priceInput.value = "";
  categoryInput.value = "";
  imageInput.value = "";
}

// edit existing product
function editProduct(id) {
  const product = products.find((p) => p.id === id);
  titleInput.value = product.title;
  priceInput.value = product.price;
  categoryInput.value = product.category;
  imageInput.value = product.image;
  editingId = id;
  addBtn.innerText = "Update Product";
}

// deleting product
function deleteProduct(id) {
  products = products.filter((p) => p.id !== id);
  saveToLocalStorage();
  addProductToList();
}

// search product 
searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();
  const filtered = products.filter((p) =>
    p.title.toLowerCase().includes(value)
  );
  addProductToList(filtered);
});

// sorting 
sortSelect.addEventListener("change", () => {
  let sorted = [...products];
  if (sortSelect.value === "lowToHigh") {
    sorted.sort((a, b) => a.price - b.price);
  } else {
    sorted.sort((a, b) => b.price - a.price);
  }
  addProductToList(sorted);
});

// filtering 
filterSelect.addEventListener("change", () => {
  if (filterSelect.value === "all") {
    addProductToList();
    return;
  }
  const filtered = products.filter(
    (p) => p.category.toLowerCase() === filterSelect.value.toLowerCase()
  );
  addProductToList(filtered);
});
addBtn.addEventListener("click", addProduct);

// initial load 
addProductToList();
