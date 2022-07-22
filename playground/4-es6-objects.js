//Object property shorthand

const name = "Anukul";
const userAge = 26;

const user = {
  name,
  age: userAge,
  location: "Bangalore",
};

console.log(user);

//Object destructuring

const product = {
  label: "Red Notebook",
  price: 3,
  stock: 201,
  salePrice: undefined,
  rating: 4.2,
};

// const label = product.label;
// const stock = product.stock;

// const { label: productLabel, stock, rating = 5 } = product;
// console.log(productLabel);
// console.log(stock);
// console.log(rating);

const transaction = (type, { label = "No Label", stock = 0 } = {}) => {
  console.log(type, label, stock);
};

transaction("order", product);
transaction("order");
