module.exports = ({ env }) => ({
  // -------------Cloudinary-------------
  upload: {
    provider: "cloudinary",
    providerOptions: {
      cloud_name: env("CLOUDINARY_NAME"),
      api_key: env("CLOUDINARY_KEY"),
      api_secret: env("CLOUDINARY_SECRET"),
    },
  },
  // ------------------------------------
  // -------------SendGrid---------------
  email: {
    provider: "sendgrid",
    providerOptions: {
      apiKey: env("SENDGRID_API_KEY"),
    },
    settings: {
      defaultFrom: "admin@3iinc.xyz",
      defaultReplyTo: "admin@3iinc.xyz",
    },
  },
  // ------------------------------------
  // -------------NodeMailer-------------
  // email: {
  //   provider: "nodemailer",
  //   providerOptions: {
  //     host: env("SMTP_HOST"),
  //     port: env("SMTP_PORT"),
  //     secure: env("SMTP_SECURE"),
  //     auth: {
  //       // username: env("SMTP_USERNAME"),
  //       // password: env("SMTP_PASSWORD"),
  //       type: "OAuth2",
  //       user: env("SMTP_USERNAME"),
  //       clientId: env("CLIENT_ID"),
  //       clientSecret: env("CLIENT_SECRET"),
  //       // refreshToken: "REFRESH_TOKEN_HERE",
  //     },
  //   },
  //   settings: {
  //     defaultFrom: "admin@3iinc.xyz",
  //     defaultReplyTo: "admin@3iinc.xyz",
  //   },
  // },
  // ------------------------------------
});
