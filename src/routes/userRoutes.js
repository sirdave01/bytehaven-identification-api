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

/**
 * #swagger.tags = ['Users']
 * #swagger.summary = 'Retrieve all users'
 * #swagger.description = 'Returns all registered users'
 */

router.get(
    "/",
    asyncHandler(getUsers)
);

/**
 * #swagger.tags = ['Users']
 * #swagger.summary = 'Retrieve a user'
 */

router.get(
    "/:id",
    mongoIdValidator,
    validate,
    asyncHandler(getUser)
);

/**
 * #swagger.tags = ['Users']
 * #swagger.summary = 'Create a new user'
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