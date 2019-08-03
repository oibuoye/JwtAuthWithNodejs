# JwtAuthWithNodejs

This repository contains a demo API built with NodeJS.
The API is used to manage states and users with JWT used for authentication.


### User ###
-   `GET` /api/user --- Response

```json
[
    {
        "_id": "5d454f6c0c38920608b20763",
        "name": "Opeyemi Ibuoye",
        "email": "xxx@yahoo.com",
        "__v": 0
    },
    {
        "_id": "5d454f6c0c38920608b20764",
        "name": "Opeyemi xxxxx",
        "email": "xxxx@yahoo.com",
        "__v": 0
    }
]


-   `GET` /api/user/5d454f6c0c38920608b20763 --- Response

```json

    {
        "_id": "5d454f6c0c38920608b20763",
        "name": "Opeyemi Ibuoye",
        "email": "xxx@yahoo.com",
        "__v": 0
    }

-   `POST` /api/user  --- Request--- Add a new user'

```json
    {
        "name": "Opeyemi Ibuoye",
        "email": "ibuoyeope@yahoo.com",
        "password": "password"
    }


-   `Post` /api/auth --- Request

```json
    {
        "email": "ibuoyeope@yahoo.com",
        "password": "password"
    }



-   `GET` /api/states

```json
[
    {
        "_id": "67263538769e0300171887365",
        "name": "Lagos"
    },
    {
        "_id": "987263538760300171887366",
        "name": "Oyo"
    }
]


-   `GET` /api/states/67263538769e0300171887365

```json

    {
        "_id": "67263538769e0300171887365",
        "name": "Lagos"
    }

-   `POST` /api/states  - Add a new state with with token passed as part of the header 'x-auth-token'

```json
    {
        "name": "Lagos"
    }



### Development
This application was developed using [ExpressJS](http://expressjs.com/). MongoDB was used for persisting data with [Mongoose](https://mongoosejs.com/) as [ORM]

### Installation
* Start up your terminal (or Command Prompt on Windows OS).
* Ensure that you've `node` installed on your PC.
* Clone the repository by entering the command `git clone https://github.com/Opecodeforliving/JwtAuthWithNodejs.git` in the terminal.
* Navigate to the project folder using `cd JwtAuthWithNodejs` on your terminal (or command prompt)
* After cloning, install the application's dependencies with the command `npm install`.
* Create an environment variable with the name `nodejs_jwtdbconnection_string` and `nodejs_jwtsecretkey` (Windows OS, you may need to restart your system)
* Then, you can then start the server with the command: `npm start`.




### Author
**Ibuoye Opeyemi** - Software Developer at Parkway Projects Ltd