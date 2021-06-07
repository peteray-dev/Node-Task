const User = require('../model/user');
const ApiError = require('../utils/apiError');
const jwt = require('jsonwebtoken');

require('dotenv').config();

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

exports.register = async (req, res, next) => {
  try {
    const userExist = await User.findOne({ email: req.body.email });
    if (userExist) {
      return next(
        new ApiError(
          `${req.body.email} has already been taken, try a different email`
        )
      );
    }

    const user = await User.create(req.body);

    let token = signToken(user._id)

    res.status(200).json({
      status: 'success',
      message: user,
        token
    });
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return next(new ApiError('user does not exist'));
    }

    let token = signToken(user._id);
    res.status(200).json({
      status: 'success',
      message: user,
      token
    });
  } catch (error) {
    next(error);
  }
};

exports.authorization = async (req, res, next) => {
  try {
    let token;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {
      token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
      return next(new ApiError('please login to get access'));
    }

    let decode = await jwt.verify(token, process.env.JWT_SECRET);

    let currentUser = await User.findById({ _id: decode.id });

    if (!currentUser) {
      return next(new ApiError('unuthorized user', 401));
    }

    req.user = currentUser;
    next();
  } catch (error) {
    next(error);
  }
};
