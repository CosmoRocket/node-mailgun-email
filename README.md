# Mailgun Email Client
A simple mailgun email client for Node.js

## Routes
### POST /email
```javascript
Content-Type: application/json

{
  "recipients" : ["user@gmail.com"],
  "subject" : "Hello",
  "text" : "Testing some Mailgun awesomness!",
  "html" : "<h1>Testing some Mailgun awesomness!</h1>"
}
```

## References
### Javascript SDK for Mailgun
- https://github.com/mailgun/mailgun-js#create