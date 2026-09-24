import express from 'express';import cors from 'cors';import dotenv from 'dotenv';dotenv.config();
const app=express();app.use(cors());app.use(express.json({limit:'10mb'}));
app.get('/api/health',(req,res)=>res.json({ok:true}));
app.post('/api/chat',async(req,res)=>{const messages=req.body.messages||[];const last=messages.at(-1)?.content||'';/* DEMO RESPONSE: connect your chosen AI provider here. */res.json({reply:`Demo backend received: ${last}\n\nConnect an AI provider in this server to generate real answers. Keep the API key in backend/.env.`});});
app.listen(process.env.PORT||4000,()=>console.log('Backend running on http://localhost:4000'));