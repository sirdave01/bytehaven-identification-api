import { Router } from "express";

import {
    getSettings,
    getSetting,
    createSetting,
    updateSetting,
    deleteSetting
} from "../controllers/systemSettingController.js";

import {
    createSystemSettingValidator,
    updateSystemSettingValidator
} from "../validators/systemSettingValidator.js";

import { mongoIdValidator } from "../validators/commonValidator.js";
import { validate } from "../middleware/validate.js";
import { asyncHandler } from "../middleware/asyncHandler.js";

const router = Router();

router.get(
    "/",
    asyncHandler(getSettings)
);

router.get(
    "/:id",
    mongoIdValidator,
    validate,
    asyncHandler(getSetting)
);

router.post(
    "/",

    /*
    #swagger.tags = ['System Settings']
    #swagger.summary = 'Create system setting'

    #swagger.parameters['body'] = {
        in: 'body',
        required: true,
        schema: {
            key: "maintenance_mode",
            value: "false",
            description: "Controls system maintenance state"
        }
    }
    */

    createSystemSettingValidator,
    validate,
    asyncHandler(createSetting)
);

router.put(
    "/:id",

    /*
    #swagger.tags = ['System Settings']
    #swagger.summary = 'Update system setting'

    #swagger.parameters['body'] = {
        in: 'body',
        required: true,
        schema: {
            key: "maintenance_mode",
            value: "true",
            description: "Updated system maintenance state"
        }
    }
    */

    mongoIdValidator,
    updateSystemSettingValidator,
    validate,
    asyncHandler(updateSetting)
);

router.delete(
    "/:id",
    mongoIdValidator,
    validate,
    asyncHandler(deleteSetting)
);

export default router;