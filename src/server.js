const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const { port } = require('./config');

const PORT = port || 3000;

const app = express();

// middleware
app.use(morgan('common'));
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello express');
});

// Routes import
const userRoutes = require('./API/v1/users');

// Use routes
app.use('/users', userRoutes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
