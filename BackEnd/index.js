const express = require("express")
const port = 8080 
const server = express()
const axios = require("axios")
const cors = require("cors")

server.use(express.json())
server.use(cors({
    origin: 'http://localhost:3000'
}))

server.get("/pokemon/:id", async (request,response) => {
    try {
        const id = request.params.id
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        response.json(res.data)
    }catch(error){
        console.error(error)
        response.status(500).json({error: "Internal Server Error"})
    }
})


server.listen(port, () => {
    console.log(`Server Rodando na porta: http://localhost:${port}`)
})



