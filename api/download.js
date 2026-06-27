export default async function handler(req,res){

const url=req.query.url;

if(!url){
res.status(400).send("No URL");
return;
}

try{

const response = await fetch(url);

if(!response.ok){
throw new Error("下载失败");
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
.send("Error: "+e.message);

}

}
