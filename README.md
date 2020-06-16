# Konexio technical test
Every user can register an account and have access to the list of users and information. But only the registered user can modify his firstname.

After the user is registered, he will retrieve an access and refreshToken that will be stored as an httpOnly cookie. (Only the update of the firstname action need to be authenticated.)

Two tables are created in mongodb users and token. 
- The token table store the refresh token of each user. This table is implemented in the backend bu the front don't handle yet login and refresh token. 
- The user table store all information related to the user

------
- You can access the website here : [site](konexio.mushcommunity.org)
- You can access the API here: [api](api.konexio.mushcommunity.org/v1)
- You can access the API documentation here : [docs](api.konexio.mushcommunity.org/v1/docs)

-----

## Back
The backend was deployed on Digital Ocean on NodeJS v12 and served by nginx. It was at first deployed on heroku, but the use of an SSL certificate was priced consequently we had mixed content error on the webpage (the static site was served through HTTPS).

So I decided to make the install manually, and create the certificate with openssl and Let's encrypt.

The MongoDB instance is hosted on Mongo Atlas server. 

*The stack is:*
- ExpressJS
- Mongoose
- Joi for schema validation
- Multer for file upload
- Passport, JWT and cookie for authentification and authorization
- Swagger for the documentation
- Image hosting on S3 bucket

## Front
*The stack is :*
- React
- React functional components with React hooks
- React context for simple user store
- Ant Design and SCSS for the styling
- Axios for network request
- Deployement on netlify