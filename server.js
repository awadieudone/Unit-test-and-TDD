import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes/index';

// Instantiate express
const app  =  express();

//  set our port
const port = process.env.PORT || 8000;

// configure app to use bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Register our routes in app
app.use('/', routes);

// Start Our server 
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

// export our app for testing purposes
export default app;