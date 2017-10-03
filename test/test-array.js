// import xlsx from 'node-xlsx';
var xlsx = require('node-xlsx').default;
var fs = require('fs');
var axios = require('axios');
var async = require('async');
var api_gets = [];

function get(){

console.log('test');
return ;

// Parse a buffer
const workSheetsFromBuffer = xlsx.parse(fs.readFileSync(`${__dirname}/test.xlsx`));
// Parse a file
const workSheetsFromFile = xlsx.parse(`${__dirname}/test.xlsx`);


var sheet1 = workSheetsFromFile[0].data;
	sheet1.slice(2,3).forEach(function(row){
	console.log();
	axios.get(row[3]+'/'+row[4])
 	 .then(function (response) {
  		var key = row[5];
  		var value = response.data.data[0][key];
      api_gets[row[0]] = value;
  		console.log("test id " + row[0] + ' get ' + response.data.data[0][key]);
		})
  	.catch(function (error) {
    		console.log(error);
  	});

  });

}

function test(){
  console.log(api_gets)
}

async.series(
[get,test]
  );