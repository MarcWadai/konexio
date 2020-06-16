# Konexio technical test
Every user can register an account and have access to the list of users and information. But only the registered user can modify his firstname.

After the user is registered, he will retrieve an access and refreshToken that will be stored as an httpOnly cookie. (Only the update of the firstname action need to be authenticated.)

Two tables are created in mongodb users and token. 
- The token table store the refresh token of each user. This table is implemented in the backend bu the front don't handle yet login and refresh token. 
- The user table store all information related to the user

------
You can access the website here : 
you can access the API here:
You can access the API documentation here : 
-----

## Back
The stack is:
- ExpressJS
- Mongoose
- Joi for schema validation
- Multer for file upload
- Passport, JWT and cookie for authentification and authorization
- Swagger for the documentation
- Deployement on heroku
- Image hosting on S3 bucket

## Front
The stack is 
- React
- React functional components with React hooks
- React context for simple user store
- Ant Design and SCSS for the styling
- Axios for network request
- Deployement on netlify