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
//DEFINING AN AARAY OF MAGICIANS NAMES
let magician_names = ["HARRY POTTER", "DAVID", "HARRY HOUDINI", "DOUG HENNING"];
//MAKING COPY OF ORIGINAL ARRAY THROUGH SLICE FUNCTION
let copy_magician_names = magician_names.slice();
//MODIFYING BY ADDIND WORD"THE GREAT"WITH THE NAMES IN ARRAY
let copy_great_magicians = make_great(copy_magician_names);
//SHOWING BOTH ORIGINAL AND COPIED ARRAYS
//ORIGINAL:-
show_magicians(magician_names);
//COPIED:-
show_magicians(copy_great_magicians);
