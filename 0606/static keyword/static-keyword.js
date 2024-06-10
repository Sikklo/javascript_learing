// class Mathutil {
//     static getDiameter(radius) {
//         return radius * 2;
//     }
// }

// console.log(Mathutil.getDiameter(10));

class User {
    static user_count = 0;

    constructor(username) {
        this.username = username;
        User.user_count++;
    }
}


const user01 = new User("John");
console.log(User.user_count);