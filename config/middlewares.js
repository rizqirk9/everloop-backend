module.exports = [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  {
    name: "strapi::cors",
    config: {
      enabled: true,
      origin: ["http://localhost:3000", "https://everloop.nashirjamali.com"],
      headers: ["Content-Type", "Authorization", "Access-Control-Allow-Origin"],
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
