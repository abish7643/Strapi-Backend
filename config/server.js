module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: 'https://threeiinc-strapi.herokuapp.com',
  admin: {
    auth: {
      url: '/',
      serveAdminPanel: false,
      secret: env('ADMIN_JWT_SECRET', 'a4412ca835c04da0c0dd182e392ad78e'),
    },
  },
});
