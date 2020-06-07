const fetch=require("node-fetch");
const assert=require("assert");
step("test <url> username <username>",async(url,username)=>{
    await fetch(url)
    .then(res=>res.json())
    .then(json=>{
        console.log(json);
        assert.equal(json.username,username,"用户名不正确");
    });
});

step("test <url> password <password>",async(url,password)=>{
    await fetch(url)
    .then(res=>res.json())
    .then(json=>{
        console.log(json);
        assert.equal(json.password,password,"密码不正确");
    });
});