# Create a REST api with NodeJs / Express / Mongo

## Steps

### Create the application

- install express and nodemon
- Display "Hello World" on ```http://localhost:3000```

### Write the model

- Connect to MongoDb
- Create the model
- Save a document
- Ensure unique values [help here](https://luxiyalu.com/mongoose-unique-not-working/)

### Write the controller

- Handle the request "Create"
- Handle the request "Read"
- Handle the request "Update"
- Handle the request "Delete"

### Improve code quality

- Replace Promise by async await for Create and Read methods
- Use Express default error handler
- Replace the try-catch block by an async function
- Use a High order function to wrap async errors
- Use express-async-handler
- Handle duplicate name error
- Handle not found error