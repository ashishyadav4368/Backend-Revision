import mongoose from "mongoose";

const medicalRecordSchema = new mongoose.Schema({}, { timestamps: true })

export const MediCalRecord = mongoose.model("MedicalRecord", medicalRecordSchema)