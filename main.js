"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//DEFINING A FUNCTION WITH A REST PARAMETER THATR ACCEPTS BOTH ITEMS AND ARGUMENTS
function makeSandwich(...items) {
    console.log("MAKING A SANDWICH WITH THE FOLLOWING ITEMS:\n");
    items.forEach(singleItem => console.log(singleItem));
    console.log("\n NOW ENJOY YOUR SANDWICH.");
}
//CALLING THE FUNCTION WITH THREE DIFFERENT NUMBER OF ARGUMENTS
makeSandwich("CHICKEN", "CHEESE", "MAYO", "EGG");
makeSandwich("BREAD", "BUTTER");
makeSandwich("BREAD", "BUTTER", "EGG", "MAYO", "LETTUCE", "CHEESE", "CHICKEN", "TOMATO");
