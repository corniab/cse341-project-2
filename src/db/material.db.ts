import mongoose, { Schema } from "mongoose";
import { connection } from "./connection.db";

const materialSchema = new Schema({
  type: String,
  grade: String,
  thickness: String,
  weightPerSqFoot: String,
  tensileStrength: String,
  sheetWidth: String,
  sheetHeight: String,
  millProcess: String,
  pricePerSqFoot: String,
});

const Material = connection.client.model("Material", materialSchema);

export async function findAllMaterials() {
  const materials = await Material.find({});
  return materials;
}

export async function insertNewMaterial(newMaterial: Object) {
  const result = await Material.create(newMaterial);
  return result;
}
