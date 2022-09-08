import express from 'express';
import mongoose from 'mongoose';
import bodyPaser from 'body-parser';
import cors from 'cors';

import postRoutes from './routes/posts.js';


const app = express();
//limit to restrict files larger than 30mb
app.use(bodyPaser.json({limit: '30mb', extended: true}));
app.use(bodyPaser.urlencoded({limit: '30mb', extended: true}));
app.use(cors());

app.use('/posts', postRoutes);

const CONNECTION_URL = 'mongodb+srv://AccoladeDB:Accolade@cluster0.8tfcsjt.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)))
    .catch((err) => console.log(err));