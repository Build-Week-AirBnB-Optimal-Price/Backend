/**
 * @api {get} /:userID/properties/ Get all saved properties
 * @apiVersion 1.0.0
 * @apiName Gets all saved properties for this user
 * @apiGroup User Properties
 *
 * @apiDescription If a user has properties saved, this route will return all that user's saved properties
 *
 * @apiparam {Number} userID User's account id
 *
 * @apiSuccess {Number} id User property id
 * @apiSuccess {String} name Property name
 * @apiSuccess {String} host_since User's original hosting date
 * @apiSuccess {String} zipcode Property zip code
 * @apiSuccess {String} room_type Property's room type
 * @apisuccess {Number} maximum_nights Property's max nights reserved
 * @apisuccess {Number} minimum_nights Property's min nights reserved
 * @apisuccess {Number} extra_people Extra people allowed
 * @apisuccess {Number} accomodates How many can this property accomodate
 * @apisuccess {String} neighborbood Location of property
 * @apisuccess {Number} beds How many beds the property has
 * @apisuccess {String} property_type Property type
 * @apisuccess {String} cancellation_policy Cancellation policy
 * @apisuccess {Number} guests_included Amount of people normally
 * @apisuccess {Number} bedrooms How many bedroom this property has
 * @apisuccess {Number} optimal_pricing Optimal price for this property based on above params
 *
 *
 * @apiSuccessExample Successful response:
 *     HTTP/1.1 200 OK
 * {
 *   "user_properties": [
 *     {
 *       "id": 15,
 *       "name": "TheHaven",
 *       "host_since": "2001",
 *       "zipcode": "10010",
 *       "room_type": "Entirehome/apt",
 *       "maximum_nights": 10,
 *       "minimum_nights": 3,
 *       "extra_people": 2,
 *       "accomodates": 6,
 *       "neighbourhood": "Mitte",
 *       "beds": 5,
 *       "property_type": "Apartment",
 *       "cancellation_policy": "strict_14_with_grace_period",
 *       "guests_included": 4,
 *       "bedrooms": 3,
 *       "bathrooms": 2,
 *       "optimal_price": 120
 *     }
 * }
 */

/**
 * @api {get} /:userID/properties/:propID Get specific saved property
 * @apiVersion 1.0.0
 * @apiName Gets a specific property this user has saved
 * @apiGroup User Properties
 *
 * @apiDescription If a user has properties saved, this route will return a specific property based on it's ID
 *
 * @apiparam {Number} userID User's account id
 * @apiparam {Number} propID Property ID that belongs to the user
 *
 * @apiSuccess {Number} id User property id
 * @apiSuccess {String} name Property name
 * @apiSuccess {String} host_since User's original hosting date
 * @apiSuccess {String} zipcode Property zip code
 * @apiSuccess {String} room_type Property's room type
 * @apisuccess {Number} maximum_nights Property's max nights reserved
 * @apisuccess {Number} minimum_nights Property's min nights reserved
 * @apisuccess {Number} extra_people Extra people allowed
 * @apisuccess {Number} accomodates How many can this property accomodate
 * @apisuccess {String} neighborbood Location of property
 * @apisuccess {Number} beds How many beds the property has
 * @apisuccess {String} property_type Property type
 * @apisuccess {String} cancellation_policy Cancellation policy
 * @apisuccess {Number} guests_included Amount of people normally
 * @apisuccess {Number} bedrooms How many bedroom this property has
 * @apisuccess {Number} optimal_pricing Optimal price for this property based on above params
 *
 *
 * @apiSuccessExample Successful response:
 *     HTTP/1.1 200 OK
 * {
 *   "id": 15,
 *   "name": "TheHaven",
 *   "host_since": "2001",
 *   "zipcode": "10010",
 *   "room_type": "Entirehome/apt",
 *   "maximum_nights": 10,
 *   "minimum_nights": 3,
 *   "extra_people": 2,
 *   "accomodates": 6,
 *   "neighbourhood": "Mitte",
 *   "beds": 5,
 *   "property_type": "Apartment",
 *   "cancellation_policy": "strict_14_with_grace_period",
 *   "guests_included": 4,
 *   "bedrooms": 3,
 *   "bathrooms": 2,
 *   "optimal_price": 120
 * }
 */

/**
 * @api {post} /:userID/properties/ Add new property
 * @apiVersion 1.0.0
 * @apiName Adds a new property to this user's list
 * @apiGroup User Properties
 *
 * @apiDescription This route allows a user to save a property to their account
 *
 * @apiparam {Number} userID User's account id
 * @apiparam {String} message Success message
 * @apiparam {Number} id User property id
 * @apiparam {String} name Property name
 * @apiparam {String} host_since User's original hosting date
 * @apiparam {String} zipcode Property zip code
 * @apiparam {String} room_type Property's room type
 * @apiparam {Number} maximum_nights Property's max nights reserved
 * @apiparam {Number} minimum_nights Property's min nights reserved
 * @apiparam {Number} extra_people Extra people allowed
 * @apiparam {Number} accomodates How many can this property accomodate
 * @apiparam {String} neighborbood Location of property
 * @apiparam {Number} beds How many beds the property has
 * @apiparam {String} property_type Property type
 * @apiparam {String} cancellation_policy Cancellation policy
 * @apiparam {Number} guests_included Amount of people normally
 * @apiparam {Number} bedrooms How many bedroom this property has
 * @apiparam {Number} optimal_pricing Optimal price for this property based on above params
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Number} id User property id
 * @apiSuccess {String} name Property name
 * @apiSuccess {String} host_since User's original hosting date
 * @apiSuccess {String} zipcode Property zip code
 * @apiSuccess {String} room_type Property's room type
 * @apisuccess {Number} maximum_nights Property's max nights reserved
 * @apisuccess {Number} minimum_nights Property's min nights reserved
 * @apisuccess {Number} extra_people Extra people allowed
 * @apisuccess {Number} accomodates How many can this property accomodate
 * @apisuccess {String} neighborbood Location of property
 * @apisuccess {Number} beds How many beds the property has
 * @apisuccess {String} property_type Property type
 * @apisuccess {String} cancellation_policy Cancellation policy
 * @apisuccess {Number} guests_included Amount of people normally
 * @apisuccess {Number} bedrooms How many bedroom this property has
 * @apisuccess {Number} optimal_pricing Optimal price for this property based on above params
 *
 *
 * @apiSuccessExample Successful response:
 *     HTTP/1.1 201 OK
 * {
 *   "message": "Property was successfully added",
 *   "user_property": {
 *     "id": 21,
 *     "name": "TheHaven",
 *     "host_since": "2001",
 *     "zipcode": "10010",
 *     "room_type": "Entirehome/apt",
 *     "maximum_nights": 10,
 *     "minimum_nights": 3,
 *     "extra_people": 2,
 *     "accomodates": 6,
 *     "neighbourhood": "Mitte",
 *     "beds": 5,
 *     "property_type": "Apartment",
 *     "cancellation_policy": "strict_14_with_grace_period",
 *     "guests_included": 4,
 *     "bedrooms": 3,
 *     "bathrooms": 2,
 *     "optimal_price": 120
 *   }
 * }
 */

/**
 * @api {put} /user/:userID/properties/:propID Update a property
 * @apiVersion 1.0.0
 * @apiName Updates a property this user owns
 * @apiGroup User Properties
 *
 * @apiDescription If a user has properties saved, they can edit a specific property
 *
 * @apiparam {Number} userID User's account id
 * @apiparam {Number} propID Property ID that belongs to the user
 * @apiparam {String} message Success message
 * @apiparam {Number} id User property id
 * @apiparam {String} name Property name
 * @apiparam {String} host_since User's original hosting date
 * @apiparam {String} zipcode Property zip code
 * @apiparam {String} room_type Property's room type
 * @apiparam {Number} maximum_nights Property's max nights reserved
 * @apiparam {Number} minimum_nights Property's min nights reserved
 * @apiparam {Number} extra_people Extra people allowed
 * @apiparam {Number} accomodates How many can this property accomodate
 * @apiparam {String} neighborbood Location of property
 * @apiparam {Number} beds How many beds the property has
 * @apiparam {String} property_type Property type
 * @apiparam {String} cancellation_policy Cancellation policy
 * @apiparam {Number} guests_included Amount of people normally
 * @apiparam {Number} bedrooms How many bedroom this property has
 * @apiparam {Number} optimal_pricing Optimal price for this property based on above params
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {Number} id User property id
 * @apiSuccess {String} name Property name
 * @apiSuccess {String} host_since User's original hosting date
 * @apiSuccess {String} zipcode Property zip code
 * @apiSuccess {String} room_type Property's room type
 * @apisuccess {Number} maximum_nights Property's max nights reserved
 * @apisuccess {Number} minimum_nights Property's min nights reserved
 * @apisuccess {Number} extra_people Extra people allowed
 * @apisuccess {Number} accomodates How many can this property accomodate
 * @apisuccess {String} neighborbood Location of property
 * @apisuccess {Number} beds How many beds the property has
 * @apisuccess {String} property_type Property type
 * @apisuccess {String} cancellation_policy Cancellation policy
 * @apisuccess {Number} guests_included Amount of people normally
 * @apisuccess {Number} bedrooms How many bedroom this property has
 * @apisuccess {Number} optimal_pricing Optimal price for this property based on above params
 *
 *
 * @apiSuccessExample Successful response:
 *     HTTP/1.1 201 OK
 * {
 *   "message": "Property has been updated",
 *   "user_property": {
 *     "id": 20,
 *     "name": "TheHaven",
 *     "host_since": "200121",
 *     "zipcode": "10010",
 *     "room_type": "Entirehome/apt",
 *     "maximum_nights": 10,
 *     "minimum_nights": 3,
 *     "extra_people": 2,
 *     "accomodates": 6,
 *     "neighbourhood": "Mitte",
 *     "beds": 5,
 *     "property_type": "Apartment",
 *     "cancellation_policy": "strict_14_with_grace_period",
 *     "guests_included": 4,
 *     "bedrooms": 3,
 *     "bathrooms": 2,
 *     "optimal_price": 120
 *   }
 * }
 */

/**
 * @api {delete} /user/:userID/properties/:propID Delete a property
 * @apiVersion 1.0.0
 * @apiName Deletes a property from this user's account
 * @apiGroup User Properties
 *
 * @apiDescription The user can delete a specific property from their account
 *
 * @apiparam {Number} userID User's account id
 * @apiparam {Number} propID Property ID that belongs to the user
 *
 * @apiSuccess {String} message Success message
 *
 * @apiSuccessExample Successful response:
 *     HTTP/1.1 200 OK
 * {
 *   "message": "Property has been successfully deleted"
 * }
 */
