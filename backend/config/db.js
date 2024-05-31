import mongoose from 'mongoose'

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://admin:cfyxjc@cluster0.0jmxa7f.mongodb.net/food-delivery').then(() => console.log("DB connected"));
}