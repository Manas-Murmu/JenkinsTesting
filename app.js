const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Hello from Jenkins Pipeline 🚀");
    res.send("This is a sample Node.js application to demonstrate Jenkins Pipeline integration.");

    res.send("Feel free to explore and modify the code as needed!");    
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
