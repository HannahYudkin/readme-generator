require("dotenv").config();
const axios = require("axios");
const token = process.env.GITHUB_TOKEN;

//var request = require('request');
// function getToken() {
//   return $.ajax({
//     url: 'https://api.github.com/user',
//     auth: {
//         'user': 'HannahYudkin',
//         'pass': token
//     }
//   }
//   )};

const api = {
  getUser(username) {
    const queryUrl = `https://api.github.com/users/${username}`;
    axios.get(queryUrl).then(function(response) {
      gitEmail = response.data.email;
      gitImage = response.data.avatar_url;
      return;
    });
  }
};

module.exports = api;

// getToken();
//api.getUser("HannahYudkin");
