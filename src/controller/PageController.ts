import { Request, Response } from 'express';
import { CreateMenuObject } from '../services/CreateMenuObject';

export default {
  home(req: Request, res: Response) {
    res.render('pages/page', {
      menu: CreateMenuObject('all'),
      banner: {
        title: 'Todos os animais',
        background: 'allanimals.jpg',
      },
    });
  },

  dogs(req: Request, res: Response) {
    res.render('pages/page', {
      menu: CreateMenuObject('dog'),
      banner: {
        title: 'Cachorros',
        background: 'banner_dog.jpg',
      },
    });
  },

  cats(req: Request, res: Response) {
    res.render('pages/page', {
      menu: CreateMenuObject('cat'),
      banner: {
        title: 'Gatos',
        background: 'banner_cat.jpg',
      },
    });
  },

  fishes(req: Request, res: Response) {
    res.render('pages/page', {
      menu: CreateMenuObject('fish'),
      banner: {
        title: 'Peixes',
        background: 'banner_fish.jpg',
      },
    });
  },
};
