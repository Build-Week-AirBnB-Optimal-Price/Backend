const db = require('../database/db-config');

module.exports = {
  getUserProps,
  getSpecificProp,
  addUserProperty,
  updateUserProperty,
  removeProp
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
      'maximum_nights',
      'minimum_nights',
      'extra_people',
      'accommodates',
      'neighbourhood',
      'beds',
      'property_type',
      'cancellation_policy',
      'guests_included',
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
      'maximum_nights',
      'minimum_nights',
      'extra_people',
      'accommodates',
      'neighbourhood',
      'beds',
      'property_type',
      'cancellation_policy',
      'guests_included',
      'bedrooms',
      'bathrooms',
      'optimal_price'
    )
    .first();
}

function findById(id) {
  return db('user_airbnb')
    .select(
      'id',
      'name',
      'host_since',
      'zipcode',
      'room_type',
      'maximum_nights',
      'minimum_nights',
      'extra_people',
      'accommodates',
      'neighbourhood',
      'beds',
      'property_type',
      'cancellation_policy',
      'guests_included',
      'bedrooms',
      'bathrooms',
      'optimal_price'
    )
    .where({ id })
    .first();
}

function addUserProperty(prop) {
  return db('user_airbnb').insert(prop, [
    'id',
    'name',
    'host_since',
    'zipcode',
    'room_type',
    'maximum_nights',
    'minimum_nights',
    'extra_people',
    'accommodates',
    'neighbourhood',
    'beds',
    'property_type',
    'cancellation_policy',
    'guests_included',
    'bedrooms',
    'bathrooms',
    'optimal_price'
  ]);
}

function updateUserProperty(userID, propID, prop) {
  return db('user_airbnb')
    .where({
      host_id: userID,
      id: propID
    })
    .update(prop, [
      'id',
      'name',
      'host_since',
      'zipcode',
      'room_type',
      'maximum_nights',
      'minimum_nights',
      'extra_people',
      'accommodates',
      'neighbourhood',
      'beds',
      'property_type',
      'cancellation_policy',
      'guests_included',
      'bedrooms',
      'bathrooms',
      'optimal_price'
    ]);
}

function removeProp(userID, propID) {
  return db('user_airbnb')
    .where({
      host_id: userID,
      id: propID
    })
    .del();
}
