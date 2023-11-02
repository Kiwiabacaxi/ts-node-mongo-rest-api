import express from "express";
import { merge, get } from "lodash";

import { getUserBySessionToken } from "../db/users";

export const isAuthenticated = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    const sessionToken = req.cookies["KIWI-AUTH"]; // vem da rota de login

    if (!sessionToken) {
      return res.sendStatus(403).json({ message: "No session token" });
    }

    const existingUser = await getUserBySessionToken(sessionToken);

    if (!existingUser) {
      return res.sendStatus(403).json({ message: "Invalid session token" });
    }

    merge(req, { identity: existingUser });

    return next();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400).json({ message: "Invalid session token" });
  }
};

export const isOwner = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    const { id } = req.params;
    const currentUserId = get(req, "identity._id") as string;

    if (!currentUserId) {
      return res.sendStatus(400).json({ message: "Invalid session token" });
    }

    if (currentUserId.toString() !== id) {
      return res.sendStatus(403).json({ message: "Not owner" });
    }

    next();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400).json({ message: "Invalid session token" });
  }
};
