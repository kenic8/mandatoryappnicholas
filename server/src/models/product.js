import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  link: {
    type: String,
  },
  ///jwt auth user id key for lookup
  creatorKey:{
    type:String
  },
  date: { type: Date, default: Date.now },
  description: {
    type: String,
    maxLength: 300,
    required: true,
    
  },

  likes: { type: String, default: "0" },

  comments: [
    {
      time: {
        type: String,
      },
      commentId: String,
      content: { type: String },
    },
  ],
});

const Product = mongoose.model("Products", productSchema);

export default Product;