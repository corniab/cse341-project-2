import express from 'express';
import connection from './db/connection.db';
import router from './routes/index.routes';
import config from './config/app';
import BodyParser from 'body-parser';
import swaggerUI from 'swagger-ui-express';
import swaggerDocs from './swagger';
import path from 'path';
import { auth } from 'express-openid-connect';

// Create express app
const app = express();

const authConfig = {
  authRequired: false,
  authOlogout: true,
};

app.use(auth(authConfig));

// Server static files
app.use(express.static(path.join(__dirname, 'public')));

// Serve api docs
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

// Include body parser
app.use(BodyParser.json());
app.use(express.urlencoded({ extended: true }));

// API route
app.use('/api/v1/', router);

// Connect database
connection.init();

// Start server
app.listen(config.port, () => {
  console.log(`⚡️ [ server ] Server is running on port: ${config.port}`);
});
