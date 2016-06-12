import express from 'express'
import { graphql } from 'graphql'
import bodyParser from 'body-parser'
import schema from './schema'

let app = express()
const PORT = 3000

app.use('/graphql', bodyParser.text({ type: 'application/graphql' }))

app.post('/graphql', (req, res) => {
  graphql(schema, req.body)
    .then(result => res.send(JSON.stringify(result, null, 2)))
})

let server = app.listen(PORT, function () {
  const host = server.address().address
  const port = server.address().port
  console.log('GraphQL listening on http://%s:%s', host, port)
})
