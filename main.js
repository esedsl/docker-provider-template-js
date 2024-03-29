
// DON'T TOUCH THIS FILE UNLESS YOU KNOW WHAT YOU'RE DOING
import express from "express";
import { randomBytes } from 'crypto'
import { run } from './provider.js'
import axios from "axios";

const app = express();

const port = process.env.PORT || 8080;

app.get("/", async (req, res) => {
  const webhookUrl = req.headers.webhook_url;
  const jwt = req.headers.jwt;
  const targetAddress = req.query.target_address;

  if (!webhookUrl || !jwt || !targetAddress) {
    res.status(400).send("Missing required parameters");
    res.end();
    return;
  }

  const requestId = randomBytes(16).toString("hex");

  res.write(JSON.stringify({
    "status": 'pending',
    "id": requestId
  }));

  const providerData = await run(targetAddress);

  axios.post(webhookUrl, providerData, {
    headers: {
      'Content-Type': 'application/json',
      'JWT': jwt
    }
  });

  res.end();
});


// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});