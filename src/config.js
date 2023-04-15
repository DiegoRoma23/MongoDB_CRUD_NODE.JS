import { config } from 'dotenv';

config(); 

export const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://LicoresRafa:licoresElRafa@cluster0.scjfvan.mongodb.net/?retryWrites=true&w=majority'; 

export const PORT = process.env.PORT || 3000