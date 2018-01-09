const express = require('express')
const router = express.Router()
const { sendEmail } = require('../mailgun/mailgunClient')

// POST - Send an E-mail
router.post('/email', (req, res) => {
  const attributes = req.body
  console.log(attributes)

  // Send email with array of recipients, subject, body
  sendEmail(attributes.recipients, attributes.subject, attributes.text, attributes.html)
    .then(data => {
      res.status(201).json({ data })
    })
    .catch(error => {
      res.status(400).json({ error })
    })
})

// POST - Receive E-mail
router.post('/receiveEmail', (req, res) => {
  const attributes = req.body
  console.log(attributes)

  // Important data
  // attributes.From  - Person who replied
  // attributes.stripped-text - Person's reply (text version)
  // atteibutes.stripped-html - Person's reply (html version)

  res.status(201).json({ attributes })
})
module.exports = router