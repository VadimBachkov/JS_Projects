const inputBgt = document.querySelector(".budget-input");
const btnBalance = document.querySelector(".btn-budget");
const addBtn = document.querySelector(".add-btn");
const purchasePrice = document.querySelector(".purchase-price");
const expList = document.querySelector(".expense-list");
const bgtValue = document.querySelector(".budget-value");
const balance = document.querySelector(".balance-value");

let expensesList =[];


btnBalance.addEventListener("click", () => {

    if (inputBgt.value > 0) {

        bgtValue.innerText = Number(inputBgt.value) + ", $";
        balance.innerText = Number(inputBgt.value) + ", $";

    } else {
        alert("Add budget value.")
    }
})

purchasePrice.addEventListener("click", () => {

    if (purchasePrice.value.trim() != 0) {
        addBtn.classList.add("active");
    } else {
        addBtn.classList.remove("active");
    }
})

addBtn.addEventListener("click", () => {
    const expTxt = document.querySelector(".expense-input__name");
    const expValue = document.querySelector(".expense-input__value");
    const purchase = document.querySelector(".expense-value");

    if (purchasePrice.value.trim() != 0) {
        let newItem = document.createElement("div");
        newItem.classList.add("expense-list");
        newItem.innerHTML = `
                <div class="item completed">
                <span>${"Exp: " + expTxt.value + ","}</span>
                <span>${expValue.value + " $"}</span>
                <div class="item-btn">
                    <i class="fa-solid fa-xmark"></i>
                </div>
        `
        expList.appendChild(newItem);

        purchase.innerHTML = purchasePrice.value + ", $";
        newBalance(purchasePrice.value);
        lowBalance(balance.value);

        purchasePrice.value = "";
        balance.value = "";

        //JSON ADD
        newExp = {
            name: expTxt.value,
            price:expValue.value
        }

        expensesList.push(newExp);
        console.log(expensesList);

        localStorage.setItem('user', JSON.stringify(expensesList));
        let user = JSON.parse(localStorage.getItem('user'));
        newExp = ""

    } else {
        alert("Please, add information.");
    }
})

expList.addEventListener("click", (event) => {
    const purchase = document.querySelector(".expense-value");
    if (event.target.classList.contains("fa-xmark")) {
        event.target.parentElement.parentElement.remove();
    }
    purchase.style.display = "none";
    balance.innerHTML = inputBgt.value + ", $ ";
})


function newBalance(purchasePrice) {
    balance.innerHTML = (inputBgt.value - purchasePrice + ", $");
}

function lowBalance(balance) {
    if (balance < 0) {
        alert("You neef more money.")
    }
}
