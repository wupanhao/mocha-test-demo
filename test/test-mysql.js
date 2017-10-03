var mysql  = require('mysql');

var config = require('../config');

console.log(config);

var dw = mysql.createConnection(config.mysql);

dw.connect();


q = 'SELECT count(DISTINCT stu_key) FROM zhx_fact_enroll WHERE is_admit=1';
// q = 'select * from zhx_fact_enroll limit 1';
dw.query(q.replace("FROM","AS r FROM") , function (error, results, fields) {
  if (error) throw error;
  console.log(results[0].r);
  // console.log('The solution is: ', results[0].solution);
});
dw.end();