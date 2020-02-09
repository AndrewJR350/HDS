require("dotenv").config();

const _ = require("lodash");
const cors = require("cors");
const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const { MongoClient } = require("mongodb");
const { generateTemplate } = require("./EmailTemplate");

const PORT = 3000;
const DB_URL = process.env.DB_URL;
const AUTH_EMAIL = process.env.AUTH_EMAIL;
const FROM_EMAIL = process.env.FROM_EMAIL;
const AUTH_PASSWORD = process.env.AUTH_PASSWORD;

let cachedDb = null;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const sendMail = params => {
  const template = generateTemplate(params);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: AUTH_EMAIL,
      pass: AUTH_PASSWORD
    }
  });
  const mailOptions = {
    from: FROM_EMAIL,
    to: params.email,
    subject: "HOT DOG SHOWDOWN confirmation",
    text: "Welcome to HOT DOG SHOWDOWN",
    html: template
  };

  return transporter.sendMail(mailOptions);
};

const connectToDatabase = () => {
  const dbName = _.last(DB_URL.split("/")).split("?")[0];
  if (cachedDb && cachedDb.serverConfig.isConnected()) {
    return Promise.resolve(cachedDb);
  }
  return MongoClient.connect(DB_URL, {
    poolSize: 10,
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(client => {
    cachedDb = client.db(dbName);
    return cachedDb;
  });
};

const saveToDb = (db, params) => {
  return db.collection("registrations").insert(params);
};

app.post("/register", async (request, response) => {
  try {
    const params = request.body;
    let db = await connectToDatabase();
    await saveToDb(db, params);
    const result = await sendMail(params);
    response.send(result);
  } catch (error) {
    console.error("error", error);
    response.send(error);
  }
});

app.listen(PORT, () => {});
