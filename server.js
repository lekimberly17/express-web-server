const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public")); // serving 

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})
