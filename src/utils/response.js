export const successResponse = (
    res,
    message,
    data = null,
    status = 200
) => {

    return res.status(status).json({

        success: true,

        message,

        data

    });

};

export const createdResponse = (
    res,
    message,
    data = null
) => {

    return successResponse(
        res,
        message,
        data,
        201
    );

};

export const notFoundResponse = (
    res,
    message = "Resource not found"
) => {

    return res.status(404).json({

        success: false,

        message

    });

};

export const badRequestResponse = (
    res,
    message = "Bad Request",
    errors = null
) => {

    return res.status(400).json({
        success: false,
        message,
        errors
    });

};

export const noContentResponse = (res) => {

    return res.status(204).send();

};