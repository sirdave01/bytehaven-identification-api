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

import { isAuthenticated } from "../middleware/isAuthenticated.js";

const router = Router();

router.get(
    "/",
    getRoles
);

router.get(
    "/:id",
    mongoIdValidator,
    validate,
    getRole
);

router.post(
    "/",

    /*
    
    #swagger.tags = ['Roles']
    #swagger.summary = 'Create role'

    #swagger.parameters['body'] = {
        in: 'body',
        required: true,
        schema: {
            name: "Super Admin",
            description: "Full system access",
            permissions: [
                "create_user",
                "update_user",
                "delete_user"
            ]
        }
    }
    */
    isAuthenticated,
    createRoleValidator,
    validate,
    createRole
);

router.put(
    "/:id",

    /*
     
    #swagger.tags = ['Roles']
    #swagger.summary = 'Update role'

    #swagger.parameters['body'] = {
        in: 'body',
        required: true,
        schema: {
            name: "Administrator",
            description: "Updated access level",
            permissions: [
                "create_user",
                "update_user"
            ]
        }
    }
    */
    isAuthenticated,
    mongoIdValidator,
    updateRoleValidator,
    validate,
    updateRole
);


router.delete(
    "/:id",
    isAuthenticated,
    mongoIdValidator,
    validate,
    deleteRole
);

export default router;