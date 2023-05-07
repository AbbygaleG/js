const  express = require('express');
const  axios = require('axios');

const  app = express();

  
app.get('/', async (req, res) => {
	res.send('Hello there!');
});


app.listen(3001, () => {
	console.log('Server listening on port 3001');
});