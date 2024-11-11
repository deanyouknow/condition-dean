document.getElementById("orderButton").onclick = function (event) {
    event.preventDefault()
    let foodPrice = parseInt(document.getElementById ("food").value);
    let drinkPrice = parseInt(document.getElementById ("drink").value);

    let totalPrice = foodPrice + drinkPrice;

    let discount = 0;

    //Apply discount if total price is over 1
    if (totalPrice > 1){
       discount = totalPrice * 0.1;
       totalPrice -= discount;
    }
    const resulstdiv = document.getElementById("result")
    if (totalPrice > 0){
        resulstdiv.innerHTML = `
            Total : $${foodPrice}<br>
            Discount : $${discount.toFixed(2)}
            Final Price : $${totalPrice.toFixed(2)}`;
    } else  {
        resulstdiv.innerHTML = "Please Select both Food and Drink"
    }
}