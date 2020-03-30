const yourCart = [];
const cartsFunc = id => {
  const availableProducts = allProducts();
  availableProducts.forEach(item => {
    if (id === parseInt(item.id)) {
      yourCart.push(item);
    }
  });
}; // add products to cart

const removeProduct = id => {
  yourCart.forEach(item => {
    if (parseInt(item.id) === id) {
      console.log(item);

      yourCart.splice(yourCart.indexOf(item), 1);
    }
  });
}; // remove products from cart

const inCart = () => {
  const productsPrice = yourCart.map(product => parseInt(product.price));
  let totalPrice = 0;
  if (productsPrice.length === 0) {
    console.log("no product");
  } else {
    totalPrice = productsPrice.reduce((total, num) => total + num);
  } // total price calulator

  document.body.innerHTML = ` 
<body>
<div class="container">
     <header>
         <div class="wrapper">
               <ul class="nav-bar">
                 <li><a href="shopping.html">Home</a></li>
                 <li><a href="clothes.html">Clothes</a></li>
                 <li><a href="shoe.html">Shoe</a></li>
                 
               </ul>

               <h1>your shopping Cart</h1>
              <div class="icon-search">
              <ul class="icon">
              <li onClick="inCart()">  <i class="fa fa-shopping-basket fa-2x" aria-hidden="true"></i> </li>
                <!-- <li><a href="default.asp">  <i class="fa fa-heart-o fa-2x" aria-hidden="true"></i></i> </a></li>
                 <li><a href="default.asp">  <i class="fa fa-user-o fa-2x"></i> </a></li> -->
              </ul>

         </div>
         </header>
 
          <div id="grid-container">
            
         </div>

         <div class="cart">
           <p>Total price: ${totalPrice} DKK </p>
          </div>
            

         <footer>
        <p class="footer-par">© 2020 e-commerce store</p>
        </footer>
       </body>  `;

  const gridContainer = document.getElementById("grid-container");

  if (yourCart.length === 0) {
    alert("your Cart is empty");
  } else
    yourCart.forEach(item => {
      const gridItem = document.createElement("ul");
      gridItem.setAttribute("class", "grid-item");

      const image = document.createElement("li");
      image.setAttribute("id", "image");

      image.innerHTML = `<img  onClick ="productFunc(${item.id})" src=${item.img} alt="image" style="width:100%" id ="img-element"> `;

      const description = document.createElement("li");

      description.innerHTML = ` <p> ${item.description} </P> <p> ${item.price} DKK</p> <button onClick="removeProduct(${item.id})"> Delete </button>`;

      gridItem.appendChild(image);

      gridContainer.appendChild(gridItem);

      gridItem.appendChild(description);
    });
};
