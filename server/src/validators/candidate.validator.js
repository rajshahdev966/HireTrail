import { body, validationResult } from "express-validator";


export const candidateValidator = [
    body("fullName")
        .exists().withMessage("Full Name is required").bail()
        .trim()
        .notEmpty().withMessage("Full Name is required").bail()
        .isString().withMessage("Full Name must be a string").bail()
        .isLength({min: 3}).withMessage("Full Name must be longer than 3 characters"),
    body("location")
        .exists().withMessage("location is required").bail()
        .trim()
        .notEmpty().withMessage("location is required").bail()
        .isString().withMessage("location must be a string"),
    body("yourSkills")
        .exists().withMessage("You must mention your skills").bail()
        .trim()
        .notEmpty().withMessage("You must mention your skills").bail()
        .isLength({max: 500}).withMessage("You can only write upto 500 character"),
    body("relevantExperience")
        .optional()
        .trim()
        .isString().withMessage("You must write your experience in string format").bail()
        .isLength({max: 2000}.withMessage("You must mention your experience under 2000 character")),
    body("portfolioUrl")
        .optional()
        .trim()
        .isString().withMessage("Url must be in string format").bail()
        .matches(/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/).withMessage("Invaild URL"),
    body("resumeUrl")
        .optional()
        .trim()
        .isString().withMessage("Url must be in string format").bail()
        .matches(/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/).withMessage("Invaild URL"),
    body("coverLetter")
        .optional()
        .trim()
        .isString().withMessage("cover letter must be a string").bail()
        .isLength({max: 2000}.withMessage("cover letter must be less than 2000 characters")),

    (req, res, next)=> {
        const errors = validationResult(req)

        if(!errors.isEmpty()){
            return res.status(400).json({
                message: "Invalid request",
                errors: errors.array()
            })
        }

        next()
    }

]