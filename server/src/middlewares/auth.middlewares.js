import userModel from "../models/auth.model";
import {
  generateTokens,
  validateAccessToken,
  validateRefreshToken,
} from "../utlis/auth.utils";

export const authenticate = async (req, res, next) => {
  const { accessToken } = req.headers.authorization?.split(" ")[1];

  if(!accessToken){
    return res.status(400).json({
        message: "Access Token not found"
    })
  }

  try {
    const decoded = validateAccessToken(accessToken);
    req.user = decoded;

    next();
  } catch (error) {
    return res.status(401).json({
      message: "Invalid access or refresh token",
    });
  }
};
