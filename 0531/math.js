let x = 3;
let y = 2;
let z = 1;

// z = Math.round(x); //四捨五入
// z = Math.floor(x); // 無條件捨去
// z = Math.ceil(x); // 無條件進位
// z = Math.trunc(x);  // 只會單純的把小數點後面都去掉 留下整數
// z = Math.pow(x, 3); // pow就是平方 是一個input數字的平方 那幾瓶方取決於第二個input
// z = Math.abs(x); // 絕對值
// z = Math.sign(y); // 如果是負數:-1 正數:1 0的話就是0

let max = Math.max(x, y, z);
let min = Math.min(x, y, z);
console.log(max);
console.log(min);