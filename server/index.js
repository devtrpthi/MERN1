import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import   mongoose  from 'mongoose';
import postRoutes from './routes/post.js';

const app = express();


app.use('/post', postRoutes);
app.use(bodyParser.json({limit: '30mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}));
app.use(cors());

const CONNECTION_URL =  'mongodb+srv://devtrpthi:Devesh1234@cluster1.itaib5r.mongodb.net/?retryWrites=true&w=majority';
 const PORT = process.env.PORT || 3000;

 mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => app.listen(PORT, () => console.log(`Server is running on ${PORT}`)))
  .catch((error) => console.log(error.message)); 





