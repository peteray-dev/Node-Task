const Shape = require('../model/shape');
const ApiError = require('../utils/apiError');

exports.square = async (req, res, next) => {
  try {
    lent = req.body.dimension.lenght_a;
    bret = req.body.dimension.lenght_b;
    const squareResult = (len, bre) => {
      if ((req.body.shape = 'square')) {
        return len * len;
      }
    };

    req = { ...req.body, result: squareResult(lent, bret) };
    const circleDim = await Shape.create(req);
    res.status(200).json({
      status: 'success',
      message: { circleDim },
    });
  } catch (error) {
    next(error);
  }
};
