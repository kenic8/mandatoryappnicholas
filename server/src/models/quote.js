import mongoose from "mongoose";

const quoteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
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

const Quote = mongoose.model("Quote", quoteSchema);

export default Quote;
