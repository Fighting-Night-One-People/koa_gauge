
var exec=require("child_process").exec;
var comm="gauge run ../gauge-koa/specs/index.spec";
function execute(comm){
    exec(comm,function(error,stdout,stderr){
        if(error){
            console.error(error);
        }else{
            console.log("成功!");
        }
    })
};
execute(comm);
