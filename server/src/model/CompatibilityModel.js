const mongoose = require("mongoose");

const applicantSchema = new mongoose.Schema({
  name: String,
  attributes: {
    intelligence: Number,
    strength: Number,
    endurance: Number,
    spicyFoodTolerance: Number,
  },
});

const teamMemberSchema = new mongoose.Schema({
  name: String,
  attributes: {
    intelligence: Number,
    strength: Number,
    endurance: Number,
    spicyFoodTolerance: Number,
  },
});

const compatibilityScoreSchema = new mongoose.Schema({
  applicant: { type: mongoose.Schema.Types.ObjectId, ref: "Applicant" },
  name: String,
  score: Number,
});

const Applicant = mongoose.model("Applicant", applicantSchema);
const TeamMember = mongoose.model("TeamMember", teamMemberSchema);
const CompatibilityScore = mongoose.model(
  "CompatibilityScore",
  compatibilityScoreSchema
);

module.exports = { Applicant, TeamMember, CompatibilityScore };
