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

import { isAuthenticated } from "../middleware/isAuthenticated.js";

const router = Router();

router.get(
    "/",
    getSettings
);

router.get(
    "/:id",
    mongoIdValidator,
    validate,
    getSetting
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
    isAuthenticated,
    createSystemSettingValidator,
    validate,
    createSetting
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
    isAuthenticated,
    mongoIdValidator,
    updateSystemSettingValidator,
    validate,
    updateSetting
);

router.delete(
    "/:id",
    isAuthenticated,
    mongoIdValidator,
    validate,
    deleteSetting
);

export default router;