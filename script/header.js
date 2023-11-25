var inp = document.getElementById("product_search")
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://fakestoreapi.com/products");
xhr.send();
document.getElementById("buttonSearchIcon").addEventListener("click", function (e) {
  // e.preventDefault();
  var inputValue = inp.value.toLowerCase();
  if (xhr.readyState === 4 && xhr.status === 200) {
    var products = JSON.parse(xhr.response);
    var foundMatch = false;
    for (var searchInf of products) {
      var categoryName = searchInf.category.toLowerCase();
      if (inputValue.includes(categoryName)) {
        foundMatch = true;
        localStorage.setItem("category", inp.value);
        window.open("../pages/search_category.html", "_blank");
        break; // Exit the loop if a match is found
      }
    }
  }
});


var cart_arr = []

window.onload = function () {
  var storedCart = localStorage.getItem("cart");
  if (storedCart) {
    cart_arr = JSON.parse(storedCart);
  }
  document.getElementById("cartDiv").innerHTML = localStorage.getItem("countLength")
}

function addToCart(idCard) {
  cart_arr.push(idCard)
  localStorage.setItem("cart", JSON.stringify(cart_arr))
  var cartCount = JSON.parse(localStorage.getItem("cart"))
  localStorage.setItem("countLength", cartCount.length)
  document.getElementById("cartDiv").innerHTML = localStorage.getItem("countLength")
}


// var emailSign = localStorage.getItem("email");
// var passwordSign = localStorage.getItem("password");
var loginEmail=localStorage.getItem("loginEmail")
var loginPasswordlogin=localStorage.getItem("loginPasswordlogin")




function singleProduct(id) {
  if (loginEmail && loginPasswordlogin) {
    localStorage.setItem("id", id)
    var url = "../pages/singleProduct.html?id=" + id; // Include the product ID in the URL
    window.open(url, "_blank");
  } else {
    alert("Please log in to see the product details.");
    location.assign("../pages/signIn.html");
  }
}





if (!loginEmail && !loginPasswordlogin){
  document.getElementById("account").href="signIn.html"
}
var userName= localStorage.getItem("userName")
if (loginEmail && loginPasswordlogin){
  document.getElementById("account").innerHTML="Hello "+userName+" Account& lists"
}