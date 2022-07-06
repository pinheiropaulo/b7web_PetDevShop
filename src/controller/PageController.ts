import { Request, Response } from 'express';

export default {
  home(req: Request, res: Response) {
    res.send('Home');
  },

  dogs(req: Request, res: Response) {
    res.send('dogs');
  },

  cats(req: Request, res: Response) {
    res.send('cats');
  },

  fishes(req: Request, res: Response) {
    res.send('fishes');
  },
};
