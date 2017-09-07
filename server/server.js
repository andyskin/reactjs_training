const express = require ('express'),
         path = require('path');
        // index = require ( '../public/index.html');

const app = express(),
     port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname +'/../public/index.html'));
});

app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});