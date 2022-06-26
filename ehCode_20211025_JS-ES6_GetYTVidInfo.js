/*
Program Name:   YouTube Information Grabber (Vanilla JS)
File Name:      ehCode_2018.06.13_JavaScriptES6_GetYouTubeInfo_01.js
Date Created:   06/13/18
Date Modified:  10/25/21
Version:        2.0
Programmer:     Eric Hepperle

Purpose: Grabs (scrapes) and prints to console title, url, and channel name
    using vanilla JavaScript ES6.
    
    This is useful for quickly grabbing enough information to make a link
    to a YouTube video and/or channel.

Usage: Cut and paste into developer console window (F12) of a YouTube
    video post. Vertical newline-separated list of data will output
    to console.

Sample results: 

    Tutorial Info:
    - Title: How to Create Photo Gallery Grid with Modal Window Lightbox
    - URL: https://www.youtube.com/watch?v=IPVQeVlw2_E
    - Channel: LearnWebCode

Requires:
	* Browser opened to a YouTube video.
    
Demonstrates:
    * Vanilla JavaScript
    * JavaScript ES6

*/

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

/*

NOTES:

    10/25/21 - Doesn't work. YouTube or browser (Chrome) must have changed something.
               Will need to troubleshoot.
               
             - Versioned to 2.0. Began troubleshooting.
    
    06/13/18 - Created file from scratch.
			 - WORKS! :)

*/