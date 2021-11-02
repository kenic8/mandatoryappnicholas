import express from "express";
import Quote from "../models/quote.js";

const quoteRoutes = express.Router();

quoteRoutes.get("/", async (req, res) => {
  const quotes = await Quote.find();
  res.json(quotes);
  console.log(res);
  console.log("hej")
});

////update record with request body from fetch --> 
quoteRoutes.post("/", async (req, res) => {
  try {
    const quote = await Quote.create(req.body);
    res.status(201);
    res.json(quote);
  } catch (error) {
    res.status(500);
    res.json({
      error: "Recipe could not be created",
      details: error.toString(),
    });
  }
});


// quoteRoutes.get("/:id", async (req, res) => {
//   try {
//     const quote = await Quote.findById(req.params.id);
//     if (quote) {
//       res.json(quote);
//     } else {
//       res.status(404);
//       res.json({ error: "quote not found" });
//     }
//   } catch (error) {
//     res.status(500);
//     res.json({ error: "Something went wrong", details: error.toString() });
//   }
// });



quoteRoutes.post("/:id", async (req, res) => {
  try {
    console.log("inpost");
    const filter = { _id: req.body._id };
    const update = { $push: { comments: req.body } };
    console.log(req.body);
    let doc = await Quote.findOneAndUpdate(filter, update, {
      new: true,
    });
    res.json(doc);
  } catch (error) {
    res.status(500);
    res.json({ error: "Something went wrong", details: error.toString() });
    console.log(error);
  }
});


export default quoteRoutes;
