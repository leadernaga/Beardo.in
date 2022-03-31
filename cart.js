var arr = JSON.parse(localStorage.getItem("cartdata")) || [];
   console.log(arr);
   arr.forEach(( {img_url, name, price} ) => {

    let maindiv = document.createElement("div");
    maindiv.setAttribute('id', 'maindiv');


       let div2 = document.createElement("div");
       div2.setAttribute('id', 'div2');
       
       let image = document.createElement("img");
       image.src = img_url;
       image.setAttribute('id', 'cartimage')

       let div3 = document.createElement("div");
       div3.setAttribute('id', 'div3');
       let cptitle = document.createElement("h2");
       cptitle.innerText = name;
       cptitle.setAttribute('id', 'carttitle')

       let cpprice = document.createElement("h5");
       cpprice.innerText = price;
       cpprice.setAttribute('id', 'cartprice');

       let div4 = document.createElement("div");
       div4.setAttribute('id', 'div4');
       
       let dbtn = document.createElement('button');
       dbtn.innerText = "-";
       dbtn.setAttribute('id', 'dbtn');

       let quantity = document.createElement("p");
       quantity.innerText = "QTY";
       quantity.setAttribute('id', 'quantity');

       let ibtn = document.createElement("button");
       ibtn.innerText = "+";
       ibtn.setAttribute('id', 'ibtn');

       let remove = document.createElement('button');
       remove.innerText = "REMOVE";
       remove.setAttribute('id', 'remove');

       let div5 = document.createElement("div");
       div5.setAttribute('id', 'div5');

       let coupon = document.createElement("select");
       coupon.innerText = `50% DISCOUNT COUPON`;
       coupon.setAttribute('id', 'coupon');

       let pricedetails = document.createElement("p");
       pricedetails.innerText = `PRICE DETAILS`;
       pricedetails.setAttribute('id', 'pricedetails');

       let subtotal = document.createElement('div');
       subtotal.innerText = `SubTotal`;
       subtotal.setAttribute('id', 'subtotal');

       let dcharges = document.createElement('div');
       dcharges.innerText = `Delivery Charges`;
       dcharges.setAttribute('id', 'dcharges');

       let youpay = document.createElement('div');
       youpay.innerText = `You Pay`;
       youpay.setAttribute('id', 'youpay');

       let placeorder = document.createElement('button');
       placeorder.innerText = `Place Order`;
       placeorder.setAttribute('id', 'placeorder');

    div5.append(coupon, pricedetails, subtotal, dcharges, youpay, placeorder);
       div4.append(dbtn, quantity, ibtn, remove)
       div3.append(cptitle, cpprice, div4);
       div2.append(image, div3);
       maindiv.append(div2, div5);
       cart.append(maindiv);
   });