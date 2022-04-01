
 

var arr = JSON.parse(localStorage.getItem("cartdata")) || [];
var number = 0;
var count = 0;
   console.log(arr);
   let length = arr.length;
   console.log(length);
   //  totalamount = 0;
   //    arr.forEach(({price}) =>{
   //       totalamount = totalamount+Number(price);
   //    });
   // console.log(totalamount);

   var totalamount = 0;

   if(arr.length>0){
      let page = document.getElementById('noitems');
      page.innerText = `Items in  your Cart! Happy Shopping😍`;
      document.getElementById('going').removeAttribute('src');
   }
   




   
   let div5 = document.createElement("div");
    append(arr);
function append(arr){
   arr.forEach((elem, index) => {

      if(elem.qty == undefined){
         elem.qty = 1;
      }

      totalamount += elem.qty*elem.price;
      console.log("jaz",elem.qty);
      console.log("p", elem.price)

      div5.innerHTML = null;
      side(totalamount);
    let maindiv = document.createElement("div");
    maindiv.setAttribute('id', 'maindiv');

   //  let onemorediv = document.createElement('div');
   //  onemorediv.setAttribute('id', 'onemorediv');

       let div2 = document.createElement("div");
       div2.setAttribute('id', 'div2');
       
       let image = document.createElement("img");
       image.src = elem.img_url;
       image.setAttribute('id', 'cartimage')

       let div3 = document.createElement("div");
       div3.setAttribute('id', 'div3');
       let cptitle = document.createElement("h2");
       cptitle.innerText = elem.name;
       cptitle.setAttribute('id', 'carttitle');

       let divonemore = document.createElement('div');
       divonemore.setAttribute('id', 'divonemore');


       let cpprice = document.createElement("h5");
       cpprice.innerText = elem.price;
       cpprice.setAttribute('id', 'cartprice');

       let cutoff = document.createElement('h5');
       cutoff.innerText = elem.cutPrice;
       cutoff.setAttribute('id', 'cutoff');

       let div4 = document.createElement("div");
       div4.setAttribute('id', 'div4');
       
       let dbtn = document.createElement('button');
       dbtn.innerText = "-";
       dbtn.setAttribute('id', 'dbtn');
       dbtn.addEventListener("click", function(){
          
          if(elem.qty > 0){
            elem.qty -= 1;
            totalamount = 0;
          }
          localStorage.setItem("cartdata", JSON.stringify(arr));
          document.getElementById('cart').innerHTML = null;
          append(arr);
          side();
          location.reload();
       })

       let quantity = document.createElement("p");
       quantity.innerText = `QTY:${elem.qty}`;
       quantity.setAttribute('id', 'quantity');

       let ibtn = document.createElement("button");
       ibtn.innerText = "+";
       ibtn.setAttribute('id', 'ibtn');
       ibtn.addEventListener("click", function(){
         elem.qty += 1;
         totalamount = 0;
         localStorage.setItem("cartdata", JSON.stringify(arr));
         document.getElementById('cart').innerHTML = null;
         append(arr);
         side();
       })

       let remove = document.createElement('button');
       remove.innerText = "REMOVE";
       remove.setAttribute('id', 'remove');
       remove.addEventListener('click', function(){
         arr.splice(index, 1)
          localStorage.setItem("cartdata", JSON.stringify(arr));
          document.getElementById('cart').innerHTML = null;
          append(arr);
          side();
       })

   //     let div5 = document.createElement("div");
   //     div5.setAttribute('id', 'div5');

   //     let coupon = document.createElement("select");
   //     coupon.innerText = `50% DISCOUNT COUPON`;
   //     coupon.setAttribute('id', 'coupon');

   //     let pricedetails = document.createElement("p");
   //     pricedetails.innerText = `PRICE DETAILS (${length} ITEMS)`;
   //     pricedetails.setAttribute('id', 'pricedetails');

   //     let subtotal = document.createElement('div');
   //     subtotal.innerText = `SubTotal`;
   //     subtotal.setAttribute('id', 'subtotal');
   //     let subtotaldiv = document.createElement('div');
   //     subtotaldiv.innerText = `${totalamount}.00`;
   //     subtotaldiv.setAttribute('id', 'subtotaldiv')
   //     subtotal.append(subtotaldiv);

   //     let dcharges = document.createElement('div');
   //     dcharges.innerText = `Delivery Charges`;
   //     dcharges.setAttribute('id', 'dcharges');
   //     let dchargesdiv = document.createElement('div');
   //     dchargesdiv.innerText = "FREE";
   //     dchargesdiv.setAttribute('id', 'dchargesdiv')
   //     dcharges.append(dchargesdiv);

   //     let youpay = document.createElement('div');
   //     youpay.innerText = `You Pay`;
   //     youpay.setAttribute('id', 'youpay');
   //     let youpaydiv = document.createElement('div');
   //     youpaydiv.innerText = `${totalamount}.00`;
   //     youpaydiv.setAttribute('id', 'youpaydiv')
   //     youpay.append(youpaydiv);

   //     let placeorder = document.createElement('button');
   //     placeorder.innerText = `PLACE ORDER`;
   //     placeorder.setAttribute('id', 'placeorder');

   //  div5.append(coupon, pricedetails, subtotal, dcharges, youpay, placeorder);
       div4.append(dbtn, quantity, ibtn, remove)
       divonemore.append(cpprice, cutoff)
       div3.append(cptitle, divonemore, div4);
       div2.append(image, div3);
       maindiv.append(div2);
       main1.append(maindiv);
       main2.append(div5);
   });
};

function side(totalamount){

       div5.setAttribute('id', 'div5');

       let coupon = document.createElement("div");
       coupon.innerText = `CART DETAILS`;
       coupon.setAttribute('id', 'coupon');
       let offer = document.createElement('div');
       offer.setAttribute('id', 'offer');
       offer.innerText = `Click to Add 500/- OFF`;
       let offerdiv = document.createElement('div');
       offerdiv.innerText = `\u2611`;
       offerdiv.setAttribute('id', 'offerdiv');
       offer.append(offerdiv);
       offerdiv.addEventListener('click', function(){
          total = totalamount-500;
          console.log("totalamount", totalamount)
          offerdiv.style.color = 'green';
          alert(`500/- DISCOUNT ADDED`)
       })

       let pricedetails = document.createElement("p");
       pricedetails.innerText = `PRICE DETAILS (${length} ITEMS)`;
       pricedetails.setAttribute('id', 'pricedetails');

       let subtotal = document.createElement('div');
       subtotal.innerText = `SubTotal`;
       subtotal.setAttribute('id', 'subtotal');
       let subtotaldiv = document.createElement('div');
       subtotaldiv.innerText = `${totalamount}.00`;
       subtotaldiv.setAttribute('id', 'subtotaldiv')
       subtotal.append(subtotaldiv);

       let dcharges = document.createElement('div');
       dcharges.innerText = `Delivery Charges`;
       dcharges.setAttribute('id', 'dcharges');
       let dchargesdiv = document.createElement('div');
       dchargesdiv.innerText = "FREE";
       dchargesdiv.setAttribute('id', 'dchargesdiv')  
       dcharges.append(dchargesdiv);

       let youpay = document.createElement('div');
       youpay.innerText = `You Pay`;
       youpay.setAttribute('id', 'youpay');
       let youpaydiv = document.createElement('div');
       youpaydiv.innerText = `${totalamount}.00`;
       youpaydiv.setAttribute('id', 'youpaydiv')
       youpay.append(youpaydiv);


       let placeorder = document.createElement('button');
       placeorder.innerText = `PLACE ORDER`;
       placeorder.setAttribute('id', 'placeorder');
       placeorder.addEventListener('click', function(){

       })

    div5.append(coupon, offer, pricedetails, subtotal, dcharges, youpay, placeorder);
}
   // let empty = document.createElement('div');
   // empty.setAttribute('id', 'empty');
   // empty.innerText = `Empty Your Cart`;

   




   // let div5 = document.createElement("div");
   //     div5.setAttribute('id', 'div5');

   //     let coupon = document.createElement("select");
   //     coupon.innerText = `50% DISCOUNT COUPON`;
   //     coupon.setAttribute('id', 'coupon');

   //     let pricedetails = document.createElement("p");
   //     pricedetails.innerText = `PRICE DETAILS`;
   //     pricedetails.setAttribute('id', 'pricedetails');

   //     let subtotal = document.createElement('div');
   //     subtotal.innerText = `SubTotal`;
   //     subtotal.setAttribute('id', 'subtotal');

   //     let dcharges = document.createElement('div');
   //     dcharges.innerText = `Delivery Charges`;
   //     dcharges.setAttribute('id', 'dcharges');

   //     let youpay = document.createElement('div');
   //     youpay.innerText = `You Pay`;
   //     youpay.setAttribute('id', 'youpay');

   //     let placeorder = document.createElement('button');
   //     placeorder.innerText = `Place Order`;
   //     placeorder.setAttribute('id', 'placeorder');

   //  div5.append(coupon, pricedetails, subtotal, dcharges, youpay, placeorder);