require("dotenv").config({ path: "02-Homework/Develop/.env" });
const axios = require("axios");
const token = process.env.GITHUB_TOKEN;


const api = {

  getUser(username) {
    const queryURL = `https://api.github.com/users/${username}`;
    
    return axios.get(queryURL, {
      headers:{
        "Authorization": `token ${token}`
      }
    });
  }
}

module.exports = api;

//api.getUser("lalliere")