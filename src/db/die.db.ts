import mongoose, { Schema } from "mongoose";
import connection from "./connection.db";

const dieSchema = new Schema({
  type: String,
  width: String,
  veeWidth: String,
  veeAngle: String,
  maxMaterialThickness: String,
});

const Die = connection.client.model("Die", dieSchema);

export async function findAllDies() {
  const materials = await Die.find({});
  return materials;
}

export async function findDieById(id: String) {
  const material = await Die.findById(id);
  return material;
}

export async function insertNewDie(newDie: Object) {
  const result = await Die.create(newDie);
  return result;
}

export async function updateDie(id: String, requestBody: Object) {
  const result = await Die.updateOne({ _id: id }, requestBody);
  return result;
}

export async function deleteDie(id: String) {
  const result = await Die.deleteOne({ _id: id });
  return result;
}
