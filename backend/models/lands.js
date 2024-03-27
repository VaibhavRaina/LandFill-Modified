const mongoose=require(`mongoose`);
const { Schema } = mongoose;

const LandSchema=new Schema({
    title:String,
    price:Number,
    discription:String,
    location:String,
});

module.exports=mongoose.model(`land`,LandSchema);