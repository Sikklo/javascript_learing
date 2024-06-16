function walkDog() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogWalked = true;
            if (dogWalked) {
                resolve("You walk the dog!");
            }
            else {
                reject("You didn't walk the dog!")
            }

        }, 1500);
    });
}
function cleanKitchen() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const kitchenCleaned = true;
            if (kitchenCleaned) {
                resolve("You cleaned the kitchen!");
            }
            else {
                reject("You didn't clean the kitchen!")
            }

        }, 2500);
    })

}
function takeOutTrash() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const trashTakeOuted = true;
            if (trashTakeOuted) {
                resolve("You take out the trash!");
            }
            else {
                reject("You didn't take out the trash you domb ass!")
            }
        }, 500);
    }
    )

}
walkDog().then(value => { console.log(value); return cleanKitchen() })
    .then(value => { console.log(value); return takeOutTrash() })
    .then(value => { console.log(value); console.log("all done!") })
    .catch(error => { console.error(error) });


// walkDog(() => {
//     cleanKitchen(() => {
//         takeOutTrash(() => {
//             console.log("All done!");
//         })
//     })
// })