import userModel from "../models/userModel.js";

export const registerController = async (req, res, next) => {
  const { name, lastName, email, password } = req.body;
  //validate
  if (!name) {
    next("name is required");
  }
  if (!email) {
    next("email is required");
  }
  if (!password) {
    next("password is required and greater than 6 character");
  }
  const exisitingUser = await userModel.findOne({ email });
  if (exisitingUser) {
    next("Email Already Register Please Login");
  }

  // create user
  const user = await userModel.create({ name,lastName, email, password });
  //token
  const token = user.createJWT();
  res.status(201).send({
    success: true,
    message: "User Created Successfully",
    user: {
      name: user.name,
      lastName: user.lastName,
      email: user.email,
      location: user.location,
    },
    token,
  });
};

export const loginController = async (req, res, next) => {
  const { email, password } = req.body;
  //validation
  if (!email || !password) {
    next("Please Provide All Fields");
  }
  //find user by email

  const user = await userModel.findOne({ email }).select("+password");
  console.log(user,"ankit" );
  if (!user) { 
    next("USername not found");
  }

  // compare passowrd
  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    next("Invalid password");
  }
  user.password = undefined;
  const token = user.createJWT();
  res.status(200).json({
    success: true,
    message: "Login SUccessfully",
    user,
    token,
  });
};
