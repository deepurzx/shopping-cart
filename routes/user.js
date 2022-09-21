const { response } = require('express');
var express = require('express');
var router = express.Router();
var productHelpers=require('../helpers/product-helpers');
const userhelper=require('../helpers/user-helpers')
/* GET home page. */
router.get('/', function(req, res, next) {
  


  productHelpers.getAllProducts().then((products)=>{
    //console.log(products)
    res.render('user/view-products',{admin:false,products});
  })
});
router.get('/login',(req,res)=>{
  res.render('user/login')
});
router.get('/signup',(req,res)=>{
  res.render('user/signup')
});
router.post('/signup',(req,res)=>{
userhelper.dosignup(req.body).then((res)=>{
  console.log(res)
})
});
router.post('/login',(req,res)=>{
  userhelper.dologin(req.body)
});

module.exports = router;
