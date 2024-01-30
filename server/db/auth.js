const passport = require("passport");
const { user } = require("../models");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

const opts = {};

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = "Random String";
require("dotenv").config({
  path: "config/.env",
});
const jwtStrategy = new JwtStrategy(opts, function (jwt_payload, done) {
  console.log(jwt_payload);
  user
    .findOne({ where: { email: jwt_payload.email } })
    .then((user) => {
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    })
    .catch((err) => done(err, false));
});

const googleStrategy = new GoogleStrategy(
  {
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: process.env.CLIENT_CALLBACK_URL,
  },
  async (accessToken, refreshToken, profile, cb) => {
    try {
      const user = await user.findOne({ googleId: profile.id });
      if (!user) {
        const newUser = await user.create({
          googleId: profile.id,
          name: profile.displayName,
        });
        return cb(null, newUser);
      } else {
        return cb(null, user);
      }
    } catch (err) {
      return cb(err, null);
    }
  }
);

passport.use("jwt", jwtStrategy);
passport.use("google", googleStrategy);

module.exports = { jwtStrategy, googleStrategy };
