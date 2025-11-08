import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://221002248_db_user:221002248@cluster0.q5rfoyo.mongodb.net/platter-port').then(()=>console.log("DB Connected"));
}