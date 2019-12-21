/**
 * @api {get} /user/:id Retrieve a user's information
 * @apiVersion 1.0.0
 * @apiName Retrieve User Info
 * @apiGroup Accounts
 *
 * @apiSuccess {Number} id User's account id
 * @apisuccess {String} first_name User's firstname
 * @apisuccess {String} last_name User's lastname
 * @apisuccess {String} email User's email
 * @apisuccess {String} username User's username
 *
 * @apiSuccessExample Successful response:
 *    HTTP/1.1 200 OK
 * {
 *    "id" : 66,
 *    "first_name" : "Emperor",
 *    "last_name" : "Palpatine",
 *    "email" : "sithlord66@deathstar2.gov",
 *    "username" : "SithRulez"
 * }
 */

/**
 * @api {put} /user/:id Update a user's info
 * @apiVersion 1.0.0
 * @apiName Update User
 * @apiGroup Accounts
 *
 * @apiparam {String} first_name User's firstname - optional
 * @apiparam {String} last_name User's lastname - optional
 * @apiparam {String} email User's email - must be unique, but is optional
 * @apiparam {String} username User's username - must be unique, but is optional
 * @apiparam {String} password User's password - optional
 *
 * @apiParamExample Example Body:
 * {
 *    "first_name" : "Anakin",
 *    "last_name" : "Skywalker",
 *    "email" : "dvader@deathstar.gov",
 *    "username" : "xX_OldDarthVader_Xx"
 * }
 *
 * @apiSuccess {Number} id User's account id
 * @apiSuccess {String} first_name User's firstname - optional based on above
 * @apiSuccess {String} last_name User's lastname - optional based on above
 * @apiSuccess {String} email User's email - must be unique, but is optional based on above
 * @apiSuccess {String} username User's username - must be unique, but is optional based on above
 * @apisuccess {String} message Success message upon completion of account update
 *
 * @apiSuccessExample Successful response:
 *    HTTP/1.1 201 OK
 * {
 *    "cleanUser": {
 *        "id": 5,
 *        "first_name" : "Anakin",
 *        "last_name" : "Skywalker",
 *        "email" : "dvader@deathstar.gov",
 *        "username" : "xX_OldDarthVader_Xx"
 *    },
 *    "message": "Account info updated successfully"
 * }
 */
