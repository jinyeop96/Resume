// Configuration
const express = require("express");
const path = require('path')
const app = express();

app.listen(8080);
app.use('/', express.static(path.join(__dirname, 'dist/resume-app')))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Angular configures # in URL. This requires no configuration on server side.
// In order to have no # in the URL, set urlHash: false in app-routing.module.ts
// Then, as below, accept all request and simply render the index.html
app.use('/', function(req, res, next) {
    // Just send the index.html for other files to support HTML5Mode
    const filePath = path.join(__dirname, 'dist/resume-app')  
    // res.sendFile('index.html', { root: filePath });
    // res.sendFile('index.html', { root: 'dist/resume-app' });
    res.sendFile(path.join(__dirname, 'dist/resume-app/index.html'));
});
