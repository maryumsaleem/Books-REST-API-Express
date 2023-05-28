const Book = require("../models/index.js");

const get_books = async (req, res) => {
  const books = await Book.find();
  try {
    res.status(200).json({
      status: "success",
      data: books,
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err,
    });
  }
};

const add_book = async (req, res) => {
  const data = {
    title: req.body.title,
    pageCount: req.body.pageCount,
    author: req.body.author,
  };

  try {
    //Database POST Project
    const book = await Book.create(data);
    res.status(201).json({
      status: "success",
      data: book,
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err,
    });
  }
};

const single_book = async (req, res) => {
  const id = req.params.id;
  const book = await Book.findById(id).select("-__v");
  try {
    res.status(201).json({
      status: "success",
      data: book,
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err,
    });
  }
};

const update_book = async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  const book = await Book.findByIdAndUpdate(id, data, { new: true });
  try {
    res.status(201).json({
      status: "success",
      data: book,
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err,
    });
  }
};
const delete_book = async (req, res) => {
  const id = req.params.id;
  const book = await Book.findByIdAndDelete(id);
  try {
    res.status(201).json({
      status: "success",
      data: null
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err,
    });
  }
};
module.exports = { get_books, add_book, single_book, update_book,delete_book };
