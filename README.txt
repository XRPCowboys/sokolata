SOKOLATA WEBSITE — how this folder works
=========================================

WHAT'S IN HERE
--------------
- index.html ........ the homepage. This is the page people see.
- slice-menu.js ..... the menu + business info (prices, items, photos list).
                      Edit this ONE file to change prices, add/remove items,
                      or point an item at a photo.
- *.jpg / *.png ..... the food photos. Each is named after its dish.

IMPORTANT: keep every file in this folder TOGETHER. index.html looks for
slice-menu.js and the photos right next to it. If you open index.html alone,
the pictures won't show.

ORDERING = SLICE (unchanged)
----------------------------
Every "Order online" button and every menu item links straight into the
owner's live Slice ordering + payment system at sokolatawv.com. We did NOT
rebuild ordering. Photos are just for looks — ordering works with or without
a photo on an item.

HOW TO ADD A PHOTO TO A DISH
----------------------------
1. Put the photo .jpg in this folder. Name it after the dish, e.g.
   "veggie-pita.jpg".
2. Open slice-menu.js, find that dish's line, and add:  img: "veggie-pita.jpg",
   right before the  url:  part. Example:
   { name: "Veggie Pita", desc: "...", price: 8.95, img: "veggie-pita.jpg", url: S(...) },
3. Save. Done.

HOW TO REMOVE A PHOTO
---------------------
Delete the  img: "...",  part from that dish's line in slice-menu.js.
(You can also delete the .jpg file itself.)

PUBLISHING TO GODADDY (mysokolata.com)
--------------------------------------
1. Log in to GoDaddy -> myh.godaddy.com -> Web Hosting Deluxe -> Manage ->
   cPanel Admin -> File Manager.
2. Open the  public_html  folder.
3. (First time) remove the old WordPress demo files that are in there.
4. Upload EVERYTHING from this folder into public_html
   (index.html + slice-menu.js + all the photos).
5. Visit mysokolata.com — the new site shows.

To update later: just upload the changed file(s) again, overwriting the old.
