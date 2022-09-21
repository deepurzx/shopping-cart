var express = require('express');
const { ObjectId } = require('mongodb');
const multer = require('multer');

const productHelpers = require('../helpers/product-helpers');
var router = express.Router();
var productHelper=require('../helpers/product-helpers');
/* GET users listing. */
router.get('/', function(req, res, next) {
  productHelpers.getAllProducts().then((products)=>{
    console.log(products)
    res.render('admin/view-products',{admin:true,products});
  })
  


});
 router.get('/add-product',function(req,res){

res.render('admin/add-product')



 })
 const path = require('path')
 router.post('/add-product',(req,res)=>{
  
  productHelpers.addProduct(req.body,(id)=>{
    
    let image= req.files.image;
    //let _id= req.image._id
    let filname = Date.now()+'-'+image.name;
    let newpath = path.join(process.cwd(),'public/product-images',filname)
console.log(req.files)
    //let product_id= image.name
   image.mv(newpath,(err,done)=>{
      if(!err){
        res.render("admin/add-product",{admin:true,products})
      }else{
        console.log(err)
      }
  })
    
  })
 })

module.exports = router;
