const express = require('express');
const app = express();
const PORT = 3000; 


const songsDatabase = {
    "EastSyde": "EastSyde by Skillibeng",
    "Tyrant": "Tyrant by Masicka"
};


app.get('/search', (req, res) => {
    const query = req.query.query.toLowerCase();
    const song = songsDatabase[query] || 'No results found';
    res.json({ song: song });
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});