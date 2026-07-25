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
 * #swagger.summary = 'Create application'
 *
 * #swagger.parameters['body'] = {
 *    in: 'body',
 *    required: true,
 *    schema: {
 *       $ref: '#/definitions/Application'
 *    }
 * }
 */

router.post(
    "/",
    createApplicationValidator,
    validate,
    asyncHandler(createApplication)
);


/**
 * #swagger.tags = ['Applications']
 * #swagger.summary = 'Update application'
 *
 * #swagger.parameters['body'] = {
 *    in: 'body',
 *    required: true,
 *    schema: {
 *       $ref: '#/definitions/Application'
 *    }
 * }
 */


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