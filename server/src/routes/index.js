import { Router } from 'express';
import profileRouter from './profile';
import contactRouter from './contactform';

let router = Router();

router.use('/contact', contactRouter);
router.use('/profile', profileRouter);

export default router;