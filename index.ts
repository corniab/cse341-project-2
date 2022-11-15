import express from 'express';
import connection from './src/db/connection.db';
import router from './src/routes/index.routes';
import config from './src/config/app';
import BodyParser from 'body-parser';
import swaggerUI from 'swagger-ui-express';
import swaggerDocs from './swagger';
import path from 'path';
import cookieParser from 'cookie-parser';

// Create express app
const app = express();

// Set the view engine
app.set('views', path.join(__dirname, 'public', 'views'));
app.set('view engine', 'ejs');

// Server static files
app.use(express.static(path.join(__dirname, 'public')));

// Serve api docs
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

// Include cookie parser
app.use(cookieParser());

// Include body parser
app.use(BodyParser.json());
app.use(express.urlencoded({ extended: true }));

// Initial route
app.use('/', router);

// Connect database
connection.init();

// Start server
app.listen(config.port, () => {
  console.log(`⚡️ [ server ] Server is running on port: ${config.port}`);
});
