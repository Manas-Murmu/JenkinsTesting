const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Hello from Jenkins Pipeline 🚀");
    res.send("This is a sample Node.js application to demonstrate Jenkins Pipeline integration.");

    res.send("Feel free to explore and modify the code as needed!");    
});



app.get('/test', (req, res) => {
    res.send("Manas 🚀");
    res.send("This is Applcaiton gration.");

    res.send("Feel Modify the COdeas needed!");    
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
    console.log("Visit http://localhost:3000 to see the application in action!");
});
