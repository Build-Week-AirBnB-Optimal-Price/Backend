const db = require('../database/db-config');

module.exports = {
  addUser,
  findUserBy,
  findById,
  updateUser,
  removeUser
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

function updateUser(id, user) {
  return db('users')
    .where({ id })
    .update(user)
    .returning('id')
    .then(ids => {
      let id = ids[0];
      return findUserBy({ id });
    });
}

function removeUser(id) {
  return db('users')
    .where({ id })
    .del();
}
