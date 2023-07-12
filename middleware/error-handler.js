const CustomAPIError = require('../errors/custom-error')
const {statusCodes} = require('../errors')


const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message })
  }
  return res.status(statusCodes).send('Something went wrong try again later')
}

module.exports = errorHandlerMiddleware
