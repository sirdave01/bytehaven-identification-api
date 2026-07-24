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
    createSystemSettingValidator,
    validate,
    asyncHandler(createSetting)
);

router.put(
    "/:id",
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