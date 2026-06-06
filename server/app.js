import express from "express"
import cors from "cors";
import authRoutes from "./routes/authRoutes.js"
import teamRoutes from "./routes/teamRoutes.js"
import encounterRoutes from "./routes/encounterRoutes.js"



const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/teams", teamRoutes);
app.use("/api/encounters", encounterRoutes);

export default app;