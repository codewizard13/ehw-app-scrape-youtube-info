// app.js | Eric Hepperle

/* PASTE this into developer console on a video page and run */
console.clear();

let vid_title = document.querySelector('#container > h1 > yt-formatted-string').innerText
let channel_name = document.querySelector('#text a.yt-simple-endpoint.style-scope.yt-formatted-string').innerText;
let channel_url = document.querySelector('#text a.yt-simple-endpoint.style-scope.yt-formatted-string').href;

let vid_full_url = document.URL;

let vid_base_url = vid_full_url.split("&")[0];

let avatar_pic = document.querySelectorAll('#avatar img')[0].src;



var out = "";
out += "Tutorial Info:\n";
out += "- Title: " + vid_title + "\n";
out += "- Full URL: " + vid_full_url + "\n";
out += "- Base URL: " + vid_base_url + "\n";
out += "- Channel: " + channel_name + "\n";

out += "- Channel URL: " + channel_url + "\n";
out += "- Avatar URL: " + avatar_pic + "\n";

console.log(out);