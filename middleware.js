// Custom Middleware
var middleware = {
  requireAuthentication: function(req, res, next) {
    console.log('Request Authorization Ran');
    next();
  },
  logger: function(req, res, next) {
    console.log(req.method + req.originalUrl + new Date().toString());
    next();
  }
}

module.exports = middleware;
