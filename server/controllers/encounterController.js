import Encounter from "../models/Encounter.js";

export const getEncounters = async (req, res) => {
  try {
    const encounters = await Encounter.find({
      userId: req.userId,
      game: req.params.game,
    });
    res.status(200).json(encounters);
  } catch (err) {
    res.status(500).json({message: "Server error", error: err.message});
  }
};

export const addEncounter = async (req, res) => {
  const {game, pokemon, nickname, location} = req.body;

  try {
    const encounter = await Encounter.create({
      userId: req.userId,
      game,
      pokemon,
      nickname,
      location,
      alive: true, //encounters start as alive by default
    });
    res.status(201).json(encounter);
  } catch (err) {
    res.status(500).json({message: "Server error", error: err.message});
  }
};

//changes an encounter from alive to dead and vice versa
export const toggleEncounter = async (req, res) => {
  try {
    const encounter = await Encounter.findOne({
      _id: req.params.id,
      userId: req.userId,
    });
    if (!encounter)
      return res.status(404).json({message: "Encounter not found"});

    encounter.alive = !encounter.alive;
    await encounter.save();
    res.status(200).json(encounter);
  } catch (err) {
    res.status(500).json({message: "Server error", error: err.message});
  }
};

export const deleteEncounter = async (req, res) => {
  try {
    await Encounter.findOneAndDelete({_id: req.params.id, userId: req.userId});
    res.status(200).json({message: "Deleted"});
  } catch (err) {
    res.status(500).json({message: "Server error", error: err.message});
  }
};
