exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user_airbnb')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('user_airbnb').insert([
        {
          host_id: 1,
          name: 'The Villa',
          host_since: new Date(),
          zipcode: '10001',
          room_type: 'Entire home/apt',
          max_nights: 18,
          min_nights: 3,
          extra_people: 2,
          accomodates: 8,
          neighborhood: 'Schmöckwitz',
          beds: 5,
          property_type: 'Hostel',
          cancel_policy: 'moderate',
          guests: 3,
          bedrooms: 3,
          bathrooms: 2,
          optimal_price: 200
        },
        {
          host_id: 1,
          name: 'Corner Cottage',
          host_since: new Date(),
          zipcode: '10002',
          room_type: 'Shared room',
          max_nights: 14,
          min_nights: 3,
          extra_people: 2,
          accomodates: 8,
          neighborhood: 'Lichterfelde',
          beds: 7,
          property_type: 'Train',
          cancel_policy: 'super_strict_60',
          guests: 6,
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
          max_nights: 25,
          min_nights: 3,
          extra_people: 2,
          accomodates: 6,
          neighborhood: 'Charlottenburg',
          beds: 4,
          property_type: 'Guest suite',
          cancel_policy: 'strict_14_with_grace_period',
          guests: 4,
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
          max_nights: 12,
          min_nights: 3,
          extra_people: 1,
          accomodates: 7,
          neighborhood: 'Moabit',
          beds: 3,
          property_type: 'Island',
          cancel_policy: 'moderate',
          guests: 2,
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
          max_nights: 15,
          min_nights: 3,
          extra_people: 2,
          accomodates: 5,
          neighborhood: 'Neukölln',
          beds: 5,
          property_type: 'Guest suite',
          cancel_policy: 'super_strict_30',
          guests: 3,
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
          max_nights: 30,
          min_nights: 3,
          extra_people: 1,
          accomodates: 6,
          neighborhood: 'Kreuzberg',
          beds: 4,
          property_type: 'Bungalow',
          cancel_policy: 'strict_14_with_grace_period',
          guests: 5,
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
          max_nights: 8,
          min_nights: 3,
          extra_people: 2,
          accomodates: 8,
          neighborhood: 'Friedrichshain',
          beds: 3,
          property_type: 'Townhouse',
          cancel_policy: 'moderate',
          guests: 5,
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
          max_nights: 6,
          min_nights: 3,
          extra_people: 3,
          accomodates: 8,
          neighborhood: 'Schöneberg',
          beds: 4,
          property_type: 'Boat',
          cancel_policy: 'super_strict_30',
          guests: 4,
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
          max_nights: 8,
          min_nights: 3,
          extra_people: 2,
          accomodates: 3,
          neighborhood: 'Prenzlauer Berg',
          beds: 3,
          property_type: 'Townhouse',
          cancel_policy: 'super_strict_60',
          guests: 3,
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
          max_nights: 10,
          min_nights: 3,
          extra_people: 2,
          accomodates: 6,
          neighborhood: 'Mitte',
          beds: 5,
          property_type: 'Apartment',
          cancel_policy: 'strict_14_with_grace_period',
          guests: 4,
          bedrooms: 3,
          bathrooms: 2,
          optimal_price: 120
        }
      ]);
    });
};
