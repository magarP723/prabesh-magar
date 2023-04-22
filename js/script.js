let countT = 0;
let countS = 0;

alert("Hi TEJ!");

function increment(item) {
  if (item === "samosa") {
    countS += 1;
    document.getElementById("count-samosa").innerText = countS;
  } else {
    countT += 1;
    document.getElementById("count-tea").innerText = countT;
  }
}

function decrement(item) {
  if (countT > 0) {
    if (item === "tea") {
      countT -= 1;
      document.getElementById("count-tea").innerText = countT;
    }
    if(countS > 0){
      countS -= 1;
      document.getElementById("count-samosa").innerText = countS;
    }
  }
}

function show() {
  const samosaPrice = document.getElementsByClassName("samosaPrice")[0].value;
  const teaPrice = document.getElementsByClassName("teaPrice")[0].value;
  const tea_total = parseFloat(teaPrice).toFixed(2) * countT;
  const samosa_total = parseFloat(samosaPrice).toFixed(2) * countS;
  const total = samosa_total + tea_total;
  const vat = total * 0.13;
  const tip = total * 0.1;
  const grand_total = total + vat + tip;
  document.getElementsByClassName("samosa-total")[0].innerHTML =
    parseFloat(samosa_total).toFixed(2);
  document.getElementsByClassName("tea-total")[0].innerHTML =
    parseFloat(tea_total).toFixed(2);
  document.getElementsByClassName("total_price")[0].innerHTML =
    parseFloat(total).toFixed(2);
  document.getElementsByClassName("count_vat")[0].innerHTML =
    parseFloat(vat).toFixed(2);
  document.getElementsByClassName("count_tip")[0].innerHTML = parseFloat(
    tip.toFixed(2)
  );
  document.getElementsByClassName("grand_total")[0].innerHTML =
    parseFloat(grand_total).toFixed(2);
}
