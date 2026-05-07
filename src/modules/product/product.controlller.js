const productService = require('./product.service');

const getAllProducts = async (req, res) => {
  try {
    const products = await productService.getProducts(req.query);
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};
module.exports = {
  getAllProducts
}