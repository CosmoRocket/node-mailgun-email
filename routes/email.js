const express = require('express')
const router = express.Router()

// POST - Send an E-mail
router.post('/email', (req, res) => {
  const attributes = req.body
  console.log(attributes)
})

module.exports = router