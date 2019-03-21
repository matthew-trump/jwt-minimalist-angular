# AngularJwt

This repository contains a simple Angular CLI project template to be used with projects that need a secure login to a backend. It is a barebones project with the minimum to use JWT authorization to a backend server which provides JWT tokens (e.g. (the node-jwt-example)[https://github.com/matthew-trump/node-jwt-example] ) 

It is enabled to do the following things:

* allow username/password logins to the backend via a login form.
* receive and store the JWT token returned from a successful login. 
* recognize http requests to the api and to add the JWT token to the Authorization header.
* provide the login state throughout the app via a service.
* establish a protected route within the app that is accessible only when logged in, and redirect invalid access to the login form (this feature requires Routing to be enabled).

The configurations for various features are found in the environment file.

### Generated comments

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.9.

