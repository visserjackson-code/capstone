import mongoose from "mongoose";
import 'dotenv/config'
import app from "./app.js";

// eslint-disable-next-line no-undef -- to prevent VS code from complaining about process.env
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB connected"))
.catch(err => console.error(err));

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

