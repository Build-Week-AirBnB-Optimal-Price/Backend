const db = require('../database/db-config');

module.exports = {
  addUser,
  findUserBy,
  findById
};

function addUser(user) {
  return db('users')
    .insert(user)
    .returning('id')
    .then(ids => findById(ids[0]));
}

function findById(id) {
  return db('users')
    .select('id', 'username')
    .where({ id })
    .first();
}

function findUserBy(filter) {
  return db('users')
    .where(filter)
    .first();
}
