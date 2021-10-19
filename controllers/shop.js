const product = require("../models/product");
const axios = require("axios");

exports.getHome = (req, res, next) => {
  const config = {
    url: "https://fakestoreapi.com/products",
  };

  axios(config)
    .then((result) =>
      res.render("home", {
        products: result.data,
      })
    )
    .catch((err) => console.log(err));
};
