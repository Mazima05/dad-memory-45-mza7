DAD'S 45TH BIRTHDAY MEMORY WEBSITE
====================================

HOW TO OPEN IT
1. Unzip the folder.
2. Double-click index.html.
3. It works locally in a normal browser.

WHAT TO REPLACE
- Main photo:
  Replace assets/dad-placeholder.svg with your dad's real photo.
  Keep the filename the same, or update the path in index.html.

- Written-message photos:
  grandpa-memory.svg = Grandpa's written page
  noor-alhuda-memory.svg = Noor Alhuda's written page

- Memory photos:
  memory-1 = Fatin
  memory-2 = Maryam
  memory-3 = Mohammed Almahdi
  memory-4 = Aman
  memory-5 = Yaman
  Replace the SVG placeholders with real JPG/PNG photos and update the filenames in script.js if necessary.

- Written memories:
  Open script.js and edit the text inside the "pages" array.
  Each memory has a title, paragraph, and signature.

HOW TO ADD A REAL VOICE MESSAGE
1. Add Grandma's MP3 file to the assets folder, for example:
   assets/grandma-message.mp3

2. In script.js, find the section:
   if (page.type === "audio")

3. Replace the placeholder button block with:
   <audio controls preload="metadata">
     <source src="assets/grandma-message.mp3" type="audio/mpeg">
     Your browser does not support audio playback.
   </audio>

BEST AUDIO LENGTH
20–60 seconds is ideal. MP3 is the easiest format for browsers.

NEXT DESIGN STEP
Replace the placeholders with:
- Dad's main portrait
- Five family photographs
- Real written memories
- Grandma's short voice recording
