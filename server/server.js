import express from "express"
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";
// import authRoutes from "./routes/authRoutes.js"
// import teamRoutes from "./routes/teamRoutes.js"
// import encounterRoutes from "./routes/encounterRoutes.js"



const app = express();

app.use(cors());
app.use(express.json);

// app.use("/api/auth", authRoutes);
// app.use("/api/teams", teamRoutes);
// app.use("./api/encounters", encounterRoutes);

// eslint-disable-next-line no-undef
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB connected"))
.catch(err => console.error(err));

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

