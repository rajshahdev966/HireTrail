import jwt from "jsonwebtoken"
import config from "../config/config.js"


export const generateTokens = ({id, role}) => {
    const accessToken = jwt.sign({id, role}, config.ACCESS_SECRET_TOKEN, {expiresIn: "15m"});

    const refreshToken = jwt.sign({id, role}, config.REFRESH_SECRET_TOKEN, {expiresIn: "7D"});

    return {accessToken, refreshToken};
}

export const validateAccessToken = (token)=> {
    const decoded = jwt.verify(token, config.ACCESS_SECRET_TOKEN)

    return decoded;
}

export const validateRefreshToken = (token)=> {
    const decoded = jwt.verify(token, config.REFRESH_SECRET_TOKEN);

    return decoded
}