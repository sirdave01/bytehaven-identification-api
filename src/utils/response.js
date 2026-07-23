/**
 * Send a successful API response.
 *
 * @param {Object} res Express response object
 * @param {number} statusCode HTTP status code
 * @param {string} message Response message
 * @param {*} data Response payload
 */

export function successResponse(
    res,
    statusCode = 200,
    message = "Success",
    data = null
) {
    return res.status(statusCode).json({
        success: true,
        message,
        data
    });
}

/**
 * Send an error API response.
 *
 * @param {Object} res Express response object
 * @param {number} statusCode HTTP status code
 * @param {string} message Error message
 * @param {*} errors Validation errors (optional)
 */

export function errorResponse(
    res,
    statusCode = 500,
    message = "Internal Server Error",
    errors = null
) {
    return res.status(statusCode).json({
        success: false,
        message,
        errors
    });
}