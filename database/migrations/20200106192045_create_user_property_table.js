exports.up = function(knex) {
  return knex.schema.createTable('user_saved_airbnbs', tbl => {
    tbl.increments();

    tbl
      .integer('host_id')
      .unsigned()
      .notNullable();
    tbl
      .foreign('host_id')
      .references('users.id')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');

    tbl.date('host_since');
    tbl.string('zip_code', 255);
    tbl.string('amenities', 255);
    tbl.string('room_type', 255);
    tbl.integer('max_nights');
    tbl.integer('min_nights');
    tbl.integer('extra_person_cost');
    tbl.integer('accomodates');
    tbl.string('neighborhood', 255);
    tbl.integer('beds');
    tbl.string('property_type', 255);
    tbl.string('cancellation_policy', 255);
    tbl.integer('included_guests');
    tbl.integer('bedrooms');
    tbl.integer('bathrooms');
    tbl.string('optimal_pricing', 255);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('user_saved_airbnbs');
};
