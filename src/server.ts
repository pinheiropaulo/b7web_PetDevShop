import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';
import { router } from './routes/index.routes';

dotenv.config();

const server = express();
const port = process.env.PORT || 8080;

server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());
server.use(express.static(path.join(__dirname, '..', 'public')));

server.use(express.urlencoded({ extended: true }));

server.use(router);

server.use((req, res) => {
  res.render('pages/404');
});

server.listen(port, () => {
  console.log(`Server is running http://localhost:${port}`);
});
