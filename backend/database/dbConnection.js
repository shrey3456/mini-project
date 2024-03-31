import mongoose from "mongoose";
const db='mongodb+srv://22it111:db123456@cluster0.z07671g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
export const dbConnection = () => {
  mongoose
    .connect(db, {
      dbName: "RESERVATIONS",
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log(`Some error occured while connecing to database: ${err}`);
    });
};
