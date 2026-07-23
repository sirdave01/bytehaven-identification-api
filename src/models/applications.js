// this is the applications model that will import all from the base model file and extend it

import * as BaseModel from "./base.js";

const COLLECTION = "applications";

export const getAllApplications = () =>
    BaseModel.findAll(COLLECTION);

export const getApplicationsById = (id) =>
    BaseModel.findById(COLLECTION, id);

export const createApplication = (application) =>
    BaseModel.create(COLLECTION, application);

export const updateApplication = (id, application) =>
    BaseModel.update(COLLECTION, id, application);

export const deleteApplication = (id) =>
    BaseModel.remove(COLLECTION, id);