import { resolveSoa } from "dns";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";
import { profile } from "console";

//Signup Controller

export const signup = async (req, res) => {
  try {
    const { username, fullName, password, confirmPassword, gender } = req.body;
    if (password !== confirmPassword)
      return res.status(400).json({ error: "Passwords don't matched" });
    const user = await User.findOne({ username });

    if (user) return res.status(400).json({ error: "Username already exists" });
    //hash password here
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);

    const boy_dp = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girl_dp = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = new User({
      fullName,
      username,
      password: hashed,
      gender,
      profilPic: gender === "male" ? boy_dp : girl_dp,
    });

    if (newUser) {
      //genearte JWT token here
      generateTokenAndSetCookie(newUser._id, res);

      await newUser.save();
      console.log("User saved successfully:", newUser);
      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        profilePic: newUser.profilePic,
        password: hashed,
        createdAt: newUser.createdAt,
      });
    } else {
      res.status(400).json({ error: "invalid user data" });
    }
  } catch (err) {
    console.log("Error in signup Controller ", err.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//Login controller

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username: username });
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user?.password || ""
    ); //if user not exists it will compare password with emoty string

    if (!user || !isPasswordCorrect) {
      return res.status(400).json({ error: "Invalid username or password" });
    }
    //generate Token
    generateTokenAndSetCookie(user._id, res);
    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      username: user.username,
      profilePic: user.profilePic,
      // createdAt:newUser.createdAt
    });
  } catch (err) {
    console.log("Error in Login Controller ", err.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//Logout controller

export const logout = (req, res) => {
  try {
    //remove Token
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged Out SuccesFully" });
  } catch (err) {
    console.log("Error in logout Controller ", err.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
