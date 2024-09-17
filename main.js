"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//MAKING A FUNCTION
function describe_city(city, country = "PAKISTAN") {
    console.log(`${city} IS IN ${country}.`);
}
//CALLING THE FUNCTION
describe_city("KARACHI");
describe_city("LAHORE");
describe_city("BERLIN", "GERMANY");
