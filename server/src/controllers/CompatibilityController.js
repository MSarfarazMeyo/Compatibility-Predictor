const {
  TeamMember,
  Applicant,
  CompatibilityScore,
} = require("../model/CompatibilityModel");

const inputData = async (req, res) => {
  const team = req.body.team;
  const applicants = req.body.applicants;

  const scoredApplicants = applicants.map((applicant) => {
    const score = calculateScore(applicant.attributes, team);
    return { name: applicant.name, score: score };
  });

  let newTeam;
  let newApplicants;
  let newCompatibilityScore;

  try {
    newTeam = team.map((doc) => new TeamMember(doc));
    newApplicants = applicants.map((doc) => new Applicant(doc));
    newCompatibilityScore = scoredApplicants.map(
      (doc) => new CompatibilityScore(doc)
    );

    await Applicant.insertMany(newApplicants);
    await TeamMember.insertMany(newTeam);
    const savedCompatibilityScore = await CompatibilityScore.insertMany(
      newCompatibilityScore
    );

    if (!newTeam || !newApplicants) {
      res.status(501).json({ message: "unable to add" });
    }

    res.status(200).json(savedCompatibilityScore);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Function to calculate compatibility score
function calculateScore(attributes, team) {
  const teamScores = team.map((member) => {
    const attributeKeys = Object.keys(attributes);
    let sum = 0;
    attributeKeys.forEach((key) => {
      sum += Math.abs(member.attributes[key] - attributes[key]);
    });
    return sum;
  });

  const minScore = Math.min(...teamScores);
  const maxScore = Math.max(...teamScores);

  if (minScore === maxScore) {
    return 1;
  }

  const applicantScore = teamScores.indexOf(minScore);
  const range = maxScore - minScore;
  const score = 1 - applicantScore / range;

  return score.toFixed(2);
}

module.exports = { inputData };
