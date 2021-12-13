import express from "express";
import Product from "../models/Product.js";

const productRoutes = express.Router();

productRoutes.get("/", async (req, res) => {
  const products =  await Product.find({}).sort({date: 'desc'});
  res.json(products);

});


productRoutes.post("/", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201);
    //fetch newest
    const products =  await Product.find({}).sort({date: 'desc'});
    res.json(products);
  } catch (error) {
    res.status(500);
    res.json({
      error: "wish could not be created",
      details: error.toString(),
    });
  }
});

productRoutes.post("/:id", async (req, res) => {
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
    let doc = await Product.findOneAndUpdate(filter, update, {
      new: true,
    });
   // const products =  await Product.find({}).sort({date: 'desc'});
    res.json(doc);

  } catch (error) {
    res.status(500);
    res.json({ error: "Something went wrong", details: error.toString() });
    console.log(error);
  }
});



productRoutes.post("/like/:id", async (req, res) => {
  try {
    console.log("inpost");
    const filter = { _id: req.body._id };
    const update = { likes: req.body.likes };
    let doc = await Product.findOneAndUpdate(filter, update, {
      new: true,
    });
    //const products =  await Product.find({}).sort({date: 'desc'});
    res.json(doc);
  } catch (error) {
    res.status(500);
    res.json({ error: "Something went wrong", details: error.toString() });
    console.log(error);
  }
});


export default productRoutes;
