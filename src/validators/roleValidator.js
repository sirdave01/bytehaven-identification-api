import { body } from "express-validator";

export const createRoleValidator = [

    body("name")
        .trim()
        .notEmpty()
        .withMessage("Role name is required")
        .isLength({ min: 3, max: 50 }),

    body("description")
        .trim()
        .notEmpty()
        .withMessage("Role description is required")

];

export const updateRoleValidator = [

    body("name")
        .optional()
        .trim()
        .isLength({ min: 3, max: 50 }),

    body("description")
        .optional()
        .trim()

];