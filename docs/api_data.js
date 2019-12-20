define({ "api": [
  {
    "type": "post",
    "url": "/register",
    "title": "Registers a user",
    "name": "Register",
    "group": "Accounts",
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
          "content": "   HTTP/1.1 201 OK\n{\n   \"user\": {\n       \"id\" : 5,\n       \"username\" : \"xX_DarthVader_Xx\"\n     },\n   \"token\" : \"a really long string of letters and numbers, separated by dots\"\n\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/auth.js",
    "groupTitle": "Accounts"
  }
] });
