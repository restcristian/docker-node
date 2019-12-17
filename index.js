const express = require('express');
const app = express();

const PORT = 8081;

app.get('/', (req, res) => {
	res.send('hello');
});

app.listen(PORT, ()=> console.log(`listening on port ${PORT}`));