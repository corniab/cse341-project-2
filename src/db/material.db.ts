import { Schema } from 'mongoose';
import connection from './connection.db';

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

const Material = connection.client.model('Material', materialSchema);

export async function findAllMaterials() {
  const materials = await Material.find({});
  return materials;
}

export async function findMaterialById(id: string) {
  const material = await Material.findById(id);
  return material;
}

export async function insertNewMaterial(newMaterial: object) {
  const result = await Material.create(newMaterial);
  return result;
}

export async function updateMaterial(id: string, requestBody: object) {
  const result = await Material.updateOne({ _id: id }, requestBody);
  return result;
}

export async function deleteMaterial(id: string) {
  const result = await Material.deleteOne({ _id: id });
  return result;
}
