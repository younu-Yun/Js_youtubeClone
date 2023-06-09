import express from "express";
import { trending, search } from '../controllers/videoController';
import { join, login } from '../controllers/userController';

/* -------------------------------------------- */
const globalRouter = express.Router()

globalRouter.get('/', trending)
globalRouter.get('/join', join)
globalRouter.get('/login', join)
globalRouter.get('/search', join)

export default globalRouter;