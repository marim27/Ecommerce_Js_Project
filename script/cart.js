var cartProducts = [];
var Subtotal = 0;
var cart = JSON.parse(localStorage.getItem("cart"));
var numItem = localStorage.getItem("countLength");

xhr.addEventListener("readystatechange", function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    var products = JSON.parse(xhr.response);
    for (var i = 0; i < cart.length; i++) {
      cartProducts.push(products.find((inf) => inf.id == cart[i]));
    }

    for (var inf of cartProducts) {
      var productsSection = document.getElementById("cart_products");
      productsSection.innerHTML +=
        "<div id='product_card' class=''><div><img onclick='singleProduct(" +
        inf.id +
        ")' class='category_img div_image' src=" +
        inf.image +
        "></div> <div class='category_title' onclick='singleProduct(" +
        inf.id +
        ")'>" +
        inf.title +
        "</div> <div><div class='price'>" +
        inf.price +
        "$</div><div id='delete' onclick='removeItems(" +
        inf.id +
        ")'>delete</div></div></div>";
      Subtotal += inf.price;
      document.getElementById("Subtotal_price").innerHTML =
        "Subtotal (" + numItem + " items ) : " + Subtotal.toFixed(2) + "$";
    }
    
  }
});


function removeItems(id) {
  var index = cartProducts.findIndex(function (inf) {
    return inf.id === id;
  });

  // Remove the ID of the deleted product from the cart array
  var cartIndex = cart.indexOf(id);
  if (cartIndex !== -1) {
    cartProducts.splice(index, 1);
    cart.splice(cartIndex, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("countLength", cart.length);
  }

  Subtotal = 0;
  for (var inf of cartProducts) {
    Subtotal += inf.price;
  }

  document.getElementById("Subtotal_price").innerHTML =
    "Subtotal (" + cartProducts.length + " items ) : " + Subtotal.toFixed(2) + "$";
  var productCard = document.getElementById("product_card_" + id);
  if (productCard) {
    productCard.parentNode.removeChild(productCard);
  }

  // Clear the contents of the cart_products element and rebuild it
  var productsSection = document.getElementById("cart_products");
  productsSection.innerHTML = "";
  for (var inf of cartProducts) {
    productsSection.innerHTML +=
      "<div id='product_card' class=''><div><img onclick='singleProduct(" +
      inf.id +
      ")' class='category_img div_image' src=" +
      inf.image +
      "></div> <div class='category_title' onclick='singleProduct(" +
      inf.id +
      ")'>" +
      inf.title +
      "</div> <div><div class='price'>" +
      inf.price +
      "$</div><div id='delete' onclick='removeItems(" +
      inf.id +
      ")'>delete</div></div></div>";
  }

  // to make sure the cart counter is changing dynamically
  var cartCount = JSON.parse(localStorage.getItem("cart"))
  localStorage.setItem("countLength", cartCount.length)
  document.getElementById("cartDiv").innerHTML = localStorage.getItem("countLength")
}
// function removeItems(id) {
//   // delet
//   var index = cartProducts.findIndex(function (inf) {
//     return inf.id === id;
//   });

//   var cartIndex = cart.indexOf(id);
//   if (cartIndex !== -1) {
//     cartProducts.splice(index, 1);
//     cart.splice(cartIndex, 1);
//     localStorage.setItem("cart", JSON.stringify(cart));
//     localStorage.setItem("countLength", cart.length);
//   }
//   // total price
//   Subtotal = 0;
//   for (var inf of cartProducts) {
//     Subtotal += inf.price;
//   }
//   document.getElementById("Subtotal_price").innerHTML =
//     "Subtotal (" + cartProducts.length + " items ) : " + Subtotal.toFixed(2) + "$";
//   var productCard = document.getElementById("product_card_" + id);
//   if (productCard) {
//     productCard.parentNode.removeChild(productCard);
//   }
//  // relode cart page
// location.reload("../pages/cart.html")
// //cart Icon
//   var cartCount = JSON.parse(localStorage.getItem("productInCart"))
//   localStorage.setItem("countLength", cartCount.length)
//   document.getElementById("cartIcon").innerHTML = localStorage.getItem("numOfCart")
// }