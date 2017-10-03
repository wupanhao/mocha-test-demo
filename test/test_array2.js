var getData = (i)=>{
    var d = Promise.defer();
    setTimeout ( ()=> {
        d.resolve( "data" + i);
    }, 1000);
    return d.promise;
}

function testasync(){
  var arr = [[1,2],[2,4],[3,9],[4,3],[5,8],[6,11]];
  arr.forEach(function(ele){
    setTimeout(function(){
    api_gets[ele[0]] = ele[1];
    console.log(ele);
  console.log(api_gets);
},ele[1]*200)
  });
  return 1;
}

var all_tasks = [];
for (var i=0;i<100;i++){
    all_tasks.push( getData(i) );
}

Promise.all( all_tasks ).then ( (task_results) =>{
    console.log( task_results ) ;
});