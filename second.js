const productsList = document.getElementById("products-list");
const totalPriceElement = document.getElementById("total-price");
const chooseFromHere = [
  { title: "პილპილი", price: 0.8 },
  { title: "პილპილი", price: 1 },
  { title: "პილპილი", price: 3 },
  { title: "პილპილი", price: 4 },
  { title: "პილპილი", price: 10 },
];
const products = [];

function CreateProductComponent(product) {
  const listItem = document.createElement("li");
  listItem.classList.add("product");

  const title = document.createElement("p");
  const titleText = document.createTextNode(product.title);
  title.append(titleText);
  title.classList.add("product__title");

  const price = document.createElement("p");
  const priceText = document.createTextNode(product.price);
  price.append(priceText);
  price.classList.add("product__price");

  listItem.append(title, price);

  return listItem;
}

function RenderAndCalculateTotalPrice(products) {
  let totalPrice = 0;

  products.forEach((product) => {
    totalPrice += product.price;
  });

  totalPriceElement.innerHTML = totalPrice;
}

function RenderProducts(products) {
  products.forEach((element) => {
    const product = CreateProductComponent(element);
    productsList.append(product);
  });
}





RenderProducts(products);
RenderAndCalculateTotalPrice(products)