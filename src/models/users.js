// this is the users model that will import all from the base model file and extend it

import * as BaseModel from "./base.js";

const COLLECTION = "users";

export const updateUserByGithubId = (githubId, user) =>
    BaseModel.updateOne(
        COLLECTION,
        { github_id: githubId },
        user
    );

export const updateUserByEmail = (email, user) =>
    BaseModel.updateOne(
        COLLECTION,
        { email },
        user
    );

export const getAllUsers = () =>
    BaseModel.findAll(COLLECTION);

export const getUserById = (id) =>
    BaseModel.findById(COLLECTION, id);

export const createUser = (user) =>
    BaseModel.create(COLLECTION, user);

export const updateUser = (id, user) =>
    BaseModel.update(COLLECTION, id, user);

export const deleteUser = (id) =>
    BaseModel.remove(COLLECTION, id);

