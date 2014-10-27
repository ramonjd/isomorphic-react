#server.coffee  
express = require 'express'
path = require 'path'
app = express()
url = require 'url'
debug = require('debug')('react-starter')
#products = require('./routes/products')

require('node-jsx').install extension: '.jsx'
ReactAsync = require 'react-async'
App = require './react/App.jsx' 

app.set 'port', process.env.PORT or 8000

app.use express.static(path.join(__dirname, 'public'))

#app.use('/api', products)

app.get '*', (req, res) ->
  path = url.parse(req.url).pathname
  ReactAsync.renderComponentToStringWithAsyncState App(path: path), (err, markup) ->
    res.send '<!DOCTYPE html>' + markup
    return
  return

server = app.listen app.get('port'), () ->
  debug 'Express server listening on port ' + server.address().port
  return