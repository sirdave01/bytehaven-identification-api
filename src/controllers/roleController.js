// this is the roles controller

import * as Role from "../models/roles.js";

import {

    successResponse,

    createdResponse,

    notFoundResponse

} from "../utils/response.js";



export const getRoles = async (req, res) => {

    const roles = await Role.getAllRoles();

    return successResponse(

        res,

        "Roles retrieved successfully",

        roles

    );

};



export const getRole = async (req, res) => {

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

};



export const createRole = async (req, res) => {

    const result = await Role.createRole(

        req.body

    );

    return createdResponse(

        res,

        "Role created successfully",

        result

    );

};



export const updateRole = async (req, res) => {

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

};



export const deleteRole = async (req, res) => {

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

};