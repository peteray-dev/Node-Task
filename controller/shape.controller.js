const Shape = require('../model/shape');
const ApiError = require('../utils/apiError');

exports.square = async (req, res, next) => {
  try {
    length_a = req.body.dimension.length_a;
    length_b = req.body.dimension.length_b;
    length_c = req.body.dimension.length_c;
    radius = req.body.dimension.radius;


    // let s = (length_a - length_b - length_c)/2
    const squareResult = (length_a, length_b, length_c, radius) => {
      if ((req.body.shape === 'square')) {
        const squareAns = length_a * length_a;
        return (
          Math.round((squareAns + Number.EPSILON)*100)/100
        )
      }
      else if (req.body.shape === 'rectangle'){
        const rectangleAns = length_a*length_b
        return (
          Math.round((rectangleAns + Number.EPSILON)*100)/100
        )
      }
      else if(req.body.shape === 'triangle'){
        let s = (length_a+length_b+length_c)/2
        console.log(Math.sqrt(s) * (s-length_a) * (s-length_b) * (s-length_c))
        const triangleAns = Math.sqrt(s) * (s-length_a) * (s-length_b) * (s-length_c)
        return(
          Math.round((triangleAns + Number.EPSILON)*100)/100
        )
      }
      else if (req.body.shape === 'circle'){
        console.log(Math.PI );
        const circleAns = Math.PI * radius * radius
        return (
          Math.round((circleAns + Number.EPSILON)*100)/100
        )
      }
      else{
        next(
          new ApiError(
            "please input valid details", 400
          )
        )
        
      }

    };

    req = { ...req.body, result: squareResult(length_a, length_b, length_c, radius) };
    const circleDim = await Shape.create(req);
    res.status(200).json({
      status: 'success',
      message: circleDim ,
    });
  } catch (error) {
    next(error);
  }
};
