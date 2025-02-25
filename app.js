// File: app.js
const express = require('express');
const usersRouter = require('./routes/users');
const categoriesRouter = require('./routes/categories');
const bodyParser = require('body-parser');
const loanRouter = require('./routes/loans');
const reviewRoutes = require('./routes/review');
const bookRouter = require('./routes/booksroutes');

const app = express();
app.use(express.json());

app.use('/api/users', usersRouter);
app.use('/api/categories', categoriesRouter);
app.use('/api/loans', loanRouter);
app.use('/api/review', reviewRoutes);
app.use('/api/books', bookRouter);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const PORT = process.env.PORT || 3434;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;