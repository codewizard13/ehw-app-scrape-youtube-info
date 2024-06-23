// scrape-playlist.js | Eric Hepperle

/* PASTE this into developer console on a video page and run */
console.clear();

// get vid list item group
let sel__vidList = 'ytd-playlist-video-renderer'
let sel__title = '#video-title'

let vidList = document.querySelectorAll(sel__vidList)

console.log(`Vid List Count: ${vidList.length}`)

// Loop over each video list item
vidList.forEach( (el, i) => {

  // Get this vid title
  let title = el.querySelector(sel__title).innerText
  console.log(title)

})