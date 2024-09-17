"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//CREATING AN ARRAY
let userNames = ["MARIA", "ADEEBA", "ADMIN", "SADIA", "NAZIA"];
//USING FOREACH LOOP IN THE ARRAY
userNames.forEach(oneUser => {
    if (oneUser === "ADMIN") {
        console.log("HELLO! ${oneUser}, WOULD YOU LIKE TO SEE THE STATUS REPORT?");
    }
    else {
        console.log("HELLO! ${oneUser},THANKYOU FOR LOGGING IN AGAIN.");
    }
});
