const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send(`
        <html>
            <head><title>DevOps App</title></head>
            <body style="text-align: center; font-family: Arial; margin-top: 50px;">
                <h1>🚀 DevOps Pipeline Successful!</h1>
                <p>Your web application is running inside a Docker container on AWS EC2.</p>
            </body>
        </html>
    `);
});

app.listen(PORT, () => {
    console.log(`Application is running on http://localhost:${PORT}`);
});
