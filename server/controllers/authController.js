import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

// eslint-disable-next-line no-undef
const JWT_SECRET = process.env.JWT_SECRET;

export const register = async (req, res) => {
  const {email, password} = req.body;

  //validate password and check if email already exists
  try {
    if (password.length < 8) {
      return res
        .status(400)
        .json({message: "Password must be at least 8 characters."});
    }

    const existing = await User.findOne({email});
    if (existing) {
      return res.status(400).json({message: "Email already in use."});
    }

    const hashed = await bcrypt.hash(password, 10);
    const user = await User.create({email, password: hashed});

    //issue token for login if password is long enough and email does not already match another user

    const token = jwt.sign({userId: user._id}, JWT_SECRET, {expiresIn: "7d"});
    res.status(201).json({token, email: user.email});
  } catch (err) {
    res.status(500).json({message: "Server error", error: err.message});
  }
};

export const login = async (req, res) => {
    const {email, password} = req.body;

    try {
        const user = await User.findOne({email});
        if (!user) {
            return res.status(400).json({message: "Invalid credentials"}); //email does not exist in database
        }

        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return res.status(400).json({message: "Invalid credentials"}); //password does not match one in database
        }

        //issue token for login if credentials are valid
        const token = jwt.sign({userId: user._id}, JWT_SECRET, {expiresIn: "7d"});
        res.status(200).json({token, email: user.email});

    } catch (err) {
         res.status(500).json({message: "Server error", error: err.message})
    }
}

