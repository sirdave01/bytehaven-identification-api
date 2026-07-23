// this is the roles model that will import all from the base model file and extend it

import * as BaseModel from "./base.js";

const COLLECTION = "roles";

export const getAllRoles = () =>
    BaseModel.findAll(COLLECTION);

export const getRoleById = (id) =>
    BaseModel.findById(COLLECTION, id);

export const createRole = (role) =>
    BaseModel.create(COLLECTION, role);

export const updateRole = (id, role) =>
    BaseModel.update(COLLECTION, id, role);

export const deleteRole = (id) =>
    BaseModel.remove(COLLECTION, id);