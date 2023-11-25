xhr.addEventListener("readystatechange", function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    var products = JSON.parse(xhr.response);
    for (var inf of products) {
      var productsSection = document.getElementById("Products_section")
      productsSection.innerHTML += "<div class='product_card'> <div class='category'>" + inf.category
        + "</div><div><img onclick='singleProduct(" + inf.id + ")' class='category_img div_image' src=" + inf.image
        + "></div><div class='category_title' onclick='singleProduct(" + inf.id + ")'>" + inf.title
        + "</div><div class='prog-price'><progress min='0' max='5' value=" + inf.rating.rate
        + "></progress><span class='price'>" + inf.price
        + "$</span></div><button id='myButton' class='btn col-8' onclick='addToCart(" + inf.id + ")'>add to cart</button></div>"
    }
  }
});

//? ///////////////// handling category's buttons in the navbar///////////////////////////
document.getElementById("a3").addEventListener("click", function (e) {
  e.preventDefault()
  if (xhr.readyState === 4 && xhr.status === 200) {
    var products = JSON.parse(xhr.response);
    var productsSection = document.getElementById("Products_section")
    productsSection.innerHTML = " "
    for (var searchInf of products) {
      if (searchInf.category == "men's clothing") {
        productsSection.innerHTML += "<div class='product_card'> <div class='category'>" + searchInf.category
          + "</div><div><img onclick='singleProduct(" + searchInf.id + ")' class='category_img div_image' src=" + searchInf.image
          + "></div><div class='category_title' onclick='singleProduct(" + searchInf.id + ")'>" + searchInf.title
          + "</div><div><progress min='0' max='5' value=" + searchInf.rating.rate
          + "></progress><span class='price ms-5'>" + searchInf.price
          + "$</span></div><button id='myButton' class='btn col-8' onclick='addToCart(" + searchInf.id + ")'>add to cart</button></div>"
      }
    }
  }
})

document.getElementById("a4").addEventListener("click", function (e) {
  e.preventDefault()
  if (xhr.readyState === 4 && xhr.status === 200) {
    var products = JSON.parse(xhr.response);
    var productsSection = document.getElementById("Products_section")
    productsSection.innerHTML = " "
    for (var searchInf of products) {
      if (searchInf.category == "women's clothing") {
        productsSection.innerHTML += "<div class='product_card'> <div class='category'>" + searchInf.category
          + "</div><div><img onclick='singleProduct(" + searchInf.id + ")' class='category_img div_image' src=" + searchInf.image
          + "></div><div class='category_title' onclick='singleProduct(" + searchInf.id + ")'>" + searchInf.title
          + "</div><div><progress min='0' max='5' value=" + searchInf.rating.rate
          + "></progress><span class='price ms-5'>" + searchInf.price
          + "$</span></div><button id='myButton' class='btn col-8' onclick='addToCart(" + searchInf.id + ")'>add to cart</button></div>"
      }
    }
  }
})

document.getElementById("a5").addEventListener("click", function (i) {
  i.preventDefault()
  if (xhr.readyState === 4 && xhr.status === 200) {
    var products = JSON.parse(xhr.response);
    var productsSection = document.getElementById("Products_section")
    productsSection.innerHTML = " "
    for (var searchInf of products) {
      if (searchInf.category == "jewelery") {
        productsSection.innerHTML += "<div class='product_card'> <div class='category'>" + searchInf.category
          + "</div><div><img onclick='singleProduct(" + searchInf.id + ")' class='category_img div_image' src=" + searchInf.image
          + "></div><div class='category_title' onclick='singleProduct(" + searchInf.id + ")'>" + searchInf.title
          + "</div><div><progress min='0' max='5' value=" + searchInf.rating.rate
          + "></progress><span class='price ms-5'>" + searchInf.price
          + "$</span></div><button id='myButton' class='btn col-8' onclick='addToCart(" + searchInf.id + ")'>add to cart</button></div>"
      }
    }
  }
})

document.getElementById("a6").addEventListener("click", function (i) {
  i.preventDefault()
  if (xhr.readyState === 4 && xhr.status === 200) {
    var products = JSON.parse(xhr.response);
    var productsSection = document.getElementById("Products_section")
    productsSection.innerHTML = " "
    for (var searchInf of products) {
      if (searchInf.category == "electronics") {
        productsSection.innerHTML += "<div class='product_card'> <div class='category'>" + searchInf.category
          + "</div><div><img onclick='singleProduct(" + searchInf.id + ")' class='category_img div_image' src=" + searchInf.image
          + "></div><div class='category_title' onclick='singleProduct(" + searchInf.id + ")'>" + searchInf.title
          + "</div><div><progress min='0' max='5' value=" + searchInf.rating.rate
          + "></progress><span class='price ms-5'>" + searchInf.price
          + "$</span></div><button id='myButton' class='btn col-8' onclick='addToCart(" + searchInf.id + ")'>add to cart</button></div>"
      }
    }
  }
})

//  //------------------logOut
document.getElementById("log_out").addEventListener("click", function () {
  localStorage.removeItem("loginEmail")
  localStorage.removeItem("loginPasswordlogin")
  location.reload("../pages/homePage.html")
})