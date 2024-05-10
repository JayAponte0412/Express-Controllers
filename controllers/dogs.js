const Dog = require('../models/dog')

module.exports = {
    index,
    show
};

function index(req, res) {
    const dogs =Dog.getAll()
    res.json(dogs)
}

function show(req, res) {
    const dog = Dog.getOne(req.params.id)
    res.json(dog || {message: 'no dog here'})
}