import express from "express"
import usersRouters from "./routes/users.routes.js"

const app = express()

app.use(express.static("public"))

app.use('/users', usersRouters)
app.use('/usuarios', usersRouters)

const PORT = 3000
app.listen(PORT, () => console.log(`http://localhost:${PORT}`))

