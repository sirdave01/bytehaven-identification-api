import { body } from "express-validator";

export const createSystemSettingValidator = [

    body("key")
        .trim()
        .notEmpty()
        .withMessage("Key is required"),

    body("value")
        .notEmpty()
        .withMessage("Value is required"),

    body("description")
        .trim()
        .notEmpty()
        .withMessage("Description is required")

];

export const updateSystemSettingValidator = [

    body("key")
        .optional()
        .trim(),

    body("value")
        .optional(),

    body("description")
        .optional()
        .trim()

];