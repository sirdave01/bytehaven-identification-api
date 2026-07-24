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

router.get(
    "/",
    asyncHandler(getApplications)
);

router.get(
    "/:id",
    mongoIdValidator,
    validate,
    asyncHandler(getApplication)
);

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