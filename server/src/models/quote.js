import mongoose from "mongoose";

const quoteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  comments: [
    {
      time: {
        type: String,
      },
      commentId:String,
      content: { type: String },
    },
  ],
  likes: {
    default: 0,
  },
});

const Quote = mongoose.model("Quote", quoteSchema);

export default Quote;
