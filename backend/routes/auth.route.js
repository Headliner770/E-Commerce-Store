import express from "express";

const router = express.Router();

router.get("/signup", (req, res) => {
  res.send("Sign up route called");
});

router.get("/login", (req, res) => {
  res.send("Login up route called");
});

router.get("/logout", (req, res) => {
  res.send("Logout up route called");
});

export default router;
