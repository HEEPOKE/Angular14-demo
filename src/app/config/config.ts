import * as dotenv from "dotenv";

dotenv.config();

const { ENDPOINT_URL } = process.env

const config = {
  ENDPOINT_URL
}

export default config;
