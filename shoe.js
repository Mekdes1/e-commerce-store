const availableProducts = allProducts();
const gridContainer = document.getElementById("grid-container");

availableProducts.forEach(item => {
  if (item.name === "shoe") {
    const gridItem = document.createElement("div");
    gridItem.setAttribute("class", "grid-item");

    const image = document.createElement("div");

    image.innerHTML = `<img onClick ="productFunc(${item.id})" src=${item.img} alt="image" style="width:100%"> `;

    const description = document.createElement("div");
    description.innerHTML = ` <p> ${item.description} </P> <p> ${item.price} DKK</p> <button onClick="cartsFunc(${item.id})"> Add to cart </button>`;

    gridItem.appendChild(image);

    gridContainer.appendChild(gridItem);

    gridItem.appendChild(description);
  }
});
