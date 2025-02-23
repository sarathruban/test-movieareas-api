import express from "express";

// const express = require('express');

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.json({
    msg: "Hello World!",
  });
});

//CRUD functionality of movies

//GET
app.get("/movies", (req, res) => {
    
});

//POST

app.post("/movies", (req, res) => {});

//PUT

app.put("/movies/:id", (req, res) => {});

//DELETE

app.delete("/movies/:id", (req, res) => {});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
