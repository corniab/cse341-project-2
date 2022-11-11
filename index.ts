import express from 'express';
import connection from './src/db/connection.db';
import router from './src/routes/index.routes';
import BodyParser from 'body-parser';
import swaggerUI from 'swagger-ui-express';
import swaggerDocs from './swagger';
import path from 'path';

// Create express app
const app = express();

// Set the view engine
app.set('views', path.join(__dirname, 'public', 'views'));
app.set('view engine', 'ejs');

// Server static files
app.use(express.static(path.join(__dirname, 'public')));

// Serve api docs
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

// Specify port
const port = process.env.PORT || 3000;

// Include body parser
app.use(BodyParser.json());
app.use(express.urlencoded({ extended: true }));

// Initial route
app.use('/', router);

// Connect database
connection.init();

// Start server
app.listen(port, () => {
  console.log(`⚡️ [ server ] Server is running on port: ${port}`);
});
