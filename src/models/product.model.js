const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  title: String,
  description: String,
  categorie: String,
  img: String,
  video:String,
  iswich:{ 
    type:Boolean,
     default:false

  },
 
  
});

module.exports = mongoose.model('Product', productSchema);
