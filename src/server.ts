import routes from './routes';
import express from 'express';
import path from 'path';
import cors from 'cors';
const app = express();

import {errors} from 'celebrate';

app.use(cors()); //posso passar o domínio que permitirá fazer as requisições, sem nada 
//Qualquer requisição poode ser feita
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))
app.use(errors());
app.listen(process.env.PORT || 3333);