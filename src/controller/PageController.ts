import { Request, Response } from 'express';
import { CreateMenuObject } from '../services/CreateMenuObject';
import PetModel from '../models/PetModel';

export default {
  home(req: Request, res: Response) {
    const list = PetModel.getAll();

    res.render('pages/page', {
      menu: CreateMenuObject('all'),
      banner: {
        title: 'Todos os animais',
        background: 'allanimals.jpg',
      },
      list,
    });
  },

  dogs(req: Request, res: Response) {
    const list = PetModel.getFromType('dog');

    res.render('pages/page', {
      menu: CreateMenuObject('dog'),
      banner: {
        title: 'Cachorros',
        background: 'banner_dog.jpg',
      },
      list,
    });
  },

  cats(req: Request, res: Response) {
    const list = PetModel.getFromType('cat');

    res.render('pages/page', {
      menu: CreateMenuObject('cat'),
      banner: {
        title: 'Gatos',
        background: 'banner_cat.jpg',
      },
      list,
    });
  },

  fishes(req: Request, res: Response) {
    const list = PetModel.getFromType('fish');

    res.render('pages/page', {
      menu: CreateMenuObject('fish'),
      banner: {
        title: 'Peixes',
        background: 'banner_fish.jpg',
      },
      list,
    });
  },
};
