// // TODO [1] bcrypt
// // TODO [2] user model
// const bcrypt = require('bcrypt');
// const User   = require('../model/User');
//
// module.exports = {
//   /**
//    * @func login
//    * @desc compares the cleartext password with the hashed version in the DB
//    */
//   login(req, res, next) {
//
//   },
//
//   /**
//    * @func logout
//    * @description destroys a user's session; logs a user out;
//    */
//   logout(req, res, next) {
//     // destroy session
//     // next will be called with either an error or undefined.
//     // (negative or positive path)
//
//   },
//
//   /**
//    * @hint: this is an array of middleware functions
//    */
//   loginRequired: [
//     /* this is either going to resolve to next(false) or next(null) */
//     (req, res, next) => next(!req.session.user || null),
//     (err, req, res, next) => res.sendStatus(401),
//   ],
// };
