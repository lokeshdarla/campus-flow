import axios from "axios";
import jwt from "jsonwebtoken";

import { db } from "../../db/db";
import { Users } from "../../db/schema";

const GOOGLE_AUTH_URL = "https://oauth2.googleapis.com/token";
const GOOGLE_USER_INFO_URL = "https://www.googleapis.com/oauth2/v2/userinfo";
const TOKEN_EXPIRATION = "7d";
const SCOPES = [
  "https://www.googleapis.com/auth/userinfo.profile",
  "https://www.googleapis.com/auth/userinfo.email",
];

interface GoogleAccessTokenResponse {
  access_token: string;
  refresh_token: string;
}

export const fetchGoogleAccessToken = async (code: string) => {
  const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
  const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
  const REDIRECT_URI = process.env.GOOGLE_REDIRECT_URL;

  if (!CLIENT_ID || !CLIENT_SECRET || !REDIRECT_URI) {
    throw new Error("Google OAuth is not properly configured");
  }

  return await axios.post<GoogleAccessTokenResponse>(GOOGLE_AUTH_URL, null, {
    params: {
      code,
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      grant_type: "authorization_code",
      redirect_uri: REDIRECT_URI,
      scope: SCOPES.join(" "),
    },
  });
};

interface GoogleUserInfoResponse {
  id: string;
  email: string;
  verified_email: boolean;
  name: string;
  given_name: string;
  family_name: string;
  picture: string;
}

export const fetchGoogleUserInfo = async (accessToken: string) => {
  return await axios.get<GoogleUserInfoResponse>(GOOGLE_USER_INFO_URL, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

interface User {
  id: string;
  email: string;
  profile_url: string | null;
  role: "CLUB" | "STUDENT";
  created_at: Date | null;
}

export const getUserByEmail = async (
  email: string
): Promise<User | undefined> => {
  try {
    return (await db.query.Users.findFirst({ where: (Users, { eq }) => eq(Users.email, email), })) ?? undefined;
  } catch (error) {
    throw new Error("Error retrieving user by email: " + error);
  }
};

export const generateJWTToken = (user: User): string => {
  const jwtSecret = process.env.JWT_SECRET;

  if (!jwtSecret) {
    throw new Error("JWT Secret is not properly configured");
  }

  try {
    return jwt.sign(
      {
        id: user.id,
        emailAddress: user.email,
        photoURL: user.profile_url,
        role: user.role,
      },
      jwtSecret,
      {
        expiresIn: TOKEN_EXPIRATION,
      },
    );
  } catch (error) {
    throw new Error("Error generating JWT token" + error);
  }
};
