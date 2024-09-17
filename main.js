"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function make_album(artist_name, album_title, tracks) {
    let album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks != undefined) {
        album.tracks = tracks;
    }
    return album;
}
//CALLING THREE FUNCTIONS WITH DIFFERENT VALUES
let album1 = make_album("SAIRA", "Album title 1");
let album2 = make_album("SAWAIRA", "Album title 2");
let album3 = make_album("AZRA", "Album title 3", 10);
//PRINTING VALUES OF OUR OBJECT CREATED MY FUNCTION
console.log(album1);
console.log(album2);
console.log(album3);
