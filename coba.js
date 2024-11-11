document.getElementById("Order").onclick = function () {
    alert("Your food is being processed");
    
    let foodInput = document.getElementById("food").value;
    let drinkInput = document.getElementById("drink").value;

    let foodprice = parseInt(foodInput);
    let drinkprice = parseInt(drinkInput);

    // Memastikan input valid
    if (isNaN(foodprice) || isNaN(drinkprice)) {
        document.getElementById("result").innerHTML = "Please enter valid prices for both food and drink.";
        return; 
    }

    let totalPrice = foodprice + drinkprice;

    let discount = 0;
    // Menerapkan diskon hanya jika total lebih dari $100
    if (totalPrice > 100) {
        discount = totalPrice * 0.1; // Diskon 10%
    }

    const resultDiv = document.getElementById("result");
    let finalPrice = totalPrice - discount;

    resultDiv.innerHTML = `
        Total : $${totalPrice}<br>
        Discount : $${discount.toFixed(2)}<br>
        Final price : $${finalPrice.toFixed(2)}
    `;
};