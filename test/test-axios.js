var assert = require('assert');
var axios = require('axios');
//console.log(assert.equal(1,1));
assert.equal(1,1);

axios.get('http://119.97.217.31:8081/new_admin/count/platform.action?pid=1')
  .then(function (response) {
  	key = 'teachertotal';
    // console.log(response.data.data[0][key]);
  })
  .catch(function (error) {
    console.log(error);
  });

