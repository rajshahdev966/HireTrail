import { body, validationResult } from "express-validator";

export const createJobValidator = [
  body("title")
    .trim()
    .notEmpty()
    .withMessage("Job title is required")
    .isLength({ min: 5, max: 50 })
    .withMessage("Job title must be between 5 and 50 characters"),

  body("department")
    .notEmpty()
    .withMessage("Department is required")
    .isIn(["Design", "Engineering", "Marketing", "Customer Success"])
    .withMessage("Invalid department"),

  body("employmentType")
    .notEmpty()
    .withMessage("Employment type is required")
    .isIn(["Full-time", "Part-time", "Contract", "Internship"])
    .withMessage("Invalid employment type"),

  body("location")
    .trim()
    .notEmpty()
    .withMessage("Location is required")
    .isString()
    .withMessage("Location must be a string"),

  body("workplaceType")
    .trim()
    .notEmpty()
    .withMessage("Workplace type is required")
    .isIn(["Remote", "Hybrid", "On-site"])
    .withMessage("Invalid workplace type"),

  body("salary")
    .exists().withMessage("Salary information is required").bail()
    .isObject().withMessage("Salary must be a object"),

  body("salary.currency")
    .optional()
    .isIn(["$", "Rs"])
    .withMessage("Invalid Currency"),
  body("salary.minimumSalary")
    .exists({values: "null"})
    .withMessage("Minimum salary is required")
    .bail()
    .isInt({ min: 0 })
    .withMessage("Salary must be positive integer number"),
  body("salary.maximumSalary")
    .exists()
    .withMessage("Maximum salary is required")
    .bail()
    .isInt({ min: 0 })
    .withMessage("Salary must be a positive integer number").bail()
    .custom((maximumSalary, {req}) => {
      const minimumSalary = req.body.salary.minimumSalary;
      if (maximumSalary < minimumSalary) {
        throw new Error("Maximum salary can't be less than minimum salary");
      }
      return true;
    }),
  body("aboutRole")
    .trim()
    .notEmpty()
    .withMessage("About role is required")
    .bail()
    .isLength({ min: 50, max: 2500 })
    .withMessage("About role must be between 50 and 2500 characters"),

  body("responsibilities")
    .trim()
    .notEmpty()
    .withMessage("Responsibilities are required")
    .bail()
    .isLength({ min: 50, max: 2500 })
    .withMessage("Responsibilities must be between 50 and 2500 characters"),

  body("requirements")
    .trim()
    .notEmpty()
    .withMessage("Requirements are required")
    .bail()
    .isLength({ min: 50, max: 2500 })
    .withMessage("Requirements must be between 50 and 2500 characters"),

  body("benifitsAndPerks")
    .optional()
    .isString()
    .withMessage("Benefits and perks must be a string")
    .trim(),
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: "Invalid input",
        errors: errors.array(),
      });
    }

    next();
  },
];
