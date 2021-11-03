import mongoose from "mongoose";

const quoteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
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
