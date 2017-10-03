// import xlsx from 'node-xlsx';
var xlsx = require('node-xlsx').default;
var fs = require('fs');
var assert = require('assert');
var expect = require('expect');

// Parse a buffer
const workSheetsFromBuffer = xlsx.parse(fs.readFileSync(`${__dirname}/test.xlsx`));
// Parse a file
const workSheetsFromFile = xlsx.parse(`${__dirname}/test.xlsx`);

var sheet1 = workSheetsFromFile[0].data;

console.log(sheet1.slice(2,10));

describe('Test', function() {
	sheet1.slice(1,4).forEach(function(row){
		// console.log("test id " + row[0]);
	 //    assert.equal(row[4],row[2]);
		describe('#id:'+row[0], function() {
	    it('should return 1' , function() {
	    	// expect(row.indexOf(2)).to.equal(row[4]);
	    	assert.equal(row[4],row[2]);
	    });
	  });
	console.log(row[2],row[4]);
}
  );
});