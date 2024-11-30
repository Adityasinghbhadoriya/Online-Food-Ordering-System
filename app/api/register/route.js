import User from '../../models/User';
import dotenv from 'dotenv'
dotenv.config();

import mongoose from "mongoose";

export async function POST(req) {
   const body = await req.json();
   mongoose.connect(process.env.MONGO_URL);
   // const createdUser = await User.create(body)
   const createdUser = await User.create(body);

   return Response.json(createdUser); 
    
}