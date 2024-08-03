"use strict";
{
    // spread operator
    //   rest operator
    //   -------------------------------------------------------
    // spread operator ------->
    const bors1 = ["a", "b", "c", "d", "e"];
    const bors2 = ["f", "g", "h", "i", "j"];
    bors1.push(...bors2);
    const mentor1 = {
        html: "a",
        css: "b",
        js: "c",
    };
    const mentor2 = {
        react: "d",
        Next: "e",
        ts: "f",
    };
    const mentorList = Object.assign(Object.assign({}, mentor1), mentor2);
    //   rest operator ------->
    //   wrong--->
    //   const greetFriends = (
    //     friend1: string,
    //     friend2: string,
    //     friend3: string,
    //     friend4: string
    //   ) => {
    //     console.log(`hi ${friend1}, ${friend2}, ${friend3}, ${friend4}`);
    //   };
    //   greetFriends("a", "b", "c", "d");
    //   right--->
    const greetFriends = (...friends) => {
        friends.forEach((friend) => console.log(friend));
    };
    greetFriends("a", "b", "c", "d", "e", "f");
}
