const port = 3000
const { response } = require('express')
const uuid = require('uuid')
const bodyParser = require('body-parser')

const express = require('express')

const app = express()
app.use(bodyParser.json())


const users = []

const myFirstMiddlewares = (request, response, next) => {
    console.log('Fui chamado')
}

app.use(myFirstMiddlewares)

app.get('/users', (request, response) => {
   
    return response.json(users)
})

app.post('/users', (request, response) => {
try{
    const { name, age } = request.body

    const user = { id:uuid.v4(), name, age }

    users.push(user)

    return response.status(201).json(user)
} catch(err) {
    return response.status(500).json({error: err.message})
} finally{
    console.log('cadastro finalizado')
}
})

app.put('/users/:id', (request, response) => {
    const { id } = request.params
    const {name, age} = request.body

    const UpdateUser = { id, name, age }

    const index = users.findIndex(user => user.id === id)
    if (index < 0) {
        return response.status(404).json({ message: "User not found"})
    }

    users[index] = UpdateUser
    console.log(index)

    return response.json(UpdateUser)
})

app.delete('/users/:id', (request, response) => {
    const { id } = request.params

    const index = users.findIndex(user => user.id === id)
     if (index < 0) {
        return response.status(404).json({ message: "User not found"})
    }

    users.splice(index, 1)

    return response.status(204).json()
})

app.listen(port, () => {
    console.log(`🚀 Server started on port ${port}`)
})