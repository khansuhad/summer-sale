function collectMoney(cardMoney) {
  const Money = document.getElementById(cardMoney).innerText;
  const MoneyFloat = parseFloat(Money);

  return MoneyFloat;
}

function getCard(cardName, cardMoney) {
  document.getElementById(cardName).addEventListener("click", function () {
    const cMoney = collectMoney(cardMoney);
    const totalPrice = collectMoney("total-price");
    const mainTotalPrice = cMoney + totalPrice;
    document.getElementById("total-price").innerText =
      mainTotalPrice.toFixed(2);
    const mainPrice = document.getElementById("total-price").innerText;
    const applyButton = document.getElementById("apply-button");
    const makePurchase = document.getElementById("make-purchase");

    if (mainPrice > 0) {
      makePurchase.removeAttribute("disabled");
    }

    if (mainPrice > 200) {
      applyButton.removeAttribute("disabled");

      applyButton.addEventListener("click", function () {
        const coupon = document.getElementById("coupon-code");
        const couponValue = coupon.value;
        const discountPrice = document.getElementById("discount-price");
        const inTotalPrice = document.getElementById("intotal-price");
        const mainPrice = document.getElementById("total-price").innerText;

        if (couponValue === "SELL200") {
          const discount = (mainPrice * 20) / 100;
          discountPrice.innerText = discount.toFixed(2);
          const InTotal = mainPrice - discount;
          inTotalPrice.innerText = InTotal.toFixed(2);
          coupon.value = "";
          applyButton.setAttribute("disabled", "true");
          return;
        } else {
          coupon.value = "";
        }
      });
    }
  });
}
const card1 = getCard("card1", "card-money1");
const card2 = getCard("card2", "card-money2");
const card3 = getCard("card3", "card-money3");
const card4 = getCard("card4", "card-money4");
const card5 = getCard("card5", "card-money5");
const card6 = getCard("card6", "card-money6");

document.getElementById("go-home").addEventListener("click", function () {
  const discountPrice = document.getElementById("discount-price");
  const inTotalPrice = document.getElementById("intotal-price");
  const mainPrice = document.getElementById("total-price");
  const makePurchase = document.getElementById("make-purchase");
  const applyButton = document.getElementById("apply-button");

  discountPrice.innerText = "00.00";
  inTotalPrice.innerText = "00.00";
  mainPrice.innerText = "00.00";

  makePurchase.setAttribute("disabled", "true");
  applyButton.setAttribute("disabled", "true");
});
