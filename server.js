import express from 'express'
import { postsRoutes } from './Routes/postsRoutes.js';
import { usersRoutes } from './Routes/usersRoutes.js';
import mongoose, { mongo } from 'mongoose';

const app = express();

app.use(express.json())

app.use('/api/posts', postsRoutes)
app.use('/api/users', usersRoutes)

mongoose.connect("mongodb://127.0.0.1:27017/", {dbName: "demo_db"})
  .then(() => {
    console.log("Connected to DB successfully");
    app.listen(4000,'localhost', () => console.log("listening to port 4000"));
  })
  .catch((err) => console.log(err));
