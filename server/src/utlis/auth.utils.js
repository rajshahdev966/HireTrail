import jwt from "jsonwebtoken"
import config from "../config/config"


export const generateTokens = ({id, role}) => {
    const accessToken = jwt.sign({id, role}, config.ACCESS_SECRET_TOKEN);

    const refreshToken = jwt.sign({id, role}, config.REFRES_SECRET_TOKEN);

    return {accessToken, refreshToken};
}

export const validateAccessToken = (token)=> {
    const decoded = jwt.verify(token, config.ACCESS_SECRET_TOKEN)

    return decoded;
}

export const validateRefreshToken = (token)=> {
    const decoded = jwt.verify(token, config.REFRES_SECRET_TOKEN);

    return decoded
}