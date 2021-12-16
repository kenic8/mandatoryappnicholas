import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  
  title: {
    type: String,
    required: true,
  },
  owner:{
    type:String
  },
  link: {
    type: String,
  },
  date: { type: Date, default: Date.now },
  description: {
    type: String,
    maxLength: 300,
    required: true,
    
  },

  likes: { type: String, default: "0" },
  received: { type: Boolean,default:false },

  comments: [
    {
      name:{
        type:String
      },
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
