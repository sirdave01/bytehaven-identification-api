import { errorResponse } from "../utils/response.js";

export function errorHandler(err, req, res, next) {

    console.error(err);

    return errorResponse(
        res,
        err.status || 500,
        err.message || "Internal Server Error"
    );

}