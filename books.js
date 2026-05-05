const express = require("express");
const router = express.Router();
const Book = require("../models/Book");

// GET all
router.get("/", async (req, res) => {
    const books = await Book.find();
    res.json(books);
});

// POST
router.post("/", async (req, res) => {
    try {
        const book = new Book(req.body);
        await book.save();
        res.json(book);
    } catch (err) {
        res.status(400).json(err);
    }
});

// GET one
router.get("/:id", async (req, res) => {
    const book = await Book.findById(req.params.id);
    res.json(book);
});

// PUT
router.put("/:id", async (req, res) => {
    const updated = await Book.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.json(updated);
});

// DELETE
router.delete("/:id", async (req, res) => {
    await Book.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
});

module.exports = router;