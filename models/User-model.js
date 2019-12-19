const db = require('../database/db-config');

module.exports = {
  addUser,
  findUserBy
};

async function addUser(user) {
  const [id] = await db('users').insert(user);
  return await db('users')
    .returning('id', 'username')
    .where({ id })
    .first();
}

function findUserBy(filter) {
  return db('users')
    .where(filter)
    .first();
}
