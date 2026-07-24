import { Router } from "express";

import userRoutes from "./userRoutes.js";
import roleRoutes from "./roleRoutes.js";
import applicationRoutes from "./applicationRoutes.js";
import systemSettingRoutes from "./systemSettingRoutes.js";

const router = Router();

router.use("/users", userRoutes);
router.use("/roles", roleRoutes);
router.use("/applications", applicationRoutes);
router.use("/system-settings", systemSettingRoutes);

export default router;