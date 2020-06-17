# Konexio Front end

## Stack 
- Ant design css framework
- SCSS preprocessor
- React hooks and react functional components
- Axios for networking request

## Auth 
When a user register, a user object is store in the react context, so it can be access accross the app. Furthermore, a cookie 'token' is automatically set as an httpOnly cookie by the server. It contains information about the current registered user access and refresh token. 

The autenticated user will see an additional action that he can accomplish on the user list card. This action is the update of his firstname when he goes into his details page.

For now the refresh and centralized auth is not done yet. So a hack is accomplish, by calling the route /v1/auth/current on route change. 

This route is really simple and only check if the cookie is present from the request, if it is, the corresponding user is returned.

## Home /home
This route display the list of the users that registered. When clicking on a user card, you are redirected to the user detail page.

## Detail /user/:id
Display the details of the user. If it's the user that just registered, he will be able to update his firstname

## Register /register
Form to register as a user. Most of the fields needs to be validated to send the form


## Local install
Install the dependencies
```bash
npm install
```

Modify the .env file 
```bash
-  REACT_APP_API_URL=http://localhost:3000
```

You may need to set up a proxy in the package.json to make the cookies work
```bash
    proxy: http://localhost:3000
```

Run the developement server
```bash
    npm start
```

