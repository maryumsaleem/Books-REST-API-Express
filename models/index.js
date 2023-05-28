const mongoose = require("mongoose");
const bookSchema = mongoose.Schema({
  title:{
    type:String,
    required:true
  },
  pageCount:{
    type:Number,
    required:true
  },
//   date:{
//     type:Date,
//     default:Date.now
//   },
  author:{
    type:String,
    required:true
  },
});

const Book=mongoose.model('Book',bookSchema);
module.exports=Book;