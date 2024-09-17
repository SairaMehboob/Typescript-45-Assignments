"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//DEFINING A FUNCTION TO PRINT EACH MAGICIAN'S NAME
function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
//DEFINING AN ARRAY CONTAINING MAGICIANS NAME
function make_great(magicians) {
    return magicians.map(name => `THE GREAT ${name} `);
}
let magician_names = ["HARRY POTTER", "DAVID", "HARRY HOUDINI", "DOUG HENNING"];
let greatMagicians = make_great(magician_names);
show_magicians(greatMagicians);
