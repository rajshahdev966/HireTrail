import { body } from "express-validator";

export const createJobValidator = [
    body("title")
        .trim()
        .notEmpty().withMessage("Job title is required")
        .isLength({ min: 5, max: 50 }).withMessage("Job title must be between 5 and 50 characters"),

    body("department")
        .notEmpty().withMessage("Department is required")
        .isIn(["Design", "Engineering", "Marketing", "Customer Success"]).withMessage("Invalid department"),

    body("employmentType")
        .notEmpty().withMessage("Employment type is required")
        .isIn(["Full-time", "Part-time", "Contract", "Internship"]).withMessage("Invalid employment type"),

    body("location")
        .trim()
        .notEmpty().withMessage("Location is required")
        .isString().withMessage("Location must be a string"),

    body("workplaceType")
        .trim(\)
        .notEmpty().withMessage("Workplace type is required")
        .isIn(["Remote", "Hybrid", "On-site"]).withMessage("Invalid workplace type"),

    // Minimum Salary
    body("minimumSalary.currency")
        .optional()
        .isIn(["Rs", "$"])
        .withMessage("Currency must be Rs or $"),

    body("minimumSalary.amount")
        .exists({ values: "null" })
        .withMessage("Minimum salary is required")
        .bail()
        .isInt({ min: 0 })
        .withMessage("Minimum salary must be a non-negative integer")
        .toInt(),

    // Maximum Salary
    body("maximumSalary.currency")
        .optional()
        .isIn(["Rs", "$"])
        .withMessage("Currency must be Rs or $"),

    body("maximumSalary.amount")
        .exists({ values: "null" })
        .withMessage("Maximum salary is required")
        .bail()
        .isInt({ min: 0 })
        .withMessage("Maximum salary must be a non-negative integer")
        .toInt(),

    // Salary Range Validation
    body("maximumSalary.amount")
        .custom((value, { req }) => {
            const min = req.body.minimumSalary?.amount;

            if (Number(value) < Number(min)) {
                throw new Error(
                    "Maximum salary must be greater than or equal to minimum salary"
                );
            }

            return true;
        }),

    // Salary Currency Consistency
    body("maximumSalary.currency")
        .custom((value, { req }) => {
            const minCurrency = req.body.minimumSalary?.currency ?? "$";
            const maxCurrency = value ?? "$";

            if (minCurrency !== maxCurrency) {
                throw new Error("Minimum and maximum salary currencies must match");
            }

            return true;
        }),

    body("aboutRole")
        .trim()
        .notEmpty().withMessage("About role is required")
        .isLength({ min: 50, max: 2500 })
        .withMessage("About role must be between 50 and 2500 characters"),

    body("responsibilities")
        .trim()
        .notEmpty().withMessage("Responsibilities are required")
        .isLength({ min: 50, max: 2500 })
        .withMessage("Responsibilities must be between 50 and 2500 characters"),

    body("requirements")
        .trim()
        .notEmpty().withMessage("Requirements are required")
        .isLength({ min: 50, max: 2500 })
        .withMessage("Requirements must be between 50 and 2500 characters"),

    body("benifitsAndPerks")
        .optional()
        .isString()
        .withMessage("Benefits and perks must be a string")
        .trim(),

    body("createdBy")
        .notEmpty().withMessage("Creator ID is required")
        .isMongoId().withMessage("Invalid creator ID")
];