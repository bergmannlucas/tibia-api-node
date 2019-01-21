import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import http from 'http';

import { load } from '../routes';

require('dotenv').config();

const app = express();

app.server = http.createServer(app);

/**
 * Middlewares
 */
app.use(cors());
app.use(bodyParser.json());
app.disable('x-powered-by');
app.use('/api/v1/', load());

module.exports = app;
