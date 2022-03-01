const Product = require("../models/product.model");



exports.getProduct = (req, res) => {
 
    Product.find()
      .then(result => {
          res.send(result.length > 0 ? result : []);
      })
      .catch(err => {
          console.log(err);
          res.status(404).send(error);
      })


  };

  exports.insertProduct = (req, res) => {

    const product = new Product({
        title: req.body.title,
        description: req.body.description,
        categorie: req.body.categorie,
        img: req.body.img,
        vedio:req.body.vedio,
        iswish:req.body.iswish

    })
    product.save().then((data) => {
        res.status(200).send();
        console.log(' nouveau movie', data)
    }).catch((error) => {
        res.status(400).send(error);
    })
  }