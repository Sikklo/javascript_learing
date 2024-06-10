const text_box = document.getElementById("text_box");
const temper_c = document.getElementById("Temperature_c");
const temper_f = document.getElementById("Temperature_f");
const result = document.getElementById("result");
//----------------------------⬆const-----------------------------

let tem;
function convert() {
    if (temper_f.checked) {
        tem = Number(text_box.value);
        tem = (tem * 9 / 5) + 32;
        result.textContent = `你選擇轉成℉(華氏) 轉換後結果為：${tem.toFixed(1)} ℉`;
    }
    else if (temper_c.checked) {
        tem = Number(text_box.value);
        tem = (tem - 32) * 5 / 9;
        result.textContent = `你選擇轉成℃(攝氏) \n轉換後結果為：${tem.toFixed(1)} ℃`;
    }
    else {
        result.textContent = `請選擇其中一個您想轉換成的溫度`;
    }
}