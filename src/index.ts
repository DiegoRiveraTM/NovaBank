import connectDB from '../src/config/db';
import express from 'express';
import bodyParser from 'body-parser';
import auth from './routes/auth';

connectDB();
const app = express();


app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
}));

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Ruta del servidor principal
app.get('/', (req, res) => {
    res.send('El servidor esta funcionando correctamente...');
});

//Rutas de mi API //Falta poner las routes del folder routes
app.use('/api/auth', auth);
app.use('/api/transactions', transactionRoutes); )