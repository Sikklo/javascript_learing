const dc_btn = document.getElementById("decrease-btn");
const rs_btn = document.getElementById("reset-btn");
const ic_btn = document.getElementById("increase-btn");
const ct_lable = document.getElementById("count-label");

// --------------


let count = 0;

ic_btn.onclick = function () {
    count += 1;
    ct_lable.textContent = count;
}

dc_btn.onclick = function () {
    count -= 1;
    ct_lable.textContent = count;
}

rs_btn.onclick = function () {
    count = 0;
    ct_lable.textContent = count;
}