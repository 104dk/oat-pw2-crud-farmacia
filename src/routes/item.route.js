const router = require('express').Router()
const controller = require('../controllers/item.controller')
const auth = require('../middlewares/auth')

router.post('/', auth, controller.Salvar)

router.get('/', auth,controller.ObterTodos)

router.get('/:id', auth, controller.ObterPorId)

router.put('/:id',auth, controller.Atualizar)

router.delete('/:id', auth,controller.Remover)

module.exports = router