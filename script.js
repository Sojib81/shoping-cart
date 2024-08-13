document.getElementById("btn-increase").addEventListener("click", function () {
  console.log("Btn increase click");
  itemCountUpdates("phone", true);
});

document.getElementById("btn-decrease").addEventListener("click", function () {
  console.log("decreased click");
  itemCountUpdates("phone", false);
});
document
  .getElementById("btn-case-decrease")
  .addEventListener("click", function () {
    // console.log("decreased click");
    itemCountUpdates("case", false);
  });

document
  .getElementById("btn-case-increase")
  .addEventListener("click", function () {
    //console.log("increased click");
    itemCountUpdates("case", true);
  });

// document.getElementById("btn-decrease").addEventListener("click", function () {
//   var cartItemCount = document.getElementById("item-cart-count");
//   const cartCountNew = parseInt(cartItemCount.value);

//   var itemCount = cartCountNew - 1;

//   cartItemCount.value = itemCount;
//   const itemValueTotal = 1219 * itemCount;
//   document.getElementById("item-total-value").innerText = "$" + itemValueTotal;
// });

function itemCountUpdates(item, isIncrease) {
  var cartItemCount = document.getElementById(item + "-count");
  const cartItemNewCount = parseInt(cartItemCount.value);
  //var isIncrease = true;
  let itemNewCount = cartItemNewCount;
  if (isIncrease == true) {
    itemNewCount = cartItemNewCount + 1;
  }
  if (isIncrease == false && cartItemNewCount > 0) {
    itemNewCount = cartItemNewCount - 1;
  }
  //console.log(itemNewCount, "itemcount");

  cartItemCount.value = itemNewCount;
  let itemsTotal = 0;
  if (item == "phone") {
    itemsTotal = 1219 * itemNewCount;
  }
  if (item == "case") {
    itemsTotal = 59 * itemNewCount;
  }

  document.getElementById(item + "-total").innerText = "$" + itemsTotal;
  calculateTotalValue();
}

function calculateTotalValue() {
  const phoneInput = document.getElementById("phone-count");
  const phoneCount = parseInt(phoneInput.value);

  const caseInput = document.getElementById("case-count");
  const caseCount = parseInt(caseInput.value);

  const totalValue = 1259 * phoneCount + 59 * caseCount;
  const totalTax = Math.round(totalValue * 0.1);
  const grandTotal = totalValue + totalTax;

  document.getElementById("products-total-price").innerText = "$" + totalValue;
  document.getElementById("products-tax").innerText = "$" + totalTax;
  document.getElementById("grand-total").innerText = "$" + grandTotal;
}
