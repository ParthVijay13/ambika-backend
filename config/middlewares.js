module.exports = [
  'strapi::logger',
  'strapi::errors',
   {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': [
            "'self'", 
            'data:', 
            'blob:', 
            'market-assets.strapi.io', 
            'res.cloudinary.com'
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'market-assets.strapi.io',
            'res.cloudinary.com',
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  {
    name: 'strapi::cors',
    config: {
      headers: '*',
      origin: ['http://localhost:1337', 'http://localhost:3000', 'http://localhost:3001']
    }
  },

  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
