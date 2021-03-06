exports.up = function(knex) {
  return knex.schema.createTable('user_airbnb', tbl => {
    tbl.increments();

    // foreign key tying property to user
    tbl
      .integer('host_id')
      .unsigned()
      .notNullable();
    tbl
      .foreign('host_id')
      .references('users.id')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');

    tbl.string('name', 255).notNullable();
    tbl.string('host_since', 255).notNullable();
    tbl.string('zipcode', 255).notNullable();
    tbl.string('room_type').notNullable();
    tbl.integer('maximum_nights').notNullable();
    tbl.integer('minimum_nights').notNullable();
    tbl.integer('extra_people').notNullable();
    tbl.integer('accommodates').notNullable();
    tbl.string('neighbourhood').notNullable();
    tbl.integer('beds').notNullable();
    tbl.string('property_type', 255).notNullable();
    tbl.string('cancellation_policy', 255).notNullable();
    tbl.integer('guests_included').notNullable();
    tbl.integer('bedrooms').notNullable();
    tbl.integer('bathrooms').notNullable();
    tbl.integer('optimal_price').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('user_airbnb');
};
