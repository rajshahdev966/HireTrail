import {Router} from "express"
import { authenticate } from "../middlewares/auth.middlewares";

const router = Router()

/**
 * @method POST
 * @access loggedIn User
 * @description Create candidate profile for the user
 * @params req.body = {fullName, location, yourSkills, relevantExpereince, protfolioUrl, resumeUrl, coverLetter}
 * @params req.user = {id, role}
 */

router.post("/candidate/add", authenticate, )

export default router;