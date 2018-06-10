const passport = require('passport');
const OAuth2 = require('passport-oauth2');

const OAuth2Strategy = OAuth2.Strategy;

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});

const passportConfig = passport.use(
  new OAuth2Strategy(
    {
      authorizationURL: 'https://www.example.com/oauth2/authorize',
      tokenURL: 'https://www.example.com/oauth2/token',
      clientID: '543159826603-3g033v1be2tg1t2201ue4l00h6g37slv.apps.googleusercontent.com',
      clientSecret: 'AQI10rA1vOysW7LEVXJT956Y',
      callbackURL: 'http://localhost:8080/auth/google/callback'
    },
    function(accessToken, refreshToken, profile, cb) {
      User.findOrCreate({ exampleId: profile.id }, function(err, user) {
        return cb(err, user);
      });
    }
  )
);

module.exports = passportConfig;
