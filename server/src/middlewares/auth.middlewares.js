import {
  validateAccessToken,
} from "../utlis/auth.utils.js";

export const authenticate = (req, res, next) => {
  const accessToken = req.headers.authorization?.split(" ")[1];

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

export const authoriseEmployer = async(req, res, next)=> {
  if(req.user.role !== "recruiter"){
    return res.status(403).json({
      message: "Unauthorised Access"
    })
  }

  next();
}
