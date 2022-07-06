import { Router } from 'express';

import PageController from '../controller/PageController';
import SearchController from '../controller/SearchController';

export const router = Router();

router.get('/', PageController.home);
router.get('/dogs', PageController.dogs);
router.get('/cats', PageController.cats);
router.get('/fishes', PageController.fishes);

// search
router.get('/search', SearchController.search);
