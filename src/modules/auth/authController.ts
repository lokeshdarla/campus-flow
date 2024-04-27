import { Request, Response } from "express";
import {
  fetchGoogleAccessToken,
  fetchGoogleUserInfo,
  generateJWTToken,
  getUserByEmail,
} from "./authService";
require('dotenv').config();

const frontendUrl = process.env.CLIENT_BASE_URL as string;

export const googleOAuthHandler = async (req: Request, res: Response) => {
  try {
    if (!frontendUrl) {
      const errorMessage = "Frontend URL not configured";
      console.error(errorMessage, process.env.CLIENT_BASE_URL);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    const { code } = req.query;

    if (!code) {
      const errorMessage = "Invalid request. Please try again";
      return res.redirect(`${frontendUrl}/login?error=${errorMessage}`);
    }

    const tokenResponse = await fetchGoogleAccessToken(code as string);
    const userData = await fetchGoogleUserInfo(tokenResponse.data.access_token);
    const user = await getUserByEmail(userData.data.email);

    if (!user) {
      const errorMessage =
        "User not found. Please SignIn with your SRM email ID";
      return res.redirect(`${frontendUrl}/login?error=${errorMessage}`);
    }

    const currentUser = user;
    const jwtToken = generateJWTToken(currentUser);
    let redirectURL = `${frontendUrl}/student/track-outing`;

    switch (currentUser.role) {
      case "STUDENT":
        redirectURL = `${frontendUrl}/student/dashboard`;
        break;
      case "CLUB":
        redirectURL = `${frontendUrl}/club/dashboard`;
        break;
    }

    return res.redirect(`${redirectURL}?token=${jwtToken}`);
  } catch (error) {
    const errorMessage = "Error handling OAuth callback: " + error;
    console.error(errorMessage);
    return res.redirect(`${frontendUrl}/login?error=${errorMessage}`);
  }
};
