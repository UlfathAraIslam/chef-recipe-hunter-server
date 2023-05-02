const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const chefs = require('./data/chefs.json');

app.use(cors());

app.get('/', (req,res) => {
    res.send('chef recipe is running ')
});

app.get('/chefs', (req, res) => {
    res.send(chefs);
});

app.get('/chefs/:id', (req, res) => {
    const id = parseInt(req.params.id);
    console.log(id);
    const selectedChef  = chefs.find(n=> n.id ===id);
    res.send(selectedChef);
})

app.listen(port, () => {
    console.log(`chef recipe is running on port ${port}`)
})