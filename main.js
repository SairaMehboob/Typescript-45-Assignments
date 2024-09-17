"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//DEFINING A FUNCTION TO PRINT EACH MAGICIAN'S NAME
function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
//DEFINING AN ARRAY CONTAINING MAGICIANS NAME
let magician_names = ["HARRY POTTER", "DAVID", "HARRY HOUDINI", "DOUG HENNING"];
//CALLING THE FUNCTION TO PINT EACH MAGICIAN'S NAME
show_magicians(magician_names);
