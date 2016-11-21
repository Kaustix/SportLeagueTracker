import express from 'express';
import bodyParser from 'body-parser';

import routes from './api/routes';
import * as database from './api/database';

database.Connect();

const port = process.env.PORT || 8080;
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', routes);
app.listen(port, () => { console.log(`Listening on port: ${port}`)});