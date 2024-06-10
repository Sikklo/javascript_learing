const card = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
shuffle(card);
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const random = Math.floor(Math.random() * (i + 1));
        [array[i], array[random]] = [array[random], array[i]];
    }
};
console.log(card);

// 一個function叫做shuffle 需要輸入一個陣列當參數
// 之後使用for loop來當作需要洗13次 (12到0) 然後設定一個const叫做random 第一步會是12 因為i是從12開始 所以這裡random出來的東西應該會介於1到12 之後把他們數值調換 調換的過程為 array[12]和array[random]調換 所以在card[12]這裡的數字會被替換成一個隨機的卡號 再來就回去從11~0開始 然後因為i--所以剛剛原本已經被替換過的card[12]就不會被動到 