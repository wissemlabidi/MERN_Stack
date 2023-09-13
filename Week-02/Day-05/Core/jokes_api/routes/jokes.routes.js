const jokeController = require('../controllers/joke.controller')

module.exports = app => {
    app.get('/api/jokes', jokeController.findAll)
    app.get('/api/jokes/:id', jokeController.findOne)
    app.post('/api/jokes/new', jokeController.create)
    app.put('/api/jokes/update/:id', jokeController.update)
    app.delete('/api/jokes/delete/:id', jokeController.delete)
}