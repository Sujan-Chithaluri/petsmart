const express = require("express");
const cors = require("cors");
const axios = require("axios"); // Import Axios
const bodyParser = require("body-parser"); // Import body-parser

const app = express();
const port = 3001;

// Enable CORS for all routes
app.use(cors());

// Parse JSON and URL-encoded data with body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Define a route with CORS enabled
app.post("/loginUser", async (req, res) => {
  try {
    const response = await axios.post(
      "http://localhost:8080/loginUser",
      req.body
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error:", error);
    res
      .status(500)
      .json({ error: "An error occurred while making the request." });
  }
});

app.post("/registerUser", async (req, res) => {
  try {
    const response = await axios.post(
      "http://localhost:8080/saveUser",
      req.body
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error:", error);
    res
      .status(500)
      .json({ error: "An error occurred while making the request." });
  }
});

app.post("/saveOrder", async (req, res) => {
  try {
    const response = await axios.post(
      "http://localhost:8080/saveOrder",
      req.body
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error:", error);
    res
      .status(500)
      .json({ error: "An error occurred while making the request." });
  }
});

app.get("/getOrders/:userId", async (req, res) => {
  try {
    const response = await axios.get(
      `http://localhost:8080/getOrders/${req.params.userId}`
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error:", error);
    res
      .status(500)
      .json({ error: "An error occurred while making the request." });
  }
});

app.post("/saveAppointment", async (req, res) => {
  try {
    const response = await axios.post(
      "http://localhost:8080/saveAppointment",
      req.body
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error:", error);
    res
      .status(500)
      .json({ error: "An error occurred while making the request." });
  }
});

app.get("/getAppointments/:userId", async (req, res) => {
  try {
    const response = await axios.get(
      `http://localhost:8080/getAppointments/${req.params.userId}`
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error:", error);
    res
      .status(500)
      .json({ error: "An error occurred while making the request." });
  }
});

app.post("/saveCart", async (req, res) => {
  try {
    const response = await axios.post(
      "http://localhost:8080/saveCart",
      req.body
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error:", error);
    res
      .status(500)
      .json({ error: "An error occurred while making the request." });
  }
});

app.get("/getCart/:userId", async (req, res) => {
  try {
    const response = await axios.get(
      `http://localhost:8080/getCart/${req.params.userId}`
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error:", error);
    res
      .status(500)
      .json({ error: "An error occurred while making the request." });
  }
});

app.get("/sendOtp/:email", async (req, res) => {
  try {
    const response = await axios.get(
      `http://localhost:8080/sendOtp/${req.params.email}`
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error:", error);
    res
      .status(500)
      .json({ error: "An error occurred while making the request." });
  }
});

app.post("/updatePassword", async (req, res) => {
  try {
    const response = await axios.post(
      "http://localhost:8080/updatePassword",
      req.body
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error:", error);
    res
      .status(500)
      .json({ error: "An error occurred while making the request." });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
