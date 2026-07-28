// this is the system setting controller

import { asyncHandler } from "../middleware/asyncHandler.js";
import * as Setting from "../models/systemSetting.js";

import {
    successResponse,
    createdResponse,
    notFoundResponse
} from "../utils/response.js";


// =======================================
// Get all settings
// =======================================
// Retrieves all settings from the database
// Public/Protected access will be controlled at the route level

export const getSettings = asyncHandler(async (req, res) => {

    const settings = await Setting.getAllSettings();

    return successResponse(
        res,

        "Settings retrieved successfully",
        
        settings
        
    );
        
});
        
// =======================================
// Get single settings by ID
// =======================================
// Retrieves one settings using MongoDB ObjectId    
        
export const getSetting = asyncHandler(async (req, res) => {
        
    const setting = await Setting.getSettingsById(
        
        req.params.id
        
    );
        
    if(!setting)
        
        return notFoundResponse(
        
            res,
        
            "Setting not found"
        
        );
        
    return successResponse(
        
        res,
        
        "Setting retrieved successfully",
        
        setting
        
    );
        
});
        
// =======================================
// Create new settings
// =======================================       
        
export const createSetting =asyncHandler(async(req,res)=>{
        
    const result = await Setting.createSetting(
        
        req.body
        
    );
        
    return createdResponse(
        
        res,
        
        "Setting created successfully",
        
        result
        
    );
        
});
        
// =======================================
// Update settings
// =======================================
// Updates existing settings information by ID       
        
export const updateSetting =asyncHandler(async(req,res)=>{
        
    const result = await Setting.updateSetting(
        
        req.params.id,
        
        req.body
        
    );

    if (result.matchedCount === 0)
        
        return notFoundResponse(

            res,
            "Setting not found"

        );
        
    return successResponse(
        
        res,
        
        "Setting updated successfully",
        
        result
        
    );
        
});
        
// =======================================
// Delete settings
// =======================================
// Permanently removes a settings from database       
        
export const deleteSetting =asyncHandler(async(req,res)=>{
        
    const result = await Setting.deleteSetting(
        
        req.params.id
        
    );

    if (result.deletedCount === 0)
        
        return notFoundResponse(

            res,
            "Setting not found"

        );
        
    return successResponse(
        
        res,
        
        "Setting deleted successfully",
        
        result
        
    );
        
});