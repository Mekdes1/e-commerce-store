const availableProducts = allProducts();
const gridContainer = document.getElementById("grid-container");
const yourSearch = document.getElementById("search-button");
const searchProductInput = document.getElementById("search-item");
const productName = [];
const renderSearchedProduct = () => {
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
               
                  <form class="search-form">
                    <button type="submit" id="search-button"><i class="fa fa-search"></i></button>
                    <input type="text" placeholder="Search.." name="search" id="search-item">
                   </form>
         </header>
        </div>

          <div id="grid-container">
          </div>
          
          <footer>
           <p class="footer-par">© 2020 e-commerce store</p>
         </footer>

      </body> `;

  availableProducts.forEach(product => {
    const productDescription = product.description.toLocaleLowerCase();
    // Render the searched product in the search input
    if (productDescription.includes(searchProductInput.value.toLowerCase())) {
      const gridContainer = document.getElementById("grid-container");
      const gridItem = document.createElement("div");
      gridItem.setAttribute("class", "grid-item");
      const image = document.createElement("div");
      image.innerHTML = `<img onClick ="productFunc(${product.id})" src=${product.img} alt="image" style="width:100%"> `;
      const description = document.createElement("div");
      description.innerHTML = ` <p> ${product.description} </P> <p> ${product.price} DKK</p> <button onClick="cartsFunc(${product.id})"> Add to cart </button>`;

      gridItem.appendChild(image);
      gridContainer.appendChild(gridItem);

      gridItem.appendChild(description);

      productName.push(product.description);
    }
  });
};

yourSearch.addEventListener("click", renderSearchedProduct);

// Render all products in home page

availableProducts.forEach(item => {
  const gridItem = document.createElement("ul");
  gridItem.setAttribute("class", "grid-item");

  const image = document.createElement("li");
  image.setAttribute("id", "image");

  image.innerHTML = `<img  onClick ="productFunc(${item.id})" src=${item.img} alt="image" style="width:100%" id ="img-element"> `;

  const description = document.createElement("li");
  description.innerHTML = ` <p id="des"> ${item.description} </P> <p> ${item.price} DKK</p> <button onClick="cartsFunc(${item.id})"> Add to cart </button>`;

  gridItem.appendChild(image);
  gridContainer.appendChild(gridItem);
  gridItem.appendChild(description);
});
