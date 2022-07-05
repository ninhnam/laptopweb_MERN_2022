const express = require('express')
const router = express.Router()
const { getSort, addSort, updateSort, deleteSort } = require('../controllers/sort')

router.get('/', getSort)
router.post('/', addSort)
router.put('/:idSort', updateSort)
router.patch('/:idSort', updateSort)
router.delete('/:idSort', deleteSort)

module.exports = router
