var express = require('express');
var router = express.Router();

let beers = [
    {
        id: 1,
        name: "Zombie Dust",
        style: "IPA",
        description: "testtestest"
    },
    {
        id: 2,
        name: "Zombie Dust",
        style: "IPA",
        description: "testtestest"
    }
]


router.get('/', (req, res) => {
    res.json(beers)
})

router.get('/:id', (req, res) => {
    const id = Number(req.params.id)
    const beer = beers.find(beer => beer.id === id)
    
    if (beer) {
        res.json(beer)
    } else {
        res.status(404).end()
    }
})

router.delete('/:id', (req, res) => {
    const id = Number(req.params.id)
    notes = beer.filter(beer => beer.id !== id)
      
    res.status(204).end()
})

const generateId = () => {
    const maxId = beers.length > 0
    ? Math.max(...beers.map(n => n.id))
    : 0
    
    const beer = request.body
    beer.id = maxId + 1
}

router.post('/', (req, res) => {
    const body = req.body

    if(!body.content) {
        return res.status(400).json({
            error: 'content missing'
        })
    }
   

    const beer = {
        name: body.name,
        style: body.style,
        description: body.description,
        id: generateId(),
    }

    beers = beers.concat(beer)

    res.json(beer)
})
module.exports = router;