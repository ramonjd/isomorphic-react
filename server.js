var App, ReactAsync, app, debug, express, path, server, url;

express = require('express');

path = require('path');

app = express();

url = require('url');

debug = require('debug')('react-starter');

require('node-jsx').install({
  extension: '.jsx'
});

ReactAsync = require('react-async');

App = require('./react/App.jsx');

app.set('port', process.env.PORT || 8000);

app.use(express["static"](path.join(__dirname, 'public')));

app.get('*', function(req, res) {
  path = url.parse(req.url).pathname;
  ReactAsync.renderComponentToStringWithAsyncState(App({
    path: path
  }), function(err, markup) {
    res.send('<!DOCTYPE html>' + markup);
  });
});

server = app.listen(app.get('port'), function() {
  debug('Express server listening on port ' + server.address().port);
});
