import { Router } from "express";

import {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
} from "../controllers/userController.js";

import {
    createUserValidator,
    updateUserValidator
} from "../validators/userValidator.js";

import { mongoIdValidator } from "../validators/commonValidator.js";
import { validate } from "../middleware/validate.js";
import { asyncHandler } from "../middleware/asyncHandler.js";

const router = Router();

router.get(
    "/",
    asyncHandler(getUsers)
);

router.get(
    "/:id",
    mongoIdValidator,
    validate,
    asyncHandler(getUser)
);

router.post(
    "/",
    createUserValidator,
    validate,
    asyncHandler(createUser)
);

router.put(
    "/:id",
    mongoIdValidator,
    updateUserValidator,
    validate,
    asyncHandler(updateUser)
);

router.delete(
    "/:id",
    mongoIdValidator,
    validate,
    asyncHandler(deleteUser)
);

export default router;