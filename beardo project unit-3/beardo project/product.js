//import header  ||  filename:header1.js  || function name: header()

import { header } from "./components/header1.js"
let header1 = document.getElementById("header1");
header1.innerHTML = header()

// ----------------------------------------cart location given-----------------------------------------------------------


document.getElementById("svg2").addEventListener("click", function () {
  window.location.href = "cart.html"
})

// ---------------------------------- main body detail data parse from local storage.get item---------------------------------------------------------

let combo_data = JSON.parse(localStorage.getItem("combo_d"));
let beard_data = JSON.parse(localStorage.getItem("beard_d"));
let face_data = JSON.parse(localStorage.getItem("face_d"));
let hair_data = JSON.parse(localStorage.getItem("hair_d"));
let body_data = JSON.parse(localStorage.getItem("body_d"));
let fragrance_data = JSON.parse(localStorage.getItem("fragrance_d"));
let beared_fashion_data = JSON.parse(localStorage.getItem("beared_fashion_d"));
let trimmers_data = JSON.parse(localStorage.getItem("trimmers_d"));

// -------------------------------------------------top div data-----------------------------------------------------------------


var combodata = [
  {
    img_url:
      "https://images.beardo.in/eyJidWNrZXQiOiJiZWFyZG9jIiwia2V5IjoidXBsb2Fkcy91bHRpbWF0ZS1mdy10cmlvLTUxMng1MTItMTE5NDAucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4MCwiaGVpZ2h0IjoxLCJmaXQiOiJvdXRzaWRlIn19fQ==",
    name: " Top Sellers",
  },
  {
    img_url:
      "https://images.beardo.in/eyJidWNrZXQiOiJiZWFyZG9jIiwia2V5IjoidXBsb2Fkcy9iZWFyZC1ncm93dGgtY29tYm8tNTEyeDUxMi01MjI3LTExOTQxLnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6ODAsImhlaWdodCI6MSwiZml0Ijoib3V0c2lkZSJ9fX0=",
    name: "Below 999 Combos",
  },
  {
    img_url:
      "https://images.beardo.in/eyJidWNrZXQiOiJiZWFyZG9jIiwia2V5IjoidXBsb2Fkcy9jaGFyY29hbC1id2Z3LTUxMng1MTItNzI3OC0xMTk0OS5wbmciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgwLCJoZWlnaHQiOjEsImZpdCI6Im91dHNpZGUifX19",
    name: "Below 499 Combos",
  },
];

var bearddata = [
  {
    img_url:
      "https://images.beardo.in/eyJidWNrZXQiOiJiZWFyZG9jIiwia2V5IjoidXBsb2Fkcy9ncm93dGgtb2lsLTEwMjR4MTAyNC04MzY0LnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6ODAsImhlaWdodCI6MSwiZml0Ijoib3V0c2lkZSJ9fX0=",
    name: "Beard Growth",
  },
  {
    img_url:
      "https://images.beardo.in/eyJidWNrZXQiOiJiZWFyZG9jIiwia2V5IjoidXBsb2Fkcy9iZWFyZC1zZXJ1bS0xMDI0eDEwMjQtODM3NS5wbmciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgwLCJoZWlnaHQiOjEsImZpdCI6Im91dHNpZGUifX19",
    name: "Beard Styling",
  },
  {
    img_url:
      "https://images.beardo.in/eyJidWNrZXQiOiJiZWFyZG9jIiwia2V5IjoidXBsb2Fkcy9iZWFyZC1jb2xvci0xMDI0eDEwMjQtODM3NC5wbmciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgwLCJoZWlnaHQiOjEsImZpdCI6Im91dHNpZGUifX19",
    name: "Beard Color",
  },
  {
    img_url:
      "https://images.beardo.in/eyJidWNrZXQiOiJiZWFyZG9jIiwia2V5IjoidXBsb2Fkcy9zaGVlc2hhbS1iZWFyZC1jb21iLTEtODY1Ny5wbmciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgwLCJoZWlnaHQiOjEsImZpdCI6Im91dHNpZGUifX19",
    name: "Beard Tools",
  },
];

var facedata = [
  {
    img_url:
      "https://images.beardo.in/eyJidWNrZXQiOiJiZWFyZG9jIiwia2V5IjoidXBsb2Fkcy92aXRhbWluLWMtY29tcGxldGUtY2FyZS1jb21iby01MTJ4NTEyLTExNzE1LTEyMDY2LnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6ODAsImhlaWdodCI6MSwiZml0Ijoib3V0c2lkZSJ9fX0=",
    name: " Vitamin C Range",
  },
  {
    img_url:
      "https://images.beardo.in/eyJidWNrZXQiOiJiZWFyZG9jIiwia2V5IjoidXBsb2Fkcy9hY3RpdmF0ZWQtY2hhcmNvYWwtZmFjZXdhc2gtMTAyNHgxMDI0LTg0MDEucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4MCwiaGVpZ2h0IjoxLCJmaXQiOiJvdXRzaWRlIn19fQ==",
    name: "Facewash",
  },
  {
    img_url:
      "https://images.beardo.in/eyJidWNrZXQiOiJiZWFyZG9jIiwia2V5IjoidXBsb2Fkcy9uZWVtLWZhY2Utc2NydWItMTAyNHgxMDI0LTgzNzkucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4MCwiaGVpZ2h0IjoxLCJmaXQiOiJvdXRzaWRlIn19fQ==",
    name: "Scrubs & Masks",
  },
  {
    img_url:
      "https://images.beardo.in/eyJidWNrZXQiOiJiZWFyZG9jIiwia2V5IjoidXBsb2Fkcy91bmRlci1leWUtZ2VsLTEwMjR4MTAyNC04MzcyLnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6ODAsImhlaWdodCI6MSwiZml0Ijoib3V0c2lkZSJ9fX0=",
    name: "Eye Care",
  },
  {
    img_url:
      "https://images.beardo.in/eyJidWNrZXQiOiJiZWFyZG9jIiwia2V5IjoidXBsb2Fkcy91bHRyYWdsb3ctbG90aW9uLTEwMjR4MTAyNC04MzgwLnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6ODAsImhlaWdodCI6MSwiZml0Ijoib3V0c2lkZSJ9fX0=",
    name: "Face Moisturize and...",
  },
  {
    img_url:
      "https://images.beardo.in/eyJidWNrZXQiOiJiZWFyZG9jIiwia2V5IjoidXBsb2Fkcy9saXAtbGlnaHRlbmVyLTEwMjR4MTAyNC04MzgyLnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6ODAsImhlaWdodCI6MSwiZml0Ijoib3V0c2lkZSJ9fX0=",
    name: "Lip care",
  },
];

var hairdata = [
  {
    img_url:
      "https://images.beardo.in/eyJidWNrZXQiOiJiZWFyZG9jIiwia2V5IjoidXBsb2Fkcy9oYWlyLXNlcnVtLTEwMjR4MTAyNC04MzMyLTg2NTgucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4MCwiaGVpZ2h0IjoxLCJmaXQiOiJvdXRzaWRlIn19fQ==",
    name: "Oils and Serums",
  },
  {
    img_url:
      "https://images.beardo.in/eyJidWNrZXQiOiJiZWFyZG9jIiwia2V5IjoidXBsb2Fkcy9zdHJvbmctaG9sZC13YXgtbmV3LTUxMng1MTItMTI0MTgucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4MCwiaGVpZ2h0IjoxLCJmaXQiOiJvdXRzaWRlIn19fQ==",
    name: "Hair Syling and...",
  },
  {
    img_url:
      "https://images.beardo.in/eyJidWNrZXQiOiJiZWFyZG9jIiwia2V5IjoidXBsb2Fkcy9oYWlyLWZhbGwtY29udHJvbC1zaGFtcG9vLTEwMjR4MTAyNC04Mzc4LnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6ODAsImhlaWdodCI6MSwiZml0Ijoib3V0c2lkZSJ9fX0=",
    name: "Shampoos & Conditioner",
  },
];

var bodydata = [
  {
    img_url:
      "https://images.beardo.in/eyJidWNrZXQiOiJiZWFyZG9jIiwia2V5IjoidXBsb2Fkcy9hY3RpdmF0ZWQtY2hhcmNvYWwtYm9keXdhc2gtNTEyeDUxMi0xMjI0NS0xMzExNS5wbmciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgwLCJoZWlnaHQiOjEsImZpdCI6Im91dHNpZGUifX19",
    name: "Bodywash",
  },
  {
    img_url:
      "https://images.beardo.in/eyJidWNrZXQiOiJiZWFyZG9jIiwia2V5IjoidXBsb2Fkcy9kZWVwLXNlYS1icmljay1zb2FwLTUxMng1MTItMTMxMTQtMS0zNjk1NS5wbmciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgwLCJoZWlnaHQiOjEsImZpdCI6Im91dHNpZGUifX19",
    name: "Soaps",
  },
  {
    img_url:
      "https://images.beardo.in/eyJidWNrZXQiOiJiZWFyZG9jIiwia2V5IjoidXBsb2Fkcy92aXRhbWluLWMteW9ndXJ0LTUxMng1MTItMS0xMTA2MS0xMzE1NC5wbmciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgwLCJoZWlnaHQiOjEsImZpdCI6Im91dHNpZGUifX19",
    name: "Body Nourishment",
  },
  {
    img_url:
      "https://images.beardo.in/eyJidWNrZXQiOiJiZWFyZG9jIiwia2V5IjoidXBsb2Fkcy90YXR0b28tc2hpbmVyLTEwMjR4MTAyNC04MzY4LnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6ODAsImhlaWdodCI6MSwiZml0Ijoib3V0c2lkZSJ9fX0=",
    name: "Tattoo Care",
  },
  {
    img_url:
      "https://images.beardo.in/eyJidWNrZXQiOiJiZWFyZG9jIiwia2V5IjoidXBsb2Fkcy9pbnRpbWF0ZS13YXNoLTEwMjR4MTAyNC0yLTgzNjkucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4MCwiaGVpZ2h0IjoxLCJmaXQiOiJvdXRzaWRlIn19fQ==",
    name: "Intimate Care",
  },
];

var fragrancedata = [
  {
    img_url:
      "https://images.beardo.in/eyJidWNrZXQiOiJiZWFyZG9jIiwia2V5IjoidXBsb2Fkcy9kYXJrLXNpZGUtcGVyZnVtZS0xMDI0eDEwMjQtODM3Ny5wbmciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgwLCJoZWlnaHQiOjEsImZpdCI6Im91dHNpZGUifX19",
    name: "EDP (Strong Perfumes)",
  },
  {
    img_url:
      "https://images.beardo.in/eyJidWNrZXQiOiJiZWFyZG9jIiwia2V5IjoidXBsb2Fkcy9yc3otc3B5LWRpby01MTJ4NTEyLTg0MDQucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4MCwiaGVpZ2h0IjoxLCJmaXQiOiJvdXRzaWRlIn19fQ==",
    name: "Perfume Body Spray",
  },
];

var fashiondata = [
  {
    img_url:
      "https://images.beardo.in/eyJidWNrZXQiOiJiZWFyZG9jIiwia2V5IjoidXBsb2Fkcy9yc3otMXJzei1zaGVlc2hhbS1iZWFyZC1jb21iLTEtMS0xLTgzNjIucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4MCwiaGVpZ2h0IjoxLCJmaXQiOiJvdXRzaWRlIn19fQ==",
    name: "Accessories",
  },
  {
    img_url:
      "https://images.beardo.in/eyJidWNrZXQiOiJiZWFyZG9jIiwia2V5IjoidXBsb2Fkcy90LXNoaXJ0LTEwMjR4MTAyNC04MzcwLnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6ODAsImhlaWdodCI6MSwiZml0Ijoib3V0c2lkZSJ9fX0=",
    name: "T-Shirts",
  },
  {
    img_url:
      "https://images.beardo.in/eyJidWNrZXQiOiJiZWFyZG9jIiwia2V5IjoidXBsb2Fkcy9sZWF0aGVyLWphY2tldC0xMDI0eDEwMjQtMS0xLTk0MjIucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4MCwiaGVpZ2h0IjoxLCJmaXQiOiJvdXRzaWRlIn19fQ==",
    name: "Jackets",
  },
];

var trimmersdata = [
  {
    img_url:
      "https://images.beardo.in/eyJidWNrZXQiOiJiZWFyZG9jIiwia2V5IjoidXBsb2Fkcy9ncm9vbWluZy1raXQtMDEtODM3My5wbmciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgwLCJoZWlnaHQiOjEsImZpdCI6Im91dHNpZGUifX19",
    name: "Trimmers",
  },
];


// --------------------------------------------------addeventlistener to products---------------------------------------------------------------------------------



document.getElementById("combos").addEventListener("click", function () {
  top_append(combodata, combo_data);
});

document.getElementById("beard").addEventListener("click", function () {
  top_append(bearddata, beard_data);
});

document.getElementById("face").addEventListener("click", function () {
  top_append(facedata, face_data);
});
document.getElementById("hair").addEventListener("click", function () {
  top_append(hairdata, hair_data);
});

document.getElementById("body").addEventListener("click", function () {
  top_append(bodydata, body_data);
});

document
  .getElementById("fragrance").addEventListener("click", function () {
    top_append(fragrancedata, fragrance_data);
  });

document.getElementById("fashion").addEventListener("click", function () {
  top_append(fashiondata, beared_fashion_data);
});

document.getElementById("trimmers").addEventListener("click", function () {
  top_append(trimmersdata, trimmers_data);
});

// ------------------------------------------------------------appending top div data-------------------------------------------------------------------------------

function top_append(data, main) {

  console.log(main);

  document.getElementById("header_data").innerHTML = "";
  data.map(function (e) {

    let append_div1 = document.createElement("div");

    append_div1.id = "append_div1";

    let append_img1 = document.createElement("img");

    append_img1.src = e.img_url;

    let append_div2 = document.createElement("div");

    append_div2.textContent = e.name;

    append_div1.append(append_img1, append_div2);

    document.getElementById("header_data").append(append_div1);

    append_div1.addEventListener("click", function () {

      append_data(main);
    });

    document
      .getElementById("filter")
      .addEventListener("change", function () {
        handleprice(main);
      });
  });
}

top_append(combodata);
append_data(combo_data);

// ---------------------------------------------------------------appending main body data----------------------------------------------------------------------

function append_data(data) {
  document.getElementById("all_product").innerHTML = "";
  data.map(function (el) {

    let div04 = document.createElement("div");
    div04.id = "div04";

    let img04 = document.createElement("img");
    img04.src = el.img_url;
    img04.id = "img04";

    let div28 = document.createElement("div");
    div28.textContent = el.name.toUpperCase();
    div28.id = "div28";

    let div05 = document.createElement("div");
    div05.textContent = ` ₹ ${el.price}`;
    div05.id = "div05";

    let div29 = document.createElement("div");
    div29.textContent = "ADD TO CART";
    div29.id = "div29";

    div04.append(img04, div28, div05, div29);
    document.getElementById("all_product").append(div04);

    // -----------------------------------------------------add to cart addeventlistener--------------------------------------------------------------------------

    div29.addEventListener("click", function () {

      cart_data(el)
      alert("Added to cart")

    })
  });
}


// ----------------------------------------------------------filter according to price------------------------------------------------------------------



document
  .getElementById("filter")

  .addEventListener("change", function () {

    handleprice(combo_data);
  });
function handleprice(data) {

  var selected = document.querySelector("#filter").value;

  if (selected == "high_to_low") {

    data.sort(function (a, b) {

      return +b.price - +a.price;

    });
  } else {

    data.sort(function (a, b) {

      return +a.price - +b.price;
    });
  }
  append_data(data);
}

// ------------------------------------------------------add to cart-------------------------------------------------------------------------------------


var arr = JSON.parse(localStorage.getItem("cartdata")) || []

function cart_data(cart_data) {

  arr.push(cart_data)

  localStorage.setItem("cartdata", JSON.stringify(arr))

  location.reload()
}
// ----------------------------------------------------show cart count---------------------------------------------------------------------------------



document.querySelector("#cart_count").textContent = `${arr.length}`;

// ---------------------------------------------------------- footer--------------------------------------------------------------------------------------


import { footer } from "./components/footer.js";

let footer_main_div = document.getElementById("footer_main");
footer_main_div.innerHTML = footer();


//  ----------------------------------------------------------------------------------------------------------------------------------------------------