const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(express.json());
app.use(cors());

// Serve frontend
app.use(express.static(path.join(__dirname, "public")));

// Routes
const bookRoutes = require("./routes/books");
app.use("/api/books", bookRoutes);

// DB connect
mongoose.connect("mongodb://127.0.0.1:27017/bookDB")
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

// Start server
app.listen(3000, () => console.log("Server running on port 3000"));