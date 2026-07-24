// this is the system setting controller

import * as Setting from "../models/systemSetting.js";

import {
    successResponse,
    createdResponse,
    notFoundResponse
} from "../utils/response.js";

export const getSystemSettings = async (req, res) => {

    const settings = await Setting.getAllSystemSettings();

    return successResponse(
        res,

        "Settings retrieved successfully",
        
        settings
        
    );
        
};
        
        
        
export const getSetting = async(req,res)=>{
        
    const setting = await Setting.getApplicationById(
        
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
        
};
        
        
        
export const createSetting = async(req,res)=>{
        
    const result = await Setting.createSetting(
        
        req.body
        
    );
        
    return createdResponse(
        
        res,
        
        "Setting created successfully",
        
        result
        
    );
        
};
        
        
        
export const updateSetting = async(req,res)=>{
        
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
        
};
        
        
        
export const deleteSetting = async(req,res)=>{
        
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
        
};