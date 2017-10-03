var mysql      = require('mysql');
var xlsx = require('node-xlsx').default;
var config = require('../config');
var fs = require('fs');

var conn = mysql.createConnection(config.mysql);

conn.connect();

const workSheetsFromFile = xlsx.parse(`${__dirname}/test.xlsx`);
var sheet1 = workSheetsFromFile[0].data;
var valid = sheet1.slice(2,10);
var len  = valid.length;
var count = 0;
var res = [];
console.log(len);


valid.forEach(function(row){
    var id = row[0];
    // q = 'SELECT count(DISTINCT stu_key) FROM zhx_fact_enroll WHERE is_admit=1';
    var q = row[8];
    // q = 'select * from zhx_fact_enroll limit 1';
    var db = 'dw';
    if(row[7] != db){
        db = row[7];
        conn.query('use  ' + db);
    }

    conn.query(q, function (error, results, fields) {
        // console.log(results,fields);
        if (error) 
            console.log(error);   
        // else{
        key = fields[0].name
        value = results[0][key];
        res[id] = value;
        console.log('id: '+id + 'get ' + value);
        ++count;
        // console.log(count,len);
        if(count == len){
            console.log(res);
            // app.end();
            fs.writeFile('results_from_mysql.json',JSON.stringify(res));
        }
    });

});
conn.end();


