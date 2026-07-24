import { body } from "express-validator";

export const createApplicationValidator = [

    body("name")
        .trim()
        .notEmpty()
        .withMessage("Application name is required"),

    body("description")
        .trim()
        .notEmpty()
        .withMessage("Description is required"),

    body("status")
        .trim()
        .isIn(["active", "inactive"])
        .withMessage("Status must be active or inactive")

];

export const updateApplicationValidator = [

    body("name")
        .optional()
        .trim(),

    body("description")
        .optional()
        .trim(),

    body("status")
        .optional()
        .isIn(["active", "inactive"])

];