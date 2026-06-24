PERFORMANCE GALLERY — how to use
=================================

1. ADD YOUR PHOTOS
   Drop your edited images into the "photos" folder.
   (.jpg, .jpeg, .png, .webp, .avif, .gif all work)

2. REBUILD THE LIST
   Open this folder in a terminal and run:
       node build.mjs
   This scans the photos folder and updates the gallery.
   Run it again any time you add or remove photos.

3. VIEW IT
   Double-click index.html to open it in your browser.

------------------------------------------------------------

CHANGE THE TITLE / TEXT
   Open index.html and edit the block near the top marked
   "EDIT YOUR TITLE / TEXT HERE" (title, subtitle, intro, footer).

ADD CAPTIONS (optional)
   Open captions.json — it lists every photo filename.
   Type a caption next to any file, e.g.:
       "finale-bow.jpg": "The final bow"
   Then run "node build.mjs" again. Captions are never erased on rebuild.

TIP FOR 60+ PHOTOS
   Export your edits at a reasonable size (long edge ~2000px is plenty
   for screens) so the gallery loads fast for parents on phones.

SHARING IT
   To send to parents, the easiest free option is to drag this whole
   folder into a host like Netlify Drop (app.netlify.com/drop) or
   GitHub Pages — that gives you a link anyone can open. Ask me and
   I'll walk you through it.
