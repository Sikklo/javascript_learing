const date = new Date();
// 系統有內建一個Date()可以直接拿來用
const my_date = new Date(2000, 5, 17, 1, 9);
// 可以自訂義 2000年6月(這裡月份寫0會是1月)17號1點09分 還可以接秒跟毫秒
const my_date_v2 = new Date("2000-06-17T13:50");
// 也可以直接輸入日期 然後T代表time 後面接24小時的時間就可以
const year = date.getFullYear();
// 可以直接用 date.getFullYear();來拿到年分
const month = date.getMonth() + 1;
// 可直接拿月份 但是一月是從0開始算 所以+1來拿到現在正確的月份
const day = date.getDate();
// 要拿到幾號的話要使用getDate 而不是 getDay getDay是用來表示星期幾的;
const hour = date.getHours();
const minute = date.getMinutes();
console.log(date);
console.log(my_date);
console.log(my_date_v2);
console.log(year);
console.log(month);
console.log(day);
console.log(hour);
console.log(minute);

const change_date = new Date();
//我們也可以事後改變日期 
change_date.setFullYear(2030);
// 以此類推 
console.log(change_date);

const compare_date_v1 = new Date("2024-01-06");
const compare_date_v2 = new Date("2028-01-06");
if (compare_date_v2 > compare_date_v1) {
    console.log("Test!");
}
else {
    console.log("Test2!");
}
