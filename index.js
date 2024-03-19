const express = require("express");
const route = require("./route");

// Initiate Express
const app = express();
const port = 3000;

// Enable request body JSON
app.use(express.json());

// "/"
app.use("/", route);

app.use("*", (req, res) => {
    const response = {
        data: null,
        message: "Route not found",
    };

    res.status(404).json(response);
});

app.use(express.static("public"));

// Error middleware
app.use((err, req, res, next) => {
    let statusCode = 500;
    let message = "Internal Server Error";

    if (err.statusCode) {
        statusCode = err.statusCode;
    }
    if (err.message) {
        message = err.message;
    }

    res.status(statusCode).json({
        data: null,
        message,
    });
});

// Listen
app.listen(port, () => {
    console.log("Server Running on:", port);
});
