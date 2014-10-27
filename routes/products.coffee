Post = require '../models/products'
express = require 'express'
router = express.Router()

router.route '/products'
  .get (req, res) ->
    

router.route '/products:id'
  .get (req, res) ->
    
module.exports = router