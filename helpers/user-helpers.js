var db=require('../config/connection')
var collection=require('../config/collections')
const bcrypt=require('bcrypt')
module.exports={
    dosignup:(userData)=>{
        return new Promise(async(resolve,reject)=>{
       
           userData.password= await bcrypt.hash(userData.password,10) 
            console.log(data)
        db.get().collection(collection.USER_COLLECTION).insertOne(userData).then((data)=>{
          resolve(data.insertedId)
     }) 
    
    })
      
    },
    dologin:(userData)=>{
        return new Promise(async(resolve,reject)=>{
            let loginstatus=false
            let response={}
            let user= await db.get().collection(collection.USER_COLLECTION).findOne({Email:userData.Email})
            if(user){
               bcrypt.compare(userData.password,user.password).then((status)=>{
                if(status){
                    console.log("login successfull");
                }else{
                    console.log('login failed');
                }
               })
            }else{
                console.log('login failed')
            }
        })
    }
}