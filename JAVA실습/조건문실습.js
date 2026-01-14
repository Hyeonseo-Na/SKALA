const orderbtn = document.getElementById("orderBtn");
const itemStock = document.getElementById("stockInput").value;
const orderAmount = document.getElementById("amountInput").value;
const membership = document.getElementById("membershipSelect").value;
const shippingOption = document.getElementById("shippingSelect").value;

orderBtn.addEventListener("click", () => {
  const itemStock = Number(stockInput.value);
  const orderAmount = Number(amountInput.value);
  const membership = membershipSelect.value;
  const shippingOption = shippingSelect.value;

  const result = processOrder(
    itemStock,
    membership,
    orderAmount,
    shippingOption
  );
  if (result) {
    alert("주문이 처리되었습니다.");
  }
  document.getElementById("orderResult").innerText = result;
});

function processOrder(itemStock, membership, orderAmount, shippingOption) {
  if (itemStock == 0) {
    alert("품절입니다.");
    return false;
  }

  let finalAmount = orderAmount;

  switch (membership) {
    case "gold":
      finalAmount = finalAmount * 0.95;
      console.log("5% 할인" + finalAmount);
      break;
    case "vip":
      finalAmount = finalAmount * 0.9;
      console.log("10% 할인" + finalAmount);
      break;
    default:
      console.log("할인 없음" + orderAmount);
      break;
  }

  if (finalAmount >= 200000) finalAmount -= 15000;
  else if (finalAmount >= 100000) finalAmount -= 5000;

  if (shippingOption === "fast") finalAmount += 3000;

  return finalAmount;
}
