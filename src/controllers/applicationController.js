// this is the application controller

import * as Application from "../models/applications.js";

import {

    successResponse,

    createdResponse,

    notFoundResponse

} from "../utils/response.js";

import { asyncHandler } from "../middleware/asyncHandler.js";

// =======================================
// Get all applications
// =======================================
// Retrieves all applications from the database
// Public/Protected access will be controlled at the route level

export const getApplications = asyncHandler(async (req,res)=>{

    const applications = await Application.getAllApplications();

    return successResponse(

        res,

        "Applications retrieved successfully",

        applications

    );

});

// =======================================
// Get single applications by ID
// =======================================
// Retrieves one applications using MongoDB ObjectId

export const getApplication = asyncHandler(async(req,res)=>{

    const application = await Application.getApplicationById(

        req.params.id

    );

    if(!application)

        return notFoundResponse(

            res,

            "Application not found"

        );

    return successResponse(

        res,

        "Application retrieved successfully",

        application

    );

});

// =======================================
// Create new applications
// =======================================

export const createApplication = asyncHandler(async(req,res)=>{

    const result = await Application.createApplication(

        req.body

    );

    return createdResponse(

        res,

        "Application created successfully",

        result

    );

});

// =======================================
// Update applications
// =======================================
// Updates existing applications information by ID 

export const updateApplication = asyncHandler(async(req,res)=>{

    const result = await Application.updateApplication(

        req.params.id,

        req.body

    );

    if (result.matchedCount === 0)

        return notFoundResponse(
            res,
            "Application not found"
        );

    return successResponse(

        res,

        "Application updated successfully",

        result

    );

});

// =======================================
// Delete application
// =======================================
// Permanently removes a application from database 

export const deleteApplication = asyncHandler(async(req,res)=>{

    const result = await Application.deleteApplication(

        req.params.id

    );

    if (result.deletedCount === 0)

        return notFoundResponse(

            res,
            "Application not found"
        );

    return successResponse(

        res,

        "Application deleted successfully",

        result

    );

});