define({ "api": [
  {
    "type": "post",
    "url": "/login",
    "title": "Log user in",
    "version": "1.0.0",
    "name": "Login",
    "group": "Authorization",
    "description": "<p>Allows a user to log in with their credentials</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User's username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User's password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example Body:",
          "content": "{\n   \"username\" : \"TheRealYoda\",\n   \"password\" : \"GreenIAm\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User's account id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>User greeting</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>JWT generated for the user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful response:",
          "content": "   HTTP/1.1 201 OK\n{\n   \"user\": {\n       \"id\" : 10,\n       \"message\" : \"Welcome back, TheRealYoda\"\n     },\n   \"token\" : \"a really long string of letters and numbers, separated by dots\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/docs/auth_doc.js",
    "groupTitle": "Authorization"
  },
  {
    "type": "post",
    "url": "/register",
    "title": "Register user",
    "version": "1.0.0",
    "name": "Register",
    "group": "Authorization",
    "description": "<p>Allows a user to register for an account</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": "<p>User's firstname</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "last_name",
            "description": "<p>User's lastname</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User's email - must be unique</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User's username - must be unique</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User's password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example Body:",
          "content": "{\n   \"first_name\" : \"Darth\",\n   \"last_name\" : \"Vader\",\n   \"email\" : \"dvader@deathstar.gov\",\n   \"username\" : \"xX_DarthVader_Xx\",\n   \"password\" : \"UnderestimatedPower\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User's account id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User's username</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>JWT generated for the user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful response:",
          "content": "   HTTP/1.1 201 OK\n{\n   \"user\": {\n       \"id\" : 5,\n       \"username\" : \"xX_DarthVader_Xx\"\n     },\n   \"token\" : \"a really long string of letters and numbers, separated by dots\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/docs/auth_doc.js",
    "groupTitle": "Authorization"
  },
  {
    "type": "delete",
    "url": "/user/:id",
    "title": "Delete user info",
    "version": "1.0.0",
    "name": "Delete_User",
    "group": "User_Account",
    "description": "<p>If a user is logged in, they can delete their account</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Message of success</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful response:",
          "content": "   HTTP/1.1 200 OK\n{\n   \"message\" : \"Your account has been successfully deleted\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/docs/userData_doc.js",
    "groupTitle": "User_Account"
  },
  {
    "type": "get",
    "url": "/user/:id",
    "title": "Retrieve user info",
    "version": "1.0.0",
    "name": "Retrieve_User",
    "group": "User_Account",
    "description": "<p>If a user is logged in, this route retrieves all their info</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User's account id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": "<p>User's firstname</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "last_name",
            "description": "<p>User's lastname</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User's email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User's username</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful response:",
          "content": "   HTTP/1.1 200 OK\n{\n   \"id\" : 66,\n   \"first_name\" : \"Emperor\",\n   \"last_name\" : \"Palpatine\",\n   \"email\" : \"sithlord66@deathstar2.gov\",\n   \"username\" : \"SithRulez\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/docs/userData_doc.js",
    "groupTitle": "User_Account"
  },
  {
    "type": "put",
    "url": "/user/:id",
    "title": "Update user info",
    "version": "1.0.0",
    "name": "Update_User",
    "group": "User_Account",
    "description": "<p>If a user is logged in, this will allow you to update their information</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "first_name",
            "description": "<p>User's firstname</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "last_name",
            "description": "<p>User's lastname</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>User's email - must be unique</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "username",
            "description": "<p>User's username - must be unique</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "password",
            "description": "<p>User's password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example Body:",
          "content": "{\n   \"first_name\" : \"Anakin\",\n   \"last_name\" : \"Skywalker\",\n   \"email\" : \"dvader@deathstar.gov\",\n   \"username\" : \"xX_OldDarthVader_Xx\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User's account id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "first_name",
            "description": "<p>User's firstname</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "last_name",
            "description": "<p>User's lastname</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>User's email - must be unique</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "username",
            "description": "<p>User's username - must be unique</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message upon completion of account update</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful response:",
          "content": "   HTTP/1.1 201 OK\n{\n   \"cleanUser\": {\n       \"id\": 5,\n       \"first_name\" : \"Anakin\",\n       \"last_name\" : \"Skywalker\",\n       \"email\" : \"dvader@deathstar.gov\",\n       \"username\" : \"xX_OldDarthVader_Xx\"\n   },\n   \"message\": \"Account info updated successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/docs/userData_doc.js",
    "groupTitle": "User_Account"
  },
  {
    "type": "post",
    "url": "/:userID/properties/",
    "title": "Add new property",
    "version": "1.0.0",
    "name": "Adds_a_new_property_to_this_user_s_list",
    "group": "User_Properties",
    "description": "<p>This route allows a user to save a property to their account</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userID",
            "description": "<p>User's account id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User property id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Property name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "host_since",
            "description": "<p>User's original hosting date</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "zipcode",
            "description": "<p>Property zip code</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "room_type",
            "description": "<p>Property's room type</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "maximum_nights",
            "description": "<p>Property's max nights reserved</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "minimum_nights",
            "description": "<p>Property's min nights reserved</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "extra_people",
            "description": "<p>Extra people allowed</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "accomodates",
            "description": "<p>How many can this property accomodate</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "neighborbood",
            "description": "<p>Location of property</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "beds",
            "description": "<p>How many beds the property has</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "property_type",
            "description": "<p>Property type</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cancellation_policy",
            "description": "<p>Cancellation policy</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "guests_included",
            "description": "<p>Amount of people normally</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "bedrooms",
            "description": "<p>How many bedroom this property has</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "optimal_pricing",
            "description": "<p>Optimal price for this property based on above params</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User property id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Property name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "host_since",
            "description": "<p>User's original hosting date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "zipcode",
            "description": "<p>Property zip code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "room_type",
            "description": "<p>Property's room type</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "maximum_nights",
            "description": "<p>Property's max nights reserved</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "minimum_nights",
            "description": "<p>Property's min nights reserved</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "extra_people",
            "description": "<p>Extra people allowed</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "accomodates",
            "description": "<p>How many can this property accomodate</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "neighborbood",
            "description": "<p>Location of property</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "beds",
            "description": "<p>How many beds the property has</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "property_type",
            "description": "<p>Property type</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "cancellation_policy",
            "description": "<p>Cancellation policy</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "guests_included",
            "description": "<p>Amount of people normally</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "bedrooms",
            "description": "<p>How many bedroom this property has</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "optimal_pricing",
            "description": "<p>Optimal price for this property based on above params</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful response:",
          "content": "    HTTP/1.1 201 OK\n{\n  \"message\": \"Property was successfully added\",\n  \"user_property\": {\n    \"id\": 21,\n    \"name\": \"TheHaven\",\n    \"host_since\": \"2001\",\n    \"zipcode\": \"10010\",\n    \"room_type\": \"Entirehome/apt\",\n    \"maximum_nights\": 10,\n    \"minimum_nights\": 3,\n    \"extra_people\": 2,\n    \"accomodates\": 6,\n    \"neighbourhood\": \"Mitte\",\n    \"beds\": 5,\n    \"property_type\": \"Apartment\",\n    \"cancellation_policy\": \"strict_14_with_grace_period\",\n    \"guests_included\": 4,\n    \"bedrooms\": 3,\n    \"bathrooms\": 2,\n    \"optimal_price\": 120\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/docs/userProperties_doc.js",
    "groupTitle": "User_Properties"
  },
  {
    "type": "delete",
    "url": "/user/:userID/properties/:propID",
    "title": "Delete a property",
    "version": "1.0.0",
    "name": "Deletes_a_property_from_this_user_s_account",
    "group": "User_Properties",
    "description": "<p>The user can delete a specific property from their account</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userID",
            "description": "<p>User's account id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "propID",
            "description": "<p>Property ID that belongs to the user</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful response:",
          "content": "    HTTP/1.1 200 OK\n{\n  \"message\": \"Property has been successfully deleted\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/docs/userProperties_doc.js",
    "groupTitle": "User_Properties"
  },
  {
    "type": "get",
    "url": "/:userID/properties/:propID",
    "title": "Get specific saved property",
    "version": "1.0.0",
    "name": "Gets_a_specific_property_this_user_has_saved",
    "group": "User_Properties",
    "description": "<p>If a user has properties saved, this route will return a specific property based on it's ID</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userID",
            "description": "<p>User's account id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "propID",
            "description": "<p>Property ID that belongs to the user</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User property id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Property name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "host_since",
            "description": "<p>User's original hosting date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "zipcode",
            "description": "<p>Property zip code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "room_type",
            "description": "<p>Property's room type</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "maximum_nights",
            "description": "<p>Property's max nights reserved</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "minimum_nights",
            "description": "<p>Property's min nights reserved</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "extra_people",
            "description": "<p>Extra people allowed</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "accomodates",
            "description": "<p>How many can this property accomodate</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "neighborbood",
            "description": "<p>Location of property</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "beds",
            "description": "<p>How many beds the property has</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "property_type",
            "description": "<p>Property type</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "cancellation_policy",
            "description": "<p>Cancellation policy</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "guests_included",
            "description": "<p>Amount of people normally</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "bedrooms",
            "description": "<p>How many bedroom this property has</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "optimal_pricing",
            "description": "<p>Optimal price for this property based on above params</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful response:",
          "content": "    HTTP/1.1 200 OK\n{\n  \"id\": 15,\n  \"name\": \"TheHaven\",\n  \"host_since\": \"2001\",\n  \"zipcode\": \"10010\",\n  \"room_type\": \"Entirehome/apt\",\n  \"maximum_nights\": 10,\n  \"minimum_nights\": 3,\n  \"extra_people\": 2,\n  \"accomodates\": 6,\n  \"neighbourhood\": \"Mitte\",\n  \"beds\": 5,\n  \"property_type\": \"Apartment\",\n  \"cancellation_policy\": \"strict_14_with_grace_period\",\n  \"guests_included\": 4,\n  \"bedrooms\": 3,\n  \"bathrooms\": 2,\n  \"optimal_price\": 120\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/docs/userProperties_doc.js",
    "groupTitle": "User_Properties"
  },
  {
    "type": "get",
    "url": "/:userID/properties/",
    "title": "Get all saved properties",
    "version": "1.0.0",
    "name": "Gets_all_saved_properties_for_this_user",
    "group": "User_Properties",
    "description": "<p>If a user has properties saved, this route will return all that user's saved properties</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userID",
            "description": "<p>User's account id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User property id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Property name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "host_since",
            "description": "<p>User's original hosting date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "zipcode",
            "description": "<p>Property zip code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "room_type",
            "description": "<p>Property's room type</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "maximum_nights",
            "description": "<p>Property's max nights reserved</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "minimum_nights",
            "description": "<p>Property's min nights reserved</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "extra_people",
            "description": "<p>Extra people allowed</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "accomodates",
            "description": "<p>How many can this property accomodate</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "neighborbood",
            "description": "<p>Location of property</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "beds",
            "description": "<p>How many beds the property has</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "property_type",
            "description": "<p>Property type</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "cancellation_policy",
            "description": "<p>Cancellation policy</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "guests_included",
            "description": "<p>Amount of people normally</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "bedrooms",
            "description": "<p>How many bedroom this property has</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "optimal_pricing",
            "description": "<p>Optimal price for this property based on above params</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful response:",
          "content": "    HTTP/1.1 200 OK\n{\n  \"user_properties\": [\n    {\n      \"id\": 15,\n      \"name\": \"TheHaven\",\n      \"host_since\": \"2001\",\n      \"zipcode\": \"10010\",\n      \"room_type\": \"Entirehome/apt\",\n      \"maximum_nights\": 10,\n      \"minimum_nights\": 3,\n      \"extra_people\": 2,\n      \"accomodates\": 6,\n      \"neighbourhood\": \"Mitte\",\n      \"beds\": 5,\n      \"property_type\": \"Apartment\",\n      \"cancellation_policy\": \"strict_14_with_grace_period\",\n      \"guests_included\": 4,\n      \"bedrooms\": 3,\n      \"bathrooms\": 2,\n      \"optimal_price\": 120\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/docs/userProperties_doc.js",
    "groupTitle": "User_Properties"
  },
  {
    "type": "put",
    "url": "/user/:userID/properties/:propID",
    "title": "Update a property",
    "version": "1.0.0",
    "name": "Updates_a_property_this_user_owns",
    "group": "User_Properties",
    "description": "<p>If a user has properties saved, they can edit a specific property</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userID",
            "description": "<p>User's account id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "propID",
            "description": "<p>Property ID that belongs to the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User property id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Property name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "host_since",
            "description": "<p>User's original hosting date</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "zipcode",
            "description": "<p>Property zip code</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "room_type",
            "description": "<p>Property's room type</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "maximum_nights",
            "description": "<p>Property's max nights reserved</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "minimum_nights",
            "description": "<p>Property's min nights reserved</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "extra_people",
            "description": "<p>Extra people allowed</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "accomodates",
            "description": "<p>How many can this property accomodate</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "neighborbood",
            "description": "<p>Location of property</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "beds",
            "description": "<p>How many beds the property has</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "property_type",
            "description": "<p>Property type</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cancellation_policy",
            "description": "<p>Cancellation policy</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "guests_included",
            "description": "<p>Amount of people normally</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "bedrooms",
            "description": "<p>How many bedroom this property has</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "optimal_pricing",
            "description": "<p>Optimal price for this property based on above params</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User property id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Property name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "host_since",
            "description": "<p>User's original hosting date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "zipcode",
            "description": "<p>Property zip code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "room_type",
            "description": "<p>Property's room type</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "maximum_nights",
            "description": "<p>Property's max nights reserved</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "minimum_nights",
            "description": "<p>Property's min nights reserved</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "extra_people",
            "description": "<p>Extra people allowed</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "accomodates",
            "description": "<p>How many can this property accomodate</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "neighborbood",
            "description": "<p>Location of property</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "beds",
            "description": "<p>How many beds the property has</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "property_type",
            "description": "<p>Property type</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "cancellation_policy",
            "description": "<p>Cancellation policy</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "guests_included",
            "description": "<p>Amount of people normally</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "bedrooms",
            "description": "<p>How many bedroom this property has</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "optimal_pricing",
            "description": "<p>Optimal price for this property based on above params</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful response:",
          "content": "    HTTP/1.1 201 OK\n{\n  \"message\": \"Property has been updated\",\n  \"user_property\": {\n    \"id\": 20,\n    \"name\": \"TheHaven\",\n    \"host_since\": \"200121\",\n    \"zipcode\": \"10010\",\n    \"room_type\": \"Entirehome/apt\",\n    \"maximum_nights\": 10,\n    \"minimum_nights\": 3,\n    \"extra_people\": 2,\n    \"accomodates\": 6,\n    \"neighbourhood\": \"Mitte\",\n    \"beds\": 5,\n    \"property_type\": \"Apartment\",\n    \"cancellation_policy\": \"strict_14_with_grace_period\",\n    \"guests_included\": 4,\n    \"bedrooms\": 3,\n    \"bathrooms\": 2,\n    \"optimal_price\": 120\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/docs/userProperties_doc.js",
    "groupTitle": "User_Properties"
  }
] });
