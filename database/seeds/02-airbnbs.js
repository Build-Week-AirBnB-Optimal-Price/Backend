exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user_airbnb')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('user_airbnb').insert([
        {
          host_id: 1,
          name: 'Corner Cottage',
          host_since: new Date(),
          zipcode: '10001',
          room_type: 'Entire home/apt',
          maximum_nights: 18,
          minimum_nights: 3,
          extra_people: 2,
          accomodates: 8,
          neighbourhood: 'Schmöckwitz',
          beds: 5,
          property_type: 'Hostel',
          cancellation_policy: 'moderate',
          guests_included: 3,
          bedrooms: 3,
          bathrooms: 2,
          optimal_price: 200
        },
        {
          host_id: 1,
          name: 'The Villa',
          host_since: new Date(),
          zipcode: '10002',
          room_type: 'Shared room',
          maximum_nights: 14,
          minimum_nights: 3,
          extra_people: 2,
          accomodates: 8,
          neighbourhood: 'Lichterfelde',
          beds: 7,
          property_type: 'Train',
          cancellation_policy: 'super_strict_60',
          guests_included: 6,
          bedrooms: 5,
          bathrooms: 4,
          optimal_price: 48
        },
        {
          host_id: 2,
          name: 'Ivy Cottage',
          host_since: new Date(),
          zipcode: '10003',
          room_type: 'Entire home/apt',
          maximum_nights: 25,
          minimum_nights: 3,
          extra_people: 2,
          accomodates: 6,
          neighbourhood: 'Charlottenburg',
          beds: 4,
          property_type: 'Guest suite',
          cancellation_policy: 'strict_14_with_grace_period',
          guests_included: 4,
          bedrooms: 3,
          bathrooms: 2,
          optimal_price: 70
        },
        {
          host_id: 2,
          name: 'Mill House',
          host_since: new Date(),
          zipcode: '10004',
          room_type: 'Private room',
          maximum_nights: 12,
          minimum_nights: 3,
          extra_people: 1,
          accomodates: 7,
          neighbourhood: 'Moabit',
          beds: 3,
          property_type: 'Island',
          cancellation_policy: 'moderate',
          guests_included: 2,
          bedrooms: 4,
          bathrooms: 3,
          optimal_price: 85
        },
        {
          host_id: 3,
          name: 'Orchard Cottage',
          host_since: new Date(),
          zipcode: '10005',
          room_type: 'Shared room',
          maximum_nights: 15,
          minimum_nights: 3,
          extra_people: 2,
          accomodates: 5,
          neighbourhood: 'Neukölln',
          beds: 5,
          property_type: 'Guest suite',
          cancellation_policy: 'super_strict_30',
          guests_included: 3,
          bedrooms: 2,
          bathrooms: 1,
          optimal_price: 123
        },
        {
          host_id: 3,
          name: 'School House',
          host_since: new Date(),
          zipcode: '10006',
          room_type: 'Entire home/apt',
          maximum_nights: 30,
          minimum_nights: 3,
          extra_people: 1,
          accomodates: 6,
          neighbourhood: 'Kreuzberg',
          beds: 4,
          property_type: 'Bungalow',
          cancellation_policy: 'strict_14_with_grace_period',
          guests_included: 5,
          bedrooms: 3,
          bathrooms: 3,
          optimal_price: 231
        },
        {
          host_id: 4,
          name: 'The Barn',
          host_since: new Date(),
          zipcode: '10007',
          room_type: 'Private room',
          maximum_nights: 8,
          minimum_nights: 3,
          extra_people: 2,
          accomodates: 8,
          neighbourhood: 'Friedrichshain',
          beds: 3,
          property_type: 'Townhouse',
          cancellation_policy: 'moderate',
          guests_included: 5,
          bedrooms: 4,
          bathrooms: 2,
          optimal_price: 89
        },
        {
          host_id: 4,
          name: 'The Bungalow',
          host_since: new Date(),
          zipcode: '10008',
          room_type: 'Entire home/apt',
          maximum_nights: 6,
          minimum_nights: 3,
          extra_people: 3,
          accomodates: 8,
          neighbourhood: 'Schöneberg',
          beds: 4,
          property_type: 'Boat',
          cancellation_policy: 'super_strict_30',
          guests_included: 4,
          bedrooms: 4,
          bathrooms: 3,
          optimal_price: 65
        },
        {
          host_id: 5,
          name: 'Mill House',
          host_since: new Date(),
          zipcode: '10009',
          room_type: 'Private room',
          maximum_nights: 8,
          minimum_nights: 3,
          extra_people: 2,
          accomodates: 3,
          neighbourhood: 'Prenzlauer Berg',
          beds: 3,
          property_type: 'Townhouse',
          cancellation_policy: 'super_strict_60',
          guests_included: 3,
          bedrooms: 2,
          bathrooms: 1,
          optimal_price: 100
        },
        {
          host_id: 5,
          name: 'The Haven',
          host_since: new Date(),
          zipcode: '10010',
          room_type: 'Entire home/apt',
          maximum_nights: 10,
          minimum_nights: 3,
          extra_people: 2,
          accomodates: 6,
          neighbourhood: 'Mitte',
          beds: 5,
          property_type: 'Apartment',
          cancellation_policy: 'strict_14_with_grace_period',
          guests_included: 4,
          bedrooms: 3,
          bathrooms: 2,
          optimal_price: 120
        }
      ]);
    });
};
