const express = require('express');
require('express-async-errors');

const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(routes);

// Error Handler (Middleware)
app.use((error, request, response, next) => {
	console.log(error);
	response.sendStatus(500);
});

// eslint-disable-next-line no-console
app.listen(3001, () => console.log('🔥 Server started running at http://localhost:3001'));
