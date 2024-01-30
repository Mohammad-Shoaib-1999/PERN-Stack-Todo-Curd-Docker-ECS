const express = require("express");
const router = express.Router();
const passport = require("passport");
const user = require("./../controllers/auth");

require("dotenv").config();

router.get("/", user.getAll);
router.post("/signup", user.register);
router.post("/signin", user.login);
router.get("/logout", user.logout);

router.get("/:id", passport.authenticate("jwt", { session: false }), user.get);

router.get(
  "/protected",
  passport.authenticate("jwt", { session: false }),
  user.protected
);
router.get("/", passport.authenticate("jwt", { session: false }), user.getAll);
router.put(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  user.updateUser
);
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  user.delete
);
router.delete(
  "/",
  passport.authenticate("jwt", { session: false }),
  user.deleteAll
);
router.get(
  "/admin",
  passport.authenticate("jwt", { session: false }),
  user.handleAdmin
);

router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile"] })
);

router.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  (req, res) => {
    res.redirect("/");
  }
);

router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/login",
    successRedirect: "/",
  })
);

module.exports = router;
