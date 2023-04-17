import express from "express";
const cors = require("cors");
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try{
    const resp = await axios.put("https://api.chatengine.io/users/" , {
        username: username,
        secret: username,
        first_name: username,
    } , { headers : { "private-key" : process.env.API_KEY  }} )
    return res.status(resp.status).json(resp.data);
  }
  catch(err){
    return res.status(err.response.status).json(err.response.data);
  }

});
// private key 3512c8a5-e3f7-42e6-8fc2-85cb050e05b8

app.listen(3000, () => {
    console.log("Server started on port 3000");
});