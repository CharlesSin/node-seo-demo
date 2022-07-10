const express = require("express");
const router = express.Router();

const bookmarkJson = require("../mock/bookmarks.json");

/* GET Category page. */
router.get("/", (req, res, next) => {
  let bookmark = [];

  for (const [key, value] of Object.entries(bookmarkJson)) {
    for (const [keys, values] of Object.entries(value)) {
      values.data.linkTitle && values.data.linkTitle != "Facebook"
        ? bookmark.push(values.data)
        : null;
    }
  }

  // Random get 10 article posts for render.
  bookmark = bookmark.sort(() => Math.random() - Math.random()).slice(0, 12);

  res.render("category", { bookmarks: bookmark });
});

module.exports = router;
