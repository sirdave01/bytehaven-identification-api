import { Router } from "express";

import {
    getApplications,
    getApplication,
    createApplication,
    updateApplication,
    deleteApplication
} from "../controllers/applicationController.js";

import {
    createApplicationValidator,
    updateApplicationValidator
} from "../validators/applicationValidator.js";

import { mongoIdValidator } from "../validators/commonValidator.js";
import { validate } from "../middleware/validate.js";
import { asyncHandler } from "../middleware/asyncHandler.js";

const router = Router();

/**
 * #swagger.tags = ['Applications']
 * #swagger.summary = 'Retrieve all applications'
 * #swagger.description = 'Returns all registered applications'
 */

router.get(
    "/",
    asyncHandler(getApplications)
);

/**
 * #swagger.tags = ['Applications']
 * #swagger.summary = 'Retrieve an application'
 */

router.get(
    "/:id",
    mongoIdValidator,
    validate,
    asyncHandler(getApplication)
);

/**
 * #swagger.tags = ['Applications']
 * #swagger.summary = 'Create a new application'
 * #swagger.parameters['body'] = {
 *    in: 'body',
 *    required: true,
 *    schema: {
 *      first_name: 'John',
 *      last_name: 'Doe',
 *      username: 'johndoe',
 *      email: 'john@example.com',
 *      password: 'password123'
 *    }
 * }
 */

router.post(
    "/",
    createApplicationValidator,
    validate,
    asyncHandler(createApplication)
);

router.put(
    "/:id",
    mongoIdValidator,
    updateApplicationValidator,
    validate,
    asyncHandler(updateApplication)
);

router.delete(
    "/:id",
    mongoIdValidator,
    validate,
    asyncHandler(deleteApplication)
);

export default router;