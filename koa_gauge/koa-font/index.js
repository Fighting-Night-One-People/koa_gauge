var fetch=require("node-fetch");
var router=require("koa-router")();
var Koa=require("koa");

var koa=new Koa();

router.get("/",async(ctx,next)=>{
    ctx.body="hello koa";
    testgauge();
})

koa.use(router.routes());
koa.listen(5000,()=>{
    console.log("start 5000.........");
})
function testgauge(){
    fetch("http://127.0.0.1:4000")
    .then(res=>res.json())
    .then(json=>console.log(json));
}