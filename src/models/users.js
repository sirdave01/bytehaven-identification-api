// =======================================
// Users Model
// =======================================
// This file contains all user-related
// database operations.
// It uses BaseModel to avoid repeating
// MongoDB logic in every model file.


import * as BaseModel from "./base.js";


// Users collection name
const COLLECTION = "users";



// =======================================
// OAuth: Find user by GitHub ID
// =======================================
// Used by Passport to check whether
// this GitHub account already exists.

export const getUserByGithubId = (githubId) =>
    BaseModel.findOne(
        COLLECTION,
        {
            github_id: githubId
        }
    );



// =======================================
// OAuth: Find user by email
// =======================================
// Used to prevent duplicate accounts.
// If someone already has a BHID account
// with the same email, we link GitHub
// instead of creating another account.

export const getUserByEmail = (email) =>
    BaseModel.findOne(
        COLLECTION,
        {
            email
        }
    );



// =======================================
// OAuth: Update user by GitHub ID
// =======================================

export const updateUserByGithubId = (githubId, user) =>
    BaseModel.updateOne(
        COLLECTION,
        {
            github_id: githubId
        },
        user
    );



// =======================================
// OAuth: Update user by email
// =======================================

export const updateUserByEmail = (email, user) =>
    BaseModel.updateOne(
        COLLECTION,
        {
            email
        },
        user
    );



// =======================================
// Get all users
// =======================================

export const getAllUsers = () =>
    BaseModel.findAll(COLLECTION);



// =======================================
// Get user by MongoDB ID
// =======================================

export const getUserById = (id) =>
    BaseModel.findById(
        COLLECTION,
        id
    );



// =======================================
// Create user
// =======================================

export const createUser = (user) =>
    BaseModel.create(
        COLLECTION,
        user
    );



// =======================================
// Update user by MongoDB ID
// =======================================

export const updateUser = (id, user) =>
    BaseModel.update(
        COLLECTION,
        id,
        user
    );



// =======================================
// Delete user
// =======================================

export const deleteUser = (id) =>
    BaseModel.remove(
        COLLECTION,
        id
    );