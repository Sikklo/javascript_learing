function walkDog() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogWalked = false;
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


async function doChores() {
    try {
        const walkDogResult = await walkDog();
        console.log(walkDogResult);

        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);

        const takeOutTrashResult = await takeOutTrash();
        console.log(takeOutTrashResult);
        console.log("All done!")
    }
    catch (error) {
        console.error(error);

    }

}

doChores()