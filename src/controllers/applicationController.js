// this is the application controller

import * as Application from "../models/applications.js";

import {

    successResponse,

    createdResponse,

    notFoundResponse

} from "../utils/response.js";



export const getApplications = async (req,res)=>{

    const applications = await Application.getAllApplications();

    return successResponse(

        res,

        "Applications retrieved successfully",

        applications

    );

};



export const getApplication = async(req,res)=>{

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

};



export const createApplication = async(req,res)=>{

    const result = await Application.createApplication(

        req.body

    );

    return createdResponse(

        res,

        "Application created successfully",

        result

    );

};



export const updateApplication = async(req,res)=>{

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

};



export const deleteApplication = async(req,res)=>{

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

};