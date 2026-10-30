import http from 'node:http';
import {readFile} from 'node:fs/promises';
const files={'/':'index.html','/app.js':'app.js','/style.css':'style.css','/shop.mjs':'shop.mjs'};
http.createServer(async(req,res)=>{const file=files[new URL(req.url,'http://localhost').pathname];if(!file){res.writeHead(404);return res.end('Not found')}try{res.setHeader('Content-Type',file.endsWith('html')?'text/html; charset=utf-8':file.endsWith('css')?'text/css':'text/javascript');res.end(await readFile(new URL(file,import.meta.url)))}catch{res.writeHead(500);res.end('Server error')}}).listen(Number(process.env.PORT||3000),'0.0.0.0',()=>console.log('Demo Dots: http://localhost:3000'));
