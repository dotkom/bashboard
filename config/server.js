module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  cron: { enabled: false },
  admin: { autoOpen: false },
  url: "http://localhost:1337",
});
