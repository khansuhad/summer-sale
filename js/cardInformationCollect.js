function collectMoney(cardMoney){
    const Money = document.getElementById(cardMoney).innerText;
    const MoneyFloat = parseFloat(Money);

    return MoneyFloat;
}

function getCard(cardName ,cardMoney){
    document.getElementById(cardName).addEventListener('click',function(){
        const cMoney = collectMoney(cardMoney);
        const totalPrice = collectMoney('total-price');
        const mainTotalPrice = cMoney + totalPrice;
        document.getElementById('total-price').innerText = mainTotalPrice.toFixed(2) ;
        const mainPrice = document.getElementById('total-price').innerText ;
        if(mainPrice > 0 ){
            makePurchase.removeAttribute("disabled");
        }
    }) 
}
    const card1 = getCard("card1" , "card-money1");
    const card2 = getCard("card2", "card-money2");
    const card3 = getCard("card3", "card-money3");
    const card4 = getCard("card4", "card-money4");
    const card5 = getCard("card5", "card-money5");
    const card6 = getCard("card6", "card-money6");
// document.getElementById("card1").addEventListener('click',function(){
//     const cardMoney = collectMoney('card-money1');
//     const totalPrice = collectMoney('total-price');
//     const mainTotalPrice = cardMoney + totalPrice;
//     document.getElementById('total-price').innerText = mainTotalPrice.toFixed(2) ;
// }) 
// document.getElementById("card2").addEventListener('click',function(){
//     const cardMoney = collectMoney('card-money2');
//     const totalPrice = collectMoney('total-price');
//     const mainTotalPrice = cardMoney + totalPrice;
//     document.getElementById('total-price').innerText = mainTotalPrice.toFixed(2) ;
// }) 
// document.getElementById("card3").addEventListener('click',function(){
//     const cardMoney = collectMoney('card-money3');
//     const totalPrice = collectMoney('total-price');
//     const mainTotalPrice = cardMoney + totalPrice;
//     document.getElementById('total-price').innerText = mainTotalPrice.toFixed(2) ;
// }) 
// document.getElementById("card4").addEventListener('click',function(){
//     const cardMoney = collectMoney('card-money4');
//     const totalPrice = collectMoney('total-price');
//     const mainTotalPrice = cardMoney + totalPrice;
//     document.getElementById('total-price').innerText = mainTotalPrice.toFixed(2) ;
// }) 
// document.getElementById("card5").addEventListener('click',function(){
//     const cardMoney = collectMoney('card-money5');
//     const totalPrice = collectMoney('total-price');
//     const mainTotalPrice = cardMoney + totalPrice;
//     document.getElementById('total-price').innerText = mainTotalPrice.toFixed(2) ;
// }) 
// document.getElementById("card6").addEventListener('click',function(){
//     const cardMoney = collectMoney('card-money6');
//     const totalPrice = collectMoney('total-price');
//     const mainTotalPrice = cardMoney + totalPrice;
//     document.getElementById('total-price').innerText = mainTotalPrice.toFixed(2) ;
//     console.log(document.getElementById('total-price').innerText)
// }) 
const totalPrice = collectMoney("total-price") ;
const makePurchase = document.getElementById("make-purchase");


