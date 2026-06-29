BERWIN · ALBUM — how to use
============================

This is a personal photo-album website: a cycling featured hero on the
home page, then a grid of albums you can click into. Each album is just
a folder of photos.

1. MAKE AN ALBUM
   Inside the "photos" folder, make a sub-folder named after the album
   and drop your images in. Examples:
       photos/performance/finale.jpg
       photos/iceland/sunrise.jpg
       photos/soccer-game/goal.jpg
   (.jpg, .jpeg, .png, .webp, .avif, .gif all work)
   The folder name becomes the album title — "iceland-2025" shows as
   "Iceland 2025". Loose photos dropped straight in "photos" (no
   sub-folder) collect into a "Moments" album.

2. REBUILD
   Open this folder in a terminal and run:
       node build.mjs
   This scans every album folder and updates the site (albums.js).
   Run it again any time you add or remove photos.

3. VIEW IT
   Double-click index.html to open it in your browser.

------------------------------------------------------------

NAME ALBUMS / ADD DESCRIPTIONS / CHOOSE A COVER
   Open albums.json. Each album folder gets an entry, e.g.:
       "iceland-2025": {
         "title": "Iceland, 2025",
         "desc":  "Two weeks chasing waterfalls and light.",
         "cover": "sunrise.jpg",        // a filename inside the album
         "order": 2                      // lower numbers show first
       }
   Then run "node build.mjs" again. Your labels are never erased on rebuild.

CHANGE THE SITE NAME / TAGLINE
   Open index.html and edit the block near the top marked
   "EDIT YOUR SITE TEXT HERE" (name, eyebrow, tagline, footer).

ADD PER-PHOTO CAPTIONS (optional)
   Open captions.json — it lists every photo by its path, e.g.:
       "performance/finale.jpg": "The final bow"
   Then run "node build.mjs" again. Captions survive rebuilds.

PUBLISH FROM THE BROWSER (no terminal)
   Open upload.html. Paste your GitHub key once, type an album name,
   drop photos in, press Publish. It optimizes the images, uploads them
   into photos/<album>/, regenerates albums.js, and the live site
   updates on its own in about a minute.

THE FEATURED HERO
   The big cycling images on the home page are pulled at random from
   across every album — no setup needed. The more albums you add, the
   richer it gets.
