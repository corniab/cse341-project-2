import { Schema } from 'mongoose';
import connection from './connection.db';

const punchSchema = new Schema({
  type: String,
  throatWidth: String,
  punchRadius: String,
  punchAngle: String,
  punchDepth: String,
});

const Punch = connection.client.model('Punch', punchSchema);

export async function findAllPunches() {
  const materials = await Punch.find({});
  return materials;
}

export async function findPunchById(id: string) {
  const material = await Punch.findById(id);
  return material;
}

export async function insertNewPunch(newDie: object) {
  const result = await Punch.create(newDie);
  return result;
}

export async function updatePunch(id: string, requestBody: object) {
  const result = await Punch.updateOne({ _id: id }, requestBody);
  return result;
}

export async function deletePunch(id: string) {
  const result = await Punch.deleteOne({ _id: id });
  return result;
}
