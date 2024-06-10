// function say_hello() {
//     console.log("Hello!");
// }

// const timeout = setTimeout(say_hello, 3000);

// setTimeout(() => {
//     console.log("Hello2")
// }, 5000);


// clearTimeout(timeout);
// 取消timeout

let timeoutId;

function start_timer() {
    timeoutId = setTimeout(() => {
        window.alert('Hello!')
    }, 3000);
    console.log("Starter")
};

function cleartimer() {
    clearTimeout(timeoutId);
    console.log("Stoper")

}