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

    createRoleValidator,
    validate,
    asyncHandler(createRole)
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