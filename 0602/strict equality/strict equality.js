const PI = 3.14;

/// 三個等於 === 不只是會檢查if 還會同時檢查 type是不是正確的 就像下面的一樣 當PI=="3.14的時候" 會是true 但是 當三個等於 PI==="3.14"的時候 會是false 因為這裡的 "3.14" 是一個string 但是我們的PI 的預設是一個Number != 和 !== 也是和上面一樣的道理 後者會多檢查type


if (PI == "3.14") {
    console.log("This is PI");
}
else {
    console.log("NOT PI");
}