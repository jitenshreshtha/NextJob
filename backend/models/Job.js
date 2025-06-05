const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  jobTitle: { type: String, required: true },
  companyName: { type: String, required: true },
  jobDescription: { type: String, required: true },
  jobRequirements: { type: String, required: true },
  jobType: {
    type: String,
    required: true,
    enum: [
      "FullTime",
      "PartTime",
      "Contract",
      "Temporary",
      "Internship",
      "Volunteer",
    ],
  },
  experienceLevel: {
    type: String,
    enum: ["EntryLevel", "MidLevel", "SeniorLevel", "Executive"],
    default: "EntryLevel",
  },
  educationLevel: {
    type: String,
    enum: [
      "None",
      "HighSchool",
      "AssociateDegree",
      "BachelorsDegree",
      "MastersDegree",
      "Doctorate",
    ],
    default: "None",
  },
  remotePolicy: {
    type: String,
    enum: ["Onsite", "Remote", "Hybrid", "flexible"],
    default: "Onsite",
  },
  location: { type: String, required: true },
  salaryRangeMin: Number,
  salaryRangeMax: Number,
  benefits: [String],
  applicationDeadline: Date,
  applicationEmail: String,
  contactName: String,
  contactEmail: String,
  contactPhone: String,
});
module.exports = mongoose.model("Job", jobSchema);
