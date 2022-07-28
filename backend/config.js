import dotenv from "dotenv";

dotenv.config();

export default {
  PORT: process.env.PORT || 5000,
  MONGODB_URL: process.env.MONGODB_URL || "mongodb://localhost/mern-project",
  GOOGLE_API_key: process.env.GOOGLE_API_key,
  PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID,
  accessKeyId: process.env.accessKeyId,
  secretAccessKey: process.env.secretAccessKey,
  MAILGUN_DOMAIN: process.env.MAILGUN_DOMAIN,
  JWT_SECTRET: process.env.JWT_SECTRET,
};
