import connectDB from './config/db';
import express from 'express';
import bodyParser from 'body-parser';
import auth from './routes/auth';
import transactionRoutes from './routes/transactionRoutes';
import userRoutes from './routes/userRoutes';


connectDB();
const app = express();


app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

//route of the server
app.get('/', (req, res) => {
    res.send('El servidor esta funcionando correctamente...');
});

//API routes
app.use('/api/auth', auth);
app.use('/api/transactions', transactionRoutes);
app.use('/api/users', userRoutes);


//Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`); 
});
