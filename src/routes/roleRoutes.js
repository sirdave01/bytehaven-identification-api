import { Router } from "express";

import {
    getRoles,
    getRole,
    createRole,
    updateRole,
    deleteRole
} from "../controllers/roleController.js";

import {
    createRoleValidator,
    updateRoleValidator
} from "../validators/roleValidator.js";

import { mongoIdValidator } from "../validators/commonValidator.js";
import { validate } from "../middleware/validate.js";
import { asyncHandler } from "../middleware/asyncHandler.js";

const router = Router();

router.get(
    "/",
    asyncHandler(getRoles)
);

router.get(
    "/:id",
    mongoIdValidator,
    validate,
    asyncHandler(getRole)
);

router.post(
    "/",
    createRoleValidator,
    validate,
    asyncHandler(createRole)
);

router.put(
    "/:id",
    mongoIdValidator,
    updateRoleValidator,
    validate,
    asyncHandler(updateRole)
);

router.delete(
    "/:id",
    mongoIdValidator,
    validate,
    asyncHandler(deleteRole)
);

export default router;