const express = require('express');
const app = express();
const port = 3000;

const poems = ['A Dog Has Died', 'A Lemon', 'A Song Of Despair', "Absence","Algunas Bestias","Always","Brown And Agile Child","Come With Me, I Said, And No One Knew","Drunk As Drunk","I Crave Your Mouth, Your Voice, Your Hair"];

app.get('/:indexOfPoemsArray', (req, res) => {
    res.send(poems[req.params.indexOfPoemsArray]);
});

app.listen(port,() => {
    console.log('listening on port' , port);
});