import express from "express";
import Product from "../models/Product.js";
import jwt from "jsonwebtoken";
import Validation from "./validation.js"
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
///check if token is send with 
const token = req.headers.authorization
  if (!token) {
    return res.status(400).send('login to gain acesss')
}
  
  try {
    const verify = jwt.verify(token,process.env.TOKEN_S)
    console.log(verify)

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
    res.json({ doc: doc, user: verify });

  } catch (error) {
    res.status(500);
    res.json({ error: "login to comment", details: error.toString() });
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

productRoutes.post("/remove/:id", async (req, res) => {
  let doc = Product.findByIdAndDelete(req.body._id, function (err) {
    try {
      res.status(200).json(doc);
    } catch (error) {
      res
        .status(500)
        .json({ error: "There was a Server Side Error!", detail: err });
    }
  });

});



export default productRoutes;
