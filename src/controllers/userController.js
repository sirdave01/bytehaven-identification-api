// this is the user controller

import * as User from "../models/users.js";

import {

    successResponse,

    createdResponse,

    notFoundResponse

} from "../utils/response.js";



export const getUsers = async (req,res)=>{

    const users = await User.getAllUsers();

    return successResponse(

        res,

        "Users retrieved successfully",

        users

    );

};



export const getUser = async(req,res)=>{

    const user = await User.getUserById(

        req.params.id

    );

    if(!user)

        return notFoundResponse(

            res,

            "User not found"

        );

    return successResponse(

        res,

        "User retrieved successfully",

        user

    );

};



export const createUser = async(req,res)=>{

    const result = await User.createUser(

        req.body

    );

    return createdResponse(

        res,

        "User created successfully",

        result

    );

};



export const updateUser = async (req, res) => {

    const result = await User.updateUser(
        req.params.id,
        req.body
    );

    if (result.matchedCount === 0) {

        return notFoundResponse(
            res,
            "User not found"
        );

    }

    return successResponse(
        res,
        "User updated successfully",
        {
            matchedCount: result.matchedCount,
            modifiedCount: result.modifiedCount
        }
    );

};

export const deleteUser = async (req, res) => {

    const result = await User.deleteUser(
        req.params.id
    );

    if (result.deletedCount === 0) {

        return notFoundResponse(
            res,
            "User not found"
        );

    }

    return successResponse(
        res,
        "User deleted successfully",
        {
            deletedCount: result.deletedCount
        }
    );

};