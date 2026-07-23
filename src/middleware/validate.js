import { validationResult } from "express-validator";

import { errorResponse } from "../utils/response.js";

export function validate(req, res, next) {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {

        return errorResponse(
            res,
            400,
            "Validation failed",
            errors.array().map(error => ({
                field: error.path,
                message: error.msg
            }))
        );

    }

    next();

}