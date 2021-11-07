import express from "express";
import Quote from "../models/quote.js";

const quoteRoutes = express.Router();

quoteRoutes.get("/", async (req, res) => {
  const quotes =  await Quote.find({}).sort({date: 'desc'});
  res.json(quotes);

});


quoteRoutes.post("/", async (req, res) => {
  try {
    const quote = await Quote.create(req.body);
    res.status(201);
    //fetch newest
    const quotes =  await Quote.find({}).sort({date: 'desc'});
    res.json(quotes);
  } catch (error) {
    res.status(500);
    res.json({
      error: "Recipe could not be created",
      details: error.toString(),
    });
  }
});

quoteRoutes.post("/:id", async (req, res) => {
  try {
    console.log("inpost");
    const filter = { _id: req.params.id };
    const update = {
      $push: {
        comments: {
          content: req.body.content,
          time: req.body.time,
          commentId: req.body.commentId,
        }
      },
    };
    console.log(req.body);
    let doc = await Quote.findOneAndUpdate(filter, update, {
      new: true,
    });
    const quotes =  await Quote.find({}).sort({date: 'desc'});
    res.json(quotes);
  } catch (error) {
    res.status(500);
    res.json({ error: "Something went wrong", details: error.toString() });
    console.log(error);
  }
});



quoteRoutes.post("/like/:id", async (req, res) => {
  try {
    console.log("inpost");
    const filter = { _id: req.body._id };
    const update = { likes: req.body.likes };
    let doc = await Quote.findOneAndUpdate(filter, update, {
      new: true,
    });
    const quotes =  await Quote.find({}).sort({date: 'desc'});
    res.json(quotes);
  } catch (error) {
    res.status(500);
    res.json({ error: "Something went wrong", details: error.toString() });
    console.log(error);
  }
});


export default quoteRoutes;
