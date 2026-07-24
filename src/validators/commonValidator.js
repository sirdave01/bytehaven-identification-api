import { param } from "express-validator";

/**
 * Validate MongoDB ObjectId parameter.
 */

export const mongoIdValidator = [

    param("id")
        .trim()
        .notEmpty()
        .withMessage("Resource ID is required")
        .isMongoId()
        .withMessage("Invalid MongoDB ObjectId")

];