const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3333;

const ProfileController = require('./controllers/ProfileController');

app.use(cors());
app.use(express.json());

app
    .post('/', ProfileController.store);

app.listen(PORT, () => {
    console.log(`Server rodando em http://localhost:${PORT}`);
})