const express = require("express");
const router = express.Router();
const {
  get_books,
  add_book,
  single_book,
  update_book,
  delete_book,
} = require("../controllers/index.js");

router.get("/", get_books);
router.post("/", add_book);
router.get("/:id", single_book);
router.patch("/:id", update_book);
router.delete("/:id", delete_book);

module.exports = router;
