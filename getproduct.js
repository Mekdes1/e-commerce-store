const productFunc = id => {
  const availableProducts = allProducts();

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

               <h1>your Product</h1>
               <div class="icon-search">
                <ul class="icon">
                 <li onClick="inCart()">  <i class="fa fa-shopping-basket fa-2x" aria-hidden="true"></i> </li>
                </ul>
           </div>
       </header>

         <div id="details-container">
         </div>
         
         <footer>
          <p class="footer-par">© 2020 e-commerce store</p>
       </footer>
       
       </body>  `;

  availableProducts.forEach(item => {
    const productIs = parseInt(item.id);

    if (productIs === id) {
      const productContainer = document.getElementById("details-container");

      productContainer.innerHTML = `

<div class="description-img">  

<img src=${item.img} alt="product-img" id="picture">
 <div class="description-text">
  <h1 class="text-des">${item.description}</h1>
  <p class="text-des">Type :  ${item.type}</p>
  <p class="text-des">Rating : ${item.rating}</p>
  <p class="text-des">Price :  ${item.price} DKK </p>
  <button onClick="cartsFunc(${item.id})">  Add to cart <button>
 </div>

 </div>

`;
    }
  });
};
