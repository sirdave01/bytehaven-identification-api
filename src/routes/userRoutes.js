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

import { isAuthenticated } from "../middleware/isAuthenticated.js";

const router = Router();

/**
 * #swagger.tags = ['Users']
 * #swagger.summary = 'Retrieve all users'
 * #swagger.description = 'Returns all registered users'
 */

router.get(
    "/",
    getUsers
);

/**
 * #swagger.tags = ['Users']
 * #swagger.summary = 'Retrieve a user'
 */

router.get(
    "/:id",
    mongoIdValidator,
    validate,
    getUser
);

router.post(
    "/",

    /*
     #swagger.security = [{
        "sessionAuth": []
    }]

    #swagger.tags = ['Users']
    #swagger.summary = 'Create a new user'
    #swagger.description = 'Creates a new BHID user.'

    #swagger.parameters['body'] = {
        in: 'body',
        required: true,
        schema: {
            first_name: "Caleb",
            last_name: "Osigwe",
            username: "caleb01",
            email: "caleb@example.com",
            password: "password123",
            role_id: "66a7f3e4a8b1c92f5d654321",
            status: "active"
        }
    }
    */
    isAuthenticated,
    createUserValidator,
    validate,
    createUser
);

router.put(
    "/:id",

    /*
     #swagger.security = [{
        "sessionAuth": []
    }]

    #swagger.tags = ['Users']
    #swagger.summary = 'Update a user'
    #swagger.description = 'Updates an existing BHID user.'

    #swagger.parameters['body'] = {
        in: 'body',
        required: true,
        schema: {
            first_name: "Caleb",
            last_name: "Osigwe",
            username: "caleb01",
            email: "caleb@example.com",
            role_id: "66a7f3e4a8b1c92f5d654321",
            status: "active"
        }
    }
    */
    isAuthenticated,
    mongoIdValidator,
    updateUserValidator,
    validate,
    updateUser
);

//  #swagger.security = [{
//         "sessionAuth": []
//     }]

router.delete(
    "/:id",
    isAuthenticated,
    mongoIdValidator,
    validate,
    deleteUser
);

export default router;