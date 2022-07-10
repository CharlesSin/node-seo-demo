const express = require("express");
const router = express.Router();

const bookmarkJson = require("../mock/bookmarks.json");

/* GET Category page. */
router.get("/", (req, res, next) => {
  let bookmark = [];

  for (const [key, value] of Object.entries(bookmarkJson)) {
    for (const [keys, values] of Object.entries(value)) {
      bookmark.push(values.data);
    }
  }

  res.render("category", { bookmarks: bookmark });
});

module.exports = router;
