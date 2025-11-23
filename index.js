import express from "express"

const app = express(); 

app.use(express.static("public"))

app.use((req,res,next) => {
    console.log(`Datos recibidos: ${req.method} ${req.url}`);
    next();
})

app.get('/',(req,res) => {
    res.send("hola")  
})

app.get('/users')

app.get('/about',(req,res) => {
    res.send("pagina about")
})

app.get('/sumar', (req,res) => {  //con req obtenemos datos y con res damos la respuesta
    const numero1 = +req.query.num1 //va a recibir por query un dato
    const numero2 = +req.query.num2
    const result = numero1 + numero2 //localhost:3000/sumar?num1=5&num2=3 --> 8
    res.send({resultado:result})
})

app.get('/add/:num1/:num2', (req,res) => {
    const numero1 = +req.params.num1 //params pra mandarlo por parametro
    const numero2 = req.params.num2
    const result = numero1 + numero2
    res.send(`resultado: ${result}`)
})

const PORT = 3000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`))