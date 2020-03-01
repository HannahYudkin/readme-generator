require("dotenv").config({path: '02-Homework/Develop/.env'});
const axios = require("axios");
const token = process.env.GITHUB_TOKEN;
const request = require('request');


// let request = require('request');
//   function getToken() {
//   return $.ajax({
//     url: 'https://api.github.com/user',
//     auth: {
//         'user': 'HannahYudkin',
//         'pass': token
//     }
//   }
//   )};
//   function callback(error, response, body) {
//     if (!error && response.statusCode == 200) {
//         console.log(body);
//     }
// }

// request(options, callback);


  let headers = {
    'User-Agent': 'HannahYukin',
    'Authorization': `token ${token}`
  };
  let options = {
      url: 'https://api.github.com/user',
      headers: headers,
      auth: {
          'user': "HannahYudkin",
          'pass': token
      }
  };
  function callback(error, response, body) {
      if (!error && response.statusCode == 200) {
          console.log(body);
      }
      let json = JSON.parse(body);
      //console.log(json);
      
  }
  request(options, callback);






// const api = {
//   getUser(username) {
//     const queryUrl = `https://api.github.com/users/${username}`;
//     axios.get(queryUrl).then(function(response) {
//       gitEmail = response.data.email;
//       gitImage = response.data.avatar_url;
//     });
//   }
// };

// module.exports = api;

// getToken();