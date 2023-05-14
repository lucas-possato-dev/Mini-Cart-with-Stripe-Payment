//Coffee: price_1N7g4YItc9zmTQNEEugT37jh

//Cheese: price_1N7g66Itc9zmTQNEoj80kf6j

//Sandwich: price_1N7g7XItc9zmTQNE5xE4jV87

//Bread: price_1N7g6pItc9zmTQNEmbdSzaMO

//Donuts: price_1N7g7BItc9zmTQNEAMIi6zsj

//Bagel: price_1N7g9CItc9zmTQNElZjCMEkB

const productsArray = [
  {
    id: "price_1N7g66Itc9zmTQNEoj80kf6j",
    title: "Cheese",
    price: 15.99,
    img: "/assets/1.jpg",
  },
  {
    id: "price_1N7g6pItc9zmTQNEmbdSzaMO",
    title: "Bread",
    price: 4.99,
    img: "/assets/2.jpg",
  },
  {
    id: "price_1N7g7BItc9zmTQNEAMIi6zsj",
    title: "Donuts",
    price: 3.99,
    img: "/assets/3.jpg",
  },
  {
    id: "price_1N7g7XItc9zmTQNE5xE4jV87",
    title: "Sandwich",
    price: 6.99,
    img: "/assets/4.jpg",
  },
  {
    id: "price_1N7g9CItc9zmTQNElZjCMEkB",
    title: "Bagel",
    price: 3.99,
    img: "/assets/5.jpg",
  },
  {
    id: "price_1N7g4YItc9zmTQNEEugT37jh",
    title: "Coffee",
    price: 2.99,
    img: "/assets/6.jpg",
  },
];

function getProductData(id) {
  let productData = productsArray.find((product) => product.id === id);

  if (productData === undefined) {
    console.log("Product data does not exist for ID" + id);
    return undefined;
  }

  return productData;
}

export { productsArray, getProductData };
