import {Router} from "express"
import { authenticate, authoriseEmployer } from "../middlewares/auth.middlewares";

const router = Router()

/**
 * @method POST
 * @route /api/job/add
 * @description Add new post title
 * @access only to recruitter
 * @params = {
 *  title, department, employmentType, location, workplaceType, 
 * salary: {
 *      currency, maximumSalary , minimumSalary
 *  }, aboutRole, responsibilities, requirements, benifitsAndPerks, status
 * }
 * @res status code 201 on success
 */


router.post("/add", authenticate, authoriseEmployer, )

export default router;