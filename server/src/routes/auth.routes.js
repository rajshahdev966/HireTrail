import {Router} from "express"
import { loginValidator, registerValidator } from "../validators/auth.validators";
import { getMeController, loginController, registerController } from "../controllers/auth.controllers";
import { authenticate } from "../middlewares/auth.middlewares";

const router = Router()

/**
 * @method POST
 * @description Register the user
 * @route /api/auth/register
 * @params req.body = {email, name, password, phoneNumber}
 * @res status code = 201 => on successful
 */

router.post("/register", registerValidator, registerController);

/**
 * @method POST 
 * @description: login the user
 * @route /api/auth/login
 * @params req.body = {email, password}
 * @res status codde = 200 => if successful 
 */

router.post("/login", loginValidator, loginController);

/**
 * @mathod GET
 * @description refresh access and refresh token
 * @route /api/auth/refresh
 * @params req.cookies = {refreshToken}
 * @res status code = 200 => if successful
 */

router.get("/refresh", authenticate, getMeController);


export default router;