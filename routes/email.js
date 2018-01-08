const express = require('express')
const router = express.Router()
const { sendEmail } = require('../mailgun/mailgunClient')

// POST - Send an E-mail
router.post('/email', (req, res) => {
  const attributes = req.body
  console.log(attributes)

  sendEmail(attributes.recipients, attributes.subject, attributes.text, attributes.html)
    .then(data => {
      res.status(201).json({ data })
    })
    .catch(error => {
      res.status(400).json({ error })
    })
})

module.exports = router