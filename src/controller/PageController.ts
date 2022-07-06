import { Request, Response } from 'express';

export default {
  home(req: Request, res: Response) {
    res.render('pages/page', {
      banner: {
        title: 'Todos os animais',
        background: 'allanimals.jpg',
      },
    });
  },

  dogs(req: Request, res: Response) {
    res.render('pages/page', {
      banner: {
        title: 'Cachorros',
        background: 'banner_dog.jpg',
      },
    });
  },

  cats(req: Request, res: Response) {
    res.render('pages/page', {
      banner: {
        title: 'Gatos',
        background: 'banner_cat.jpg',
      },
    });
  },

  fishes(req: Request, res: Response) {
    res.render('pages/page', {
      banner: {
        title: 'Peixes',
        background: 'banner_fish.jpg',
      },
    });
  },
};
