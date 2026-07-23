// this is the base model for all other models to avoid 
// repeated lines of codes in the different files

import { ObjectId } from "mongodb";

import { getDatabase } from "../database/mongodb.js";

export async function findAll(collection) {
    const db = getDatabase();

    return await db.collection(collection).find().toArray();
}

export async function findById(collection, id) {
    const db = getDatabase();

    return await db.collection(collection).findOne({
        _id: new ObjectId(id)
    });
}

export async function findOne(collection, query) {
    const db = getDatabase();

    return await db.collection(collection).findOne(query);
}

export async function create(collection, document) {
    const db = getDatabase();

    document.created_at = new Date();
    document.updated_at = new Date();

    return await db.collection(collection).insertOne(document);
}

export async function update(collection, id, document) {
    const db = getDatabase();

    document.updated_at = new Date();

    return await db.collection(collection).updateOne(
        { _id: new ObjectId(id) },
        { $set: document }
    );
}

export async function remove(collection, id) {
    const db = getDatabase();

    return await db.collection(collection).deleteOne({
        _id: new ObjectId(id)
    });
}