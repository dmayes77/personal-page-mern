import 'babel-polyfill';
import { join } from 'path';
import express from 'express';
import morgan from 'morgan';
import routes from './routes';
import cors from 'cors';
import stateRouting from './middleware/routing.mw';
import mongoose from 'mongoose';
import { config } from './config';


const CLIENT_PATH = join(__dirname, '../../client');

let app = express();

app.use(morgan('dev'));
app.use(express.static(CLIENT_PATH));
app.use(express.json());
app.use(cors());

//Connect to MongoDB
mongoose.set('debug', true);
mongoose
    .connect(config.MONGODB_URI, { useNewUrlParser: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => cconsole.log(err))

app.use('/api', routes);

app.use(stateRouting);

let port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
