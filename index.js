const mongoose = require('mongoose');
const genres = require('./routes/genres');
const customers = require('./routes/customers');
const express = require('express');
const app = express();

mongoose.connect('mongodb+srv://appuser:password1x@blizzard-o0xwp.mongodb.net/vidly?retryWrites=true&w=majority')
 .then(() => console.log('Connected to MongoDB...'))
 .catch(err => console.error('Failed to connect to mongoDB...'))

app.use(express.json());
app.use('/api/genres', genres);
app.use('/api/customers', customers);

  
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));