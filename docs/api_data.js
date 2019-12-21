define({ "api": [
  {
    "type": "post",
    "url": "/login",
    "title": "Log a user in",
    "version": "1.0.0",
    "name": "Login",
    "group": "Accounts",
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
    "filename": "routes/auth.js",
    "groupTitle": "Accounts"
  },
  {
    "type": "post",
    "url": "/register",
    "title": "Register a user",
    "version": "1.0.0",
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
          "content": "   HTTP/1.1 201 OK\n{\n   \"user\": {\n       \"id\" : 5,\n       \"username\" : \"xX_DarthVader_Xx\"\n     },\n   \"token\" : \"a really long string of letters and numbers, separated by dots\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/auth.js",
    "groupTitle": "Accounts"
  },
  {
    "type": "get",
    "url": "/user/:id",
    "title": "Retrieve a user's information",
    "version": "1.0.0",
    "name": "Retrieve_User_Info",
    "group": "Accounts",
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
    "filename": "routes/userData.js",
    "groupTitle": "Accounts"
  },
  {
    "type": "put",
    "url": "/user/:id",
    "title": "Update a user's info",
    "version": "1.0.0",
    "name": "Update_User",
    "group": "Accounts",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": "<p>User's firstname - optional</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "last_name",
            "description": "<p>User's lastname - optional</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User's email - must be unique, but is optional</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User's username - must be unique, but is optional</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User's password - optional</p>"
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
            "optional": false,
            "field": "first_name",
            "description": "<p>User's firstname - optional based on above</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "last_name",
            "description": "<p>User's lastname - optional based on above</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User's email - must be unique, but is optional based on above</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User's username - must be unique, but is optional based on above</p>"
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
    "filename": "routes/userData.js",
    "groupTitle": "Accounts"
  }
] });
