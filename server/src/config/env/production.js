// This object should mimic the structure of the object in env/development, but should use env properties
// Remember to set these env properties in the environment in which you deploy (AWS, Heroku, etc.)
// Also set the NODE_ENV environment property to "production" (no quotes) in AWS, Heroku, etc.
let cfg = {
    MONGODB_URI: process.env.MONGODB_URI,
    MAILGUN_API_KEY: process.env.MAILGUN_API_KEY,
    MAILGUN_DOMAIN: process.env.MAILGUN_DOMAIN,
    EMAIL: process.env.EMAIL
};

export { cfg };