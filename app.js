import express from "express"
import cors from "cors"
const app = express();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}));

let historico = []

app.get("/calc", (req, res)=>{
    return res.status(200).json(historico)
})

app.post("/historico",(req, res)=>{
    const { resultado } = req.body
    historico.push(resultado)
    return res.status(200).json('ok')
})

app.listen(3000, ()=>{
    console.log("api no ar!")
})