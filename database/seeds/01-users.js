const bcrypt = require('bcryptjs');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        {
          first_name: 'Darth',
          last_name: 'Vader',
          email: 'dvader@deathstar.gov',
          username: 'xX_DarthVader_Xx',
          password: bcrypt.hashSync('UnderestimatedPower', 12)
        },
        {
          first_name: 'Emperor',
          last_name: 'Palpatine',
          email: 'sithlord66@deathstar2.gov',
          username: 'SithRulez',
          password: bcrypt.hashSync('DarthPlaguiesTheWise', 12)
        },
        {
          first_name: 'Master',
          last_name: 'Yoda',
          email: 'yoda@jedicouncil.org',
          username: 'TheRealYoda',
          password: bcrypt.hashSync('GreenIAm', 12)
        },
        {
          first_name: 'Mace',
          last_name: 'Windu',
          email: 'mwindu@jedicouncil.org',
          username: 'TheOnlyPurpleJedi',
          password: bcrypt.hashSync('YouHaveLost', 12)
        },
        {
          first_name: 'Luke',
          last_name: 'SkyWalker',
          email: 'lskywalker@lastjedi.com',
          username: 'LonelyJedi',
          password: bcrypt.hashSync('NOOOOOO', 12)
        }
      ]);
    });
};
