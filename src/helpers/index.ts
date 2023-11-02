import crypto from "crypto";

const SECRET = "REST-API-SECRET";

// criar o randomizer

export const random = () => crypto.randomBytes(128).toString("base64"); // ou deixo hex ?
export const authentication = (salt: string, password: string) => {
  return crypto
    .createHmac("sha256", [salt, password].join("/"))
    .update(SECRET)
    .digest("hex");
};
