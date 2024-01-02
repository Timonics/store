//protecting our APIs: verifies JWTs (token)
const { expressjwt: jwt } = require("express-jwt");

function authJwt() {
  const secret = process.env.JWT_SECRET_KEY;
  const api = process.env.API_URL;

  return (
    jwt({
      secret,
      algorithms: ["HS256"],
      //Revoking the token if the user is not an admin
      isRevoked: async function (req, token) {
        if (!token.payload.isAdmin) {
          return true;
        }
      },
    })
      //excluding protection from this routes...
      .unless({
        path: [
          { url: /\/api\/v1\/products(.*)/, methods: ["GET", "OPTIONS"] },
          { url: /\/api\/v1\/category(.*)/, methods: ["GET", "OPTIONS"] },
          `${api}users/login`,
          `${api}users/register`,
        ],
      })
  );
}

module.exports = authJwt;
