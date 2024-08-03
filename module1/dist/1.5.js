"use strict";
{
    // destructuring ------>
    // object --->
    const users = {
        id: 545,
        name: {
            firstName: "a",
            middleName: "b",
            lestName: "c",
        },
        contactNo: "01700000000",
        address: "bangladesh",
    };
    //     wrong
    //     const {
    //       id: string,
    //       name: { firstName: string, lestName: string },
    //       address: string,
    //     } = users;
    //     right
    const { id, name: { firstName: name, lestName }, address, } = users;
    //   Array --->
    const myFriends = ["a", "b", "c", "d", "e", "f"];
    const [, , bestFriends, ...rest] = myFriends;
}
