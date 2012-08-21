var http = require('http')
  , request = require('request')
  , winston = require('winston')
  , logger = new (winston.Logger)({ transports: [ new (winston.transports.File)({ filename: 'logs/http.log' }) ]})
  , responseBodyLogger = new (winston.Logger)({ transports: [ new (winston.transports.File)({ filename: 'logs/http-response-body.log' }) ]});

http.createServer(function (req, res) {
	var serverUrl = 'http://localhost:1338';
	var url = serverUrl + req.url;
	var requester = request[req.method.toLowerCase()];
	var x = requester(url);
	req.on('data', function (chunk) {
		logger.log("info", "REQUEST BODY " + chunk);
    });
	x.on('data', function (chunk) {
		responseBodyLogger.log("info", "RESPONSE BODY " + chunk);
    });
	logger.log("info", req.url + " | " + req.method);
	req.pipe(x);
	x.pipe(res);
}).listen(8337, '127.0.0.1');

