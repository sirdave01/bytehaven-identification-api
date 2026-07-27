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

router.post(
    "/",

    /*
    #swagger.tags = ['Applications']
    #swagger.summary = 'Create application'

    #swagger.parameters['body'] = {
        in: 'body',
        required: true,
        schema: {
            name: "HavenChat",
            description: "Messaging platform inside ByteHaven ecosystem",
            status: "active",
            version: "1.0.0"
        }
    }
    */

    createApplicationValidator,
    validate,
    asyncHandler(createApplication)
);


router.put(
    "/:id",

    /*
    #swagger.tags = ['Applications']
    #swagger.summary = 'Update application'

    #swagger.parameters['body'] = {
        in: 'body',
        required: true,
        schema: {
            name: "HavenChat",
            description: "Updated messaging platform",
            status: "active",
            version: "1.1.0"
        }
    }
    */

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