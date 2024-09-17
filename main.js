"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// MAKING A FUNCTION
function make_shirt(size = "LARGE", printMessage = "IN LOVE WITH TYPESCRIPT") {
    console.log(`CREATING A ${size} SHIRT WITH THE ${printMessage} PRINTS ON It!`);
}
//CALLING A FUNCTION WITH BY-DEFAULT VALUES
make_shirt();
//NOW CALLING A FUNCTION WITH MEDIUM SIZE AND DEFAULT MESSAGE
make_shirt("MEDIUM");
//NOW CALLING A FUNCTION WITH SMALL SIZE AND ALSO PRINTING DIFFERENT MESSAGE
make_shirt("SMALL", "I LOVE JAVASCRIPT:)");
