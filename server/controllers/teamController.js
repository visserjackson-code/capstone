import Team from "../models/Team.js";

export const getTeams = async (req, res) => {
  try {
    const teams = await Team.find({userId: req.userId});
    res.status(200).json(teams);
  } catch (err) {
    res.status(500).json({message: "Server error", error: err.message});
  }
};

export const saveTeam = async (req, res) => {
  const {game, slots} = req.body;

  try {
    const team = await Team.findOneAndUpdate(
      {userId: req.userId, game},
      {slots},
      {upsert: true, new: true}, //upsert to account for new teams being created
    );

    res.status(200).json(team);
  } catch (err) {
    res.status(500).json({message: "Server error", error: err.message});
  }
};
