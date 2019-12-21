/**
 * @api {post} /register Register user
 * @apiVersion 1.0.0
 * @apiName Register
 * @apiGroup Accounts
 *
 * @apiparam {String} first_name User's firstname
 * @apiparam {String} last_name User's lastname
 * @apiparam {String} email User's email - must be unique
 * @apiparam {String} username User's username - must be unique
 * @apiparam {String} password User's password
 *
 * @apiParamExample Example Body:
 * {
 *    "first_name" : "Darth",
 *    "last_name" : "Vader",
 *    "email" : "dvader@deathstar.gov",
 *    "username" : "xX_DarthVader_Xx",
 *    "password" : "UnderestimatedPower"
 * }
 *
 * @apiSuccess {Number} id User's account id
 * @apisuccess {String} username User's username
 * @apisuccess {String} token JWT generated for the user
 *
 * @apiSuccessExample Successful response:
 *    HTTP/1.1 201 OK
 * {
 *    "user": {
 *        "id" : 5,
 *        "username" : "xX_DarthVader_Xx"
 *      },
 *    "token" : "a really long string of letters and numbers, separated by dots"
 * }
 */

/**
 * @api {post} /login Log user in
 * @apiVersion 1.0.0
 * @apiName Login
 * @apiGroup Accounts
 *
 * @apiparam {String} username User's username
 * @apiparam {String} password User's password
 *
 * @apiParamExample Example Body:
 * {
 *    "username" : "TheRealYoda",
 *    "password" : "GreenIAm"
 * }
 *
 * @apiSuccess {Number} id User's account id
 * @apisuccess {String} message User greeting
 * @apisuccess {String} token JWT generated for the user
 *
 * @apiSuccessExample Successful response:
 *    HTTP/1.1 201 OK
 * {
 *    "user": {
 *        "id" : 10,
 *        "message" : "Welcome back, TheRealYoda"
 *      },
 *    "token" : "a really long string of letters and numbers, separated by dots"
 * }
 */
