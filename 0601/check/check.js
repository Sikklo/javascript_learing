const check_box = document.getElementById("check-box");
const visabtn = document.getElementById("visabtn");
const masterbtn = document.getElementById("masterbtn");
const paypalbtn = document.getElementById("paypalbtn");
const submit = document.getElementById("submit");
const sub_result = document.getElementById("sub-result");
const payment_result = document.getElementById("payment-result");

submit.onclick = function () {
    if (check_box.checked) {
        sub_result.textContent = `You are subed!`;
    }
    else {
        sub_result.textContent = `You are not subed!`;

    }

    if (visabtn.checked) {
        payment_result.textContent = `You are paying with visa!`
    }
    else if (masterbtn.checked) {
        payment_result.textContent = `You are paying with master!`
    }
    else if (paypalbtn.checked) {
        payment_result.textContent = `You are paying with paypal!`
    }
    else {
        payment_result.textContent = `You are paying with Nothing bro!`
    }
}