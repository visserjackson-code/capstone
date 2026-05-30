import mongoose from "mongoose";

const encounterSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    game: {
        type: String,
        required: true
    },
    pokemon: {
        type: String,
        required: true
    },
    nickname: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    alive: {
        type: Boolean,
        default: true
    }
}, {timestamps: true})

export default mongoose.model("Encounter", encounterSchema)