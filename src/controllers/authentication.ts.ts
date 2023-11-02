import express from "express";

import { getUserByEmail, createUser } from "../db/users";
import { authentication, random } from "../helpers";

export const register = async (req: express.Request, res: express.Response) => {
  try {
    // const { username, email, password } = req.body;
    const { email, password, username } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ error: "Bad request" });
    }

    const existingUser = await getUserByEmail(email);

    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    const salt = random();
    const user = await createUser({
      email,
      username,
      authentication: {
        password: authentication(salt, password),
        salt,
      },
    });

    return res.status(200).json(user).end();
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: "Bad request" });
  }
};
