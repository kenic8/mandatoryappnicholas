import express from "express";
import bcrypt from "bcryptjs";
import User from "../models/user.js";
import jwt from "jsonwebtoken"

const userRoutes = express.Router();

//get all users
userRoutes.post("/", async (req, res) => {
  //Find user in users 
  console.log(req.body.email)
  const user = await User.findOne({ email: req.body.email });
  
  if (!user) {
    return res.status(404).send("Email does not exist");
  
    //passwordcheck
  // if (bcrypt.compareSync(password, user.hash)) {
  //   const payload = { username: username };
   //   const token = jwt.sign(payload, secret, { algorithm: 'HS512', expiresIn: '1h' });
  }
  ///JWT
  const token = jwt.sign(
    {
      _id: user._id,
    },
    process.env.TOKEN_S
  );

  res.json({
    user:user,
    token:token
  });
});



///post to users create user
userRoutes.post("/register", async (req, res) => {
  //hash

  const salt = await bcrypt.genSalt(12);
  const hashpswrd = await bcrypt.hash(req.body.password, salt);

  try {
  
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashpswrd,
    });

    const createdUser = await user.save();

    res.status(201);
    //fetch newest
    //const products = await User.find({}).sort({ date: "desc" });
    res.json(createdUser);
  } catch (error) {
    res.status(500);
    res.json({
      error: "wish could not be created",
      details: error.toString(),
    });
  }
});

///find all related data to user with id
userRoutes.post("/:id", async (req, res) => {
  try {
    console.log("inpost");
    const filter = { _id: req.params.id };
    const update = {
      $push: {
        comments: {
          content: req.body.content,
          time: req.body.time,
          commentId: req.body.commentId,
        },
      },
    };
    console.log(req.body);
    let doc = await User.findOneAndUpdate(filter, update, {
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

export default userRoutes;
