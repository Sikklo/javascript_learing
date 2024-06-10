// function outter() {
//     let message = "Hello";

//     function inner() {
//         console.log(message);
//     }

//     inner();
// }

// outter();


// function increment() {
//     let count = 0;
//     count++;
//     console.log(`${count}`);
// }

// increment();
// increment();

// 我們想讓每叫一次function 它就會+1
// 但是現在就算呼叫了兩次 count也不會變成2
// 因為我們在第二次呼叫的時候 count又會從0開始
// 當然 我們可以把let count 放在function外面
// 但是 這樣可能會被別人不小心改到 萬一後來又有人在前面加上了 let count = 50呢? 這樣就不會是我們想要的了
// 這時候就需要使用closure這種方式了 也會比較好維護 以及保有它的私有狀態

function counter() {
    let count = 0;
    function increment() {
        count++;
        console.log(`${count}`);
    }
    function decresment() {
        count--;
        console.log(`${count}`);
    }
    function get_count() {
        return count;
    }
    return { increment, get_count, decresment };
}
// 這很像是我們創造一個class
// const count_v1 = counter();
// count_v1.increment();
// count_v1.increment();
// count_v1.increment();
// count_v1.increment();
// count_v1.decresment();
// console.log(`目前的count為：${count_v1.get_count()}`);

function counting_score() {
    let score = 0;
    function incres_score(points) {
        score += points;
        console.log(`+${points}pts!`)
    }
    function decrease_score(points) {
        score -= points;
        console.log(`-${points}pts!`)
    }
    function get_score() {
        return console.log(`The score is now : ${score}`);
    }
    return { incres_score, decrease_score, get_score };
};

const score_count01 = counting_score();
score_count01.incres_score(100);
score_count01.decrease_score(50);
score_count01.get_score(); 