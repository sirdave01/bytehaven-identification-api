// this is the systemSettings model that will import all from the base model file and extend it

import * as BaseModel from "./base.js";

const COLLECTION = "system_settings";

export const getAllSettings = () =>
    BaseModel.findAll(COLLECTION);

export const getSettingsById = (id) =>
    BaseModel.findById(COLLECTION, id);

export const createSetting = (setting) =>
    BaseModel.create(COLLECTION, setting);

export const updateSetting = (id, setting) =>
    BaseModel.update(COLLECTION, id, setting);

export const deleteSetting = (id) =>
    BaseModel.remove(COLLECTION, id);