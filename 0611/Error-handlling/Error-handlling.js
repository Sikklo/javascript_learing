// console.lag("Hello");
// 主要是在講如果你前面打錯了 會出現錯誤提示 然後會打斷正常的流程

// 而當我們使用try 和 catch 的時候 就算出現了錯誤 他最後還是會執行到終點 可以更好的抓bug

// try{
// console.log("Hello");
// }
// catch(error){
// console.error(error)
// }
// finally{
//   console.log("This always executes.")
// }


// console.log("You got it");
try {
  const dividend = Number(window.prompt("Enter a dividend："));
  const divisor = Number(window.prompt("Enter a divisor："));
  if(divisor == 0 ){
    throw new Error("You can't divide by 0!");
  }
  if(isNaN(divisor) || isNaN(dividend)){
    throw new Error("You have to enter a number!");
  }
  const result = dividend / divisor;
  console.log(result);

} catch (error) {
  console.error(error)
} 
console.log("The end");
