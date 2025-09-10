import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config();

export async function connectDB(){
    try {
       await mongoose.connect(`mongodb+srv://shivresides:${process.env.MONGO_DB_PASS}@second-brain.4jq3gmh.mongodb.net/?retryWrites=true&w=majority&appName=second-brain`).then(()=> {
        console.log('Connected to database')
       })
    } catch (e){
        console.log('failed connecting database', e)
    }
}

export async function GET() {
    await connectDB();
    return Response.json({ message: "Hello from server!" });
  }