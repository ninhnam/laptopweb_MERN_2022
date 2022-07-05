require('dotenv').config();
require('express-async-errors');

// extra security packages
const cors = require('cors');

const express = require('express');
const app = express();

const connectDB = require('./db/connect');
// routers
const authRouter = require('./routes/auth');
const sortRouter = require('./routes/sort');
const productRouter = require('./routes/product');
const authenticateUser = require('./middleware/authentication');
// const jobsRouter = require('./routes/jobs');
// error handler
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');
const bodyParser = require('body-parser')
const xss = require('xss-clean');
const swaggerUI = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');
const helmet = require('helmet');
const morgan = require('morgan');

app.use(helmet());
app.use(cors());
app.use(morgan('combined'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// app.use(express.static('./public'))
// routes
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/product', productRouter);
app.use('/api/v1/sort', authenticateUser, sortRouter);
// app.use('/api/v1/jobs', authenticateUser, jobsRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
