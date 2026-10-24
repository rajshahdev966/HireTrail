import userModel from "../models/auth.model";
import { generateTokens, validateRefreshToken } from "../utlis/auth.utils";

export const registerController = async (req, res) => {
  const { email, password, name, phoneNumber } = req.body;

  const isUserExist =
    (await userModel.findOne({ email })) ||
    (await userModel.findOne({ phoneNumber }));

  if (isUserExist) {
    return res.status(409).json({
      message: "User with that credentials already exist",
    });
  }

  const user = await userModel.create({
    name,
    email,
    passwordHash: await bcrypt.hash(password, 12),
    phoneNumber,
  });

  const { accessToken, refreshToken } = generateTokens({id: user._id, role: user.role});

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
  });

  user.refreshToken = refreshToken;
  await user.save();

  res.status(201).json({
    message: "User registered successfully",
    data: {
      user: {
        email,
        name,
      },
      accessToken,
    },
  });
};

export const loginController = async (req, res) => {
  const { email, password } = req.body;

  const userExist = await userModel.findOne({ email });

  if (!userExist) {
    return res.status(401).json({
      message: "Invalid credentials",
    });
  }

  const validCredentials = await bcrypt.compare(
    password,
    userExist.passwordHash,
  );

  if (!validCredentials) {
    return res.status(401).json({
      message: "Invalid credentials",
    });
  }

  const { accessToken, refreshToken } = generateTokens({id: userExist._id, role: userExist.role});

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
  });
  await userModel.findByIdAndUpdate(userExist._id, { refreshToken });

  res.status(200).json({
    message: "User logged in successfully",
    data: {
      user: {
        email,
        name,
      },
      accessToken,
    },
  });
};

export const refreshController = async (req, res) => {
  const { refreshToken } = req.cookies;

  if (!refreshToken) {
    return res.status(401).json({
      message: "Unauthorized, Refresh token is missing",
    });
  }

  try {
    const { id } = validateRefreshToken(refreshToken);

    const user = await userModel.findById(id);
    
    if(user.refreshToken !== refreshToken){
        await userModel.findByIdAndUpdate(id, {refreshToken: null});

        return res.status(401).json({
            messsage: "Unauthorised Access"
        })
    }

    const { accessToken, refreshToken: newRefreshToken } = generateTokens({id: user._id, role: user.role});


    res.cookie("refreshToken", newRefreshToken);
    await userModel.findByIdAndUpdate(id, { refreshToken: newRefreshToken });

    res.status(200).json({
      message: "Tokens refreshed successfully",
      data: {
        accessToken,
      },
    });
  } catch (error) {
    return res.status(401).json({
      message: "Invalid access or refresh token",
    });
  }
};

export const getMeController = async (req, res) => {
    const {id} = req.user;

    const user = await userModel.findById(id);

    if(!user){
        return res.status(404).json({
            message: "User not found"
        })
    }

    return res.status(200).json({
        message: "User data found successfully",
        data:{
            user: {
                email : user.email,
                name: user.name
            }
        }
    })
};
