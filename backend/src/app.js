require("dotenv").config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
});

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const rfs = require("rotating-file-stream");
const path = require("path");

const accessLogStream = rfs("access.log", {
  interval: "1d", // rotate daily
  path: path.join(__dirname, "..", "logs")
});

const errorLogStream = rfs("error.log", {
  interval: "1d", // rotate daily
  path: path.join(__dirname, "..", "logs")
});

class AppController {
  constructor() {
    this.express = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.express.use(express.json());
    this.express.use(cors());
    this.express.use(helmet());
    this.express.use(express.urlencoded({ extended: false }));
    this.express.use(morgan("dev"));
    this.express.use(
      morgan("combined", {
        skip: function(req, res) {
          return res.statusCode <= 400;
        },
        stream: errorLogStream
      })
    );
    this.express.use(morgan("combined", { stream: accessLogStream }));
  }

  routes() {
    this.express.use(require("./routes"));
  }
}

module.exports = new AppController().express;
