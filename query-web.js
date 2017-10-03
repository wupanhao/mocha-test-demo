// import xlsx from 'node-xlsx';
var xlsx = require('node-xlsx').default;
var fs = require('fs');
var axios = require('axios');

// Parse a file
const workSheetsFromFile = xlsx.parse(`${__dirname}/test.xlsx`);

var sheet1 = workSheetsFromFile[0].data;

var valid = sheet1.slice(2,10);
var len  = valid.length;
var count = 0;

var res = [];

	valid.forEach(function(row){
     var url = row[3].replace('8081','8080')+'/'+row[4];
  	     axios.get(url)
   	  .then(function (response) {
         var id = row[0];
      		var key = row[5];
      		var value = response.data.data[0][key];
          res[id] = value ;
      		// console.log(response.data.data[0]);
      		 console.log("test id " + id + ' get ' + value);
          count++;
          if(count == len){
              console.log(res);
              fs.writeFile('results_from_web.json',JSON.stringify(res));

          }
  		})
    	.catch(function (error) {
      		console.log(error);
    	});

  });

