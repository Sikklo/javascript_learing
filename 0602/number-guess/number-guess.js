const min_num = 1;
const max_num = 100;
const bingo = Math.floor(Math.random() * (max_num - min_num + 1) + min_num);

let attempt = 0;
let guess;
let running = true;
while (running) {
    guess = window.prompt(`guess a number between ${min_num} to ${max_num}.`);
    guess = Number(guess);

    if (isNaN(guess)) {
        window.alert("plz enter a valid Number!")
    }
    else if (guess < min_num || guess > max_num) {
        window.alert(`plz enter a number between ${min_num} to ${max_num}`);
    }
    else {
        attempt++;
        if (guess < bingo) {
            window.alert("Too low!");
        }
        else if (guess > bingo) {
            window.alert("Too high!");
        }
        else {
            window.alert(`You win! the bingo is ${bingo} you took ${attempt} times.`);
            running = false;
        }
    }

}