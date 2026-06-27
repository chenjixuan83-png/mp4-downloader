export default async function handler(req,res){

const url=req.query.url;


if(!url){
return res.status(400).send("没有链接");
}


try{

const response = await fetch(url,{
headers:{
"Referer":"https://hembed.com/"
}
});


console.log(response.status);
console.log(response.headers.get("content-type"));


if(!response.ok){

return res.status(500)
.send("视频请求失败");

}



res.setHeader(
"Content-Type",
"video/mp4"
);



res.setHeader(
"Content-Disposition",
'attachment; filename="video.mp4"'
);



response.body.pipe(res);



}

catch(e){

res.status(500)
.send(e.message);

}

}
