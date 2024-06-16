
//應該避免以下這種情況
function task1(callback) {
    setTimeout(() => {
        console.log("test 1 has complete");
        callback();
    }, 2000)

}
function task2(callback) {
    setTimeout(() => {
        console.log("test 2 has complete");
        callback();
    }, 1000)
}
function task3(callback) {
    setTimeout(() => {
        console.log("test 3 has complete");
        callback();
    }, 3000)
}
function task4(callback) {
    setTimeout(() => {
        console.log("test 4 has complete");
        callback();
    }, 1500)
}

task1(() => {
    task2(() => {
        task3(() => {
            task4(() => {
                console.log("All done!")
            });
        })
    })
});

