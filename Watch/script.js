// Start of script

const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");
// Products as JSON 
const products = [
  {
    id: 1,
    title: "Have your Time",
    price: 2845,
    colors: [
      {
        code: "black",
        img: "./img/luxury.png",
      },
      {
        code: "darkblue",
        img: "./img/Rolex-Watch-PNG-Free-Image.png",
      },
    ],
  },
  {
    id: 2,
    title: "Time is all yours",
    price: 8541,
    colors: [
      {
        code: "lightgray",
        img: "./img/chro.png",
      },
      {
        code: "green",
        img: "./img/chro.png",
      },
    ],
  },
  {
    id: 3,
    title: "How is your Time",
    price: 9455,
    colors: [
      {
        code: "lightgray",
        img: "./img/rtrt.png",
      },
      {
        code: "green",
        img: "./img/rtrt.png",
      },
    ],
  },
  {
    id: 4,
    title: "Welcome ur lucky time",
    price:5415,
    colors: [
      {
        code: "black",
        img: "./img/hands.png",
      },
      {
        code: "lightgray",
        img: "./img/hands.png",
      },
    ],
  },
  {
    id: 5,
    title: "I got my Time",
    price: 2415,
    colors: [
      {
        code: "gray",
        img: "./img/chro.png",
      },
      {
        code: "black",
        img: "./img/chro.png",
      },
    ],
  },
];
// For Selected product
let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "Rs. " + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});

//End of Script
