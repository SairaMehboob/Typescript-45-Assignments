"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let userNames = ["MARIA", "ADEEBA", "ADMIN", "SADIA", "NAZIA"];
if (userNames.length === 0) {
    console.log("YOUR ARRAY IS EMPTY! WE NEED TO FIND SOME USERS.");
}
else {
    userNames.forEach(oneUser => {
        if (oneUser === "ADMIN") {
            console.log(`HELLO! ${oneUser}, WOULD YOU LIKE TO SEE THE STATUS REPORT?`);
        }
        else {
            console.log(`HELLO! ${oneUser},THANKYOU FOR LOGGING IN AGAIN.`);
        }
    });
}
