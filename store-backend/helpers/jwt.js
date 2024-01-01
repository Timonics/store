//protecting our APIs: verifies JWTs (token)
const { expressjwt: jwt } = require("express-jwt");

function authJwt() {
  const secret = process.env.JWT_SECRET_KEY;
  const api = process.env.API_URL;

  async function isRevoked(req, payload, done) {
    if (!payload.isAdmin) {
      return done(null, true);
    } else {
      done();
    }
  }

  return jwt({
    secret,
    algorithms: ["HS256"],
    isRevoked: isRevoked,
  }).unless({
    path: [
      { url: /\/api\/v1\/products(.*)/, methods: ["GET", "OPTIONS"] },
      { url: /\/api\/v1\/category(.*)/, methods: ["GET", "OPTIONS"] },
      `${api}users/login`,
      `${api}users/register`,
    ],
  });
}

module.exports = authJwt;
