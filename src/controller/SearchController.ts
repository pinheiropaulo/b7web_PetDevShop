import { Request, Response } from 'express';
import { CreateMenuObject } from '../services/CreateMenuObject';
import PetModel from '../models/PetModel';

export default {
  search(req: Request, res: Response) {
    const query = req.query.q as string;

    if (!query) {
      res.redirect('/');
      return;
    }

    const list = PetModel.getFromName(query);

    res.render('pages/page', {
      menu: CreateMenuObject(''),
      list,
      query,
    });
  },
};
