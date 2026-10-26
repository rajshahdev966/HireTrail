import { body, validationResult } from "express-validator";


export const registerValidator = [
    body("name")
        .exists().withMessage("Name is required").bail()
        .isString().withMessage("Name must be in string format").bail()
        .isLength({max: 50}).withMessage("Name must be less than 50 words"),
    body("email")
        .exists().withMessage("Email is required").bail()
        .isString().withMessage("Email must be string").bail()
        .isEmail().withMessage("Please fill a valid email address"),
    body("password")
        .exists().withMessage("Password is required").bail()
        .isString().withMessage("Password must be string").bail()
        .isLength({min: 6, max: 50}).withMessage("Password must be between 6 to 50 characters").bail()
        .isStrongPassword().withMessage("Password must contain atleast one lowercase, one uppercase, symbol and number"),
    body("phoneNumber")
        .exists().withMessage("Phone number is required").bail()
        .isString().withMessage("Phone number must be string").bail()
        .isLength({min: 10, max: 10}).withMessage("Phone number must be 10 digits").bail()
        .matches(/^[6-9]\d{9}$/).withMessage("Please add valid indian number"),
    (req, res, next)=> {
        const errors = validationResult(req);

        if(!errors.isEmpty()){
            return res.status(400).json({
                message: "Invalid reponse",
                errors: errors.array()
            })
        }

        next();
    }
]

export const loginValidator = [
    body("email")
        .exists().withMessage("Email is required").bail()
        .isString().withMessage("Email must be string").bail()
        .isEmail().withMessage("Please fill a valid email address"),
    body("password")
        .exists().withMessage("Password is required").bail()
        .isString().withMessage("Password must be string").bail(),
    (req, res, next)=> {
        const errors = validationResult(req);

        if(!errors.isEmpty()){
            return res.status(400).json({
                message: "Invalid response",
                errors: errors.array()
            })
        }

        next();
    }
]