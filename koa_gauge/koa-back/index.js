var Koa=require("koa");

var app=new Koa();

app.use(async (ctx,next)=>{
    console.log("back start...");
    await next();
});

app.use(async (ctx,next)=>{
    //ctx.response.body="Hello koa";
    return ctx.body=userInfo();
    await next();
});

app.use(async (ctx,next)=>{
    console.log("back end...");
})

app.listen(4000,()=>{
    console.log("http://loaclhost:4000");
});

function userInfo(){
    var jsonString={"username":"admin","password":"111111"};
    return jsonString;
}