// This is the user controller
// Handles all user-related business logic before passing
// database operations to the user model

import * as User from "../models/users.js";

import bcrypt from "bcrypt";

import { asyncHandler } from "../middleware/asyncHandler.js";

import {
    successResponse,
    createdResponse,
    notFoundResponse
} from "../utils/response.js";


// Number of bcrypt salt rounds used for password hashing
// Higher values increase security but also increase processing time
const SALT_ROUNDS = 10;



// =======================================
// Get all users
// =======================================
// Retrieves all users from the database
// Public/Protected access will be controlled at the route level

export const getUsers = asyncHandler(async (req, res) => {

    const users = await User.getAllUsers();

    return successResponse(
        res,
        "Users retrieved successfully",
        users
    );

});



// =======================================
// Get single user by ID
// =======================================
// Retrieves one user using MongoDB ObjectId

export const getUser = asyncHandler(async (req, res) => {

    const user = await User.getUserById(
        req.params.id
    );


    if (!user) {

        return notFoundResponse(
            res,
            "User not found"
        );

    }


    return successResponse(
        res,
        "User retrieved successfully",
        user
    );

});



// =======================================
// Create new user
// =======================================
// Hashes password before saving.
// OAuth users can have password = null.

export const createUser = asyncHandler(async (req, res) => {


    const user = {

        ...req.body,

        password: req.body.password
            ? await bcrypt.hash(
                req.body.password,
                SALT_ROUNDS
            )
            : null

    };


    const result = await User.createUser(user);


    return createdResponse(
        res,
        "User created successfully",
        result
    );

});



// =======================================
// Update user
// =======================================
// Updates existing user information by ID

export const updateUser = asyncHandler(async (req, res) => {


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

});



// =======================================
// Delete user
// =======================================
// Permanently removes a user from database

export const deleteUser = asyncHandler(async (req, res) => {


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

});