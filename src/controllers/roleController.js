// this is the roles controller

import * as Role from "../models/roles.js";

import {

    successResponse,

    createdResponse,

    notFoundResponse

} from "../utils/response.js";

// =======================================
// Get all roles
// =======================================
// Retrieves all roles from the database
// Public/Protected access will be controlled at the route level

export const getRoles = asyncHandler(async (req, res) => {

    const roles = await Role.getAllRoles();

    return successResponse(

        res,

        "Roles retrieved successfully",

        roles

    );

});

// =======================================
// Get single roles by ID
// =======================================
// Retrieves one roles using MongoDB ObjectId

export const getRole = asyncHandler(async (req, res) => {

    const role = await Role.getRoleById(

        req.params.id

    );

    if (!role)

        return notFoundResponse(

            res,

            "Role not found"

        );

    return successResponse(

        res,

        "Role retrieved successfully",

        role

    );

});

// =======================================
// Create new roles
// ======================================= 

export const createRole = asyncHandler(async (req, res) => {

    const result = await Role.createRole(

        req.body

    );

    return createdResponse(

        res,

        "Role created successfully",

        result

    );

});

// =======================================
// Update roles
// =======================================
// Updates existing roles information by ID 

export const updateRole = asyncHandler(async (req, res) => {

    const result = await Role.updateRole(

        req.params.id,

        req.body

    );

    if (result.matchedCount === 0)

        return notFoundResponse(

            res,

            "Role not found"

        );

    return successResponse(

        res,

        "Role updated successfully",

        result

    );

});

// =======================================
// Delete role
// =======================================
// Permanently removes a role from database 

export const deleteRole = asyncHandler(async (req, res) => {

    const result = await Role.deleteRole(

        req.params.id

    );

    if (result.deletedCount === 0)
        return notFoundResponse(

            res,

            "Role not found"

        );

    return successResponse(

        res,

        "Role deleted successfully",

        result

    );

});