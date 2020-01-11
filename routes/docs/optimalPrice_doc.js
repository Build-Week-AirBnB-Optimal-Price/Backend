/**
 * @api {post} /optimalprice Get optimal price
 * @apiVersion 1.0.0
 * @apiName Returns an optimal price for a property
 * @apiGroup Pricing API
 *
 * @apiDescription This route allows a user to ping the DS server and get an optimal price for their property
 *
 * @apiparam {String} host_since User's original hosting date
 * @apiparam {String} zipcode Property zip code
 * @apiparam {String} room_type Property's room type
 * @apiparam {Number} maximum_nights Property's max nights reserved
 * @apiparam {Number} minimum_nights Property's min nights reserved
 * @apiparam {Number} extra_people Extra people allowed
 * @apiparam {Number} accommodates How many can this property accomodate
 * @apiparam {String} neighborbood Location of property
 * @apiparam {Number} beds How many beds the property has
 * @apiparam {String} property_type Property type
 * @apiparam {String} cancellation_policy Cancellation policy
 * @apiparam {Number} guests_included Amount of people normally
 * @apiparam {Number} bedrooms How many bedroom this property has
 *
 * @apiSuccess {String} results Resulting price
 *
 *
 * @apiSuccessExample Successful response:
 *     HTTP/1.1 200 OK
 *  {
 *   "results": 16
 *  }
 */
