import { body } from "express-validator";

export const createUserValidator = [

    body("first_name")
        .trim()
        .notEmpty()
        .withMessage("First name is required")
        .isLength({ min: 2, max: 50 })
        .withMessage("First name must be between 2 and 50 characters"),

    body("last_name")
        .trim()
        .notEmpty()
        .withMessage("Last name is required")
        .isLength({ min: 2, max: 50 })
        .withMessage("Last name must be between 2 and 50 characters"),

    body("username")
        .trim()
        .notEmpty()
        .withMessage("Username is required")
        .isLength({ min: 3, max: 30 })
        .withMessage("Username must be between 3 and 30 characters"),

    body("email")
        .trim()
        .isEmail()
        .withMessage("Please provide a valid email address")
        .normalizeEmail(),

    body("password")
        .isLength({ min: 8 })
        .withMessage("Password must be at least 8 characters long")

];

export const updateUserValidator = [

    body("first_name")
        .optional()
        .trim()
        .isLength({ min: 2, max: 50 }),

    body("last_name")
        .optional()
        .trim()
        .isLength({ min: 2, max: 50 }),

    body("username")
        .optional()
        .trim()
        .isLength({ min: 3, max: 30 }),

    body("email")
        .optional()
        .isEmail()
        .normalizeEmail(),

    body("password")
        .optional()
        .isLength({ min: 8 })

];