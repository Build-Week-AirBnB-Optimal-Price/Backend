const db = require('../database/db-config');

module.exports = {
  getUserProps,
  getSpecificProp,
  addUserProperty
};

function getUserProps(userID) {
  return db('user_airbnb')
    .where('host_id', userID)
    .select(
      'id',
      'name',
      'host_since',
      'zipcode',
      'room_type',
      'max_nights',
      'min_nights',
      'extra_people',
      'accomodates',
      'neighborhood',
      'beds',
      'property_type',
      'cancel_policy',
      'guests',
      'bedrooms',
      'bathrooms',
      'optimal_price'
    );
}

function getSpecificProp(userID, propID) {
  return db('user_airbnb')
    .where({
      host_id: userID,
      id: propID
    })
    .select(
      'id',
      'name',
      'host_since',
      'zipcode',
      'room_type',
      'max_nights',
      'min_nights',
      'extra_people',
      'accomodates',
      'neighborhood',
      'beds',
      'property_type',
      'cancel_policy',
      'guests',
      'bedrooms',
      'bathrooms',
      'optimal_price'
    )
    .first();
}

function addUserProperty(prop) {
  return db('user_airbnb').insert(prop, [
    'id',
    'name',
    'host_since',
    'zipcode',
    'room_type',
    'max_nights',
    'min_nights',
    'extra_people',
    'accomodates',
    'neighborhood',
    'beds',
    'property_type',
    'cancel_policy',
    'guests',
    'bedrooms',
    'bathrooms',
    'optimal_price'
  ]);
}
