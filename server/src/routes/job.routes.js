import {Router} from "express"
import { authenticate, authoriseEmployer } from "../middlewares/auth.middlewares.js";
import { closeJobController, createJobController, deleteJobController, publishJobController } from "../controllers/job.controller.js";
import { createJobValidator } from "../validators/job.validators.js";

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


router.post("/add", authenticate, authoriseEmployer, createJobValidator,createJobController)

/**
 * @method POST
 * @route /api/job/publish/:jobId
 * @description Publish the selected job
 * @access only to recruitter
 * @params req.params => jobId
 * @res status code 200 on success
 */

router.post("/publish/:jobId", authenticate, authoriseEmployer, publishJobController)

/**
 * @method POST
 * @route /api/job/close/:jobId
 * @description Close the selected job
 * @access only to recruitter
 * @params req.params => jobId
 * @res status code 200 on success
 */

router.post("/close/:jobId", authenticate, authoriseEmployer, closeJobController)

/**
 * @method DELETE
 * @route /api/job/delete/:jobId
 * @description Delete the selected job
 * @access only to recruitter
 * @params req.params => jobId
 * @res status code 200 on success
 */

router.delete("/delete/:jobId", authenticate, authoriseEmployer, deleteJobController)

export default router;