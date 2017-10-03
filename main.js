var fs = require('fs');
var xlsx = require('node-xlsx').default;
var assert = require('assert');

const workSheetsFromFile = xlsx.parse(`${__dirname}/test/test.xlsx`);

var result_from_mysql = JSON.parse(fs.readFileSync('results_from_mysql.json'));
var result_from_web = JSON.parse(fs.readFileSync('results_from_web.json'));
console.log(result_from_mysql);

var sheet1 = workSheetsFromFile[0].data;

sheet1.slice(2,10).forEach(function(row){
describe('test id '+row[0], function() {
  it(result_from_mysql[row[0]] + ' shoud == ' + row[9], function() {
    assert.equal(result_from_mysql[row[0]],row[9]);
  });
});
	});