"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//MAKING ARRAY OF CURRENT USERS
let current_Users = ["SOHA", "MARIAM", "MUNAZZA", "FARWAH", "MARAL"];
//MAKING ARRAY OF NEW USERS
let new_Users = ["IFRA", "IMAMA", "MALIHA", "ROHA", "MAHAM"];
//LOOP TROUG NEW_USERS TO CHECK FOR USERNAMES AVAILABILITY
new_Users.forEach(new_One_User => {
    let our_Condition = current_Users.some(current_One_User => current_One_User.toLowerCase() === new_One_User.toLowerCase());
    if (our_Condition) {
        console.log(`SORRY! ${new_One_User}IS ALREADY TAKEN!`);
    }
    else {
        console.log(`THe USERNAME ${new_One_User} IS AVAILABLE`);
    }
});
