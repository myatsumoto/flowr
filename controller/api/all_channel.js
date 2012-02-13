/**
 * Channel Controller
 */
var path = function(name){ return '../../' + name; };
var user_service = require(path('service/user'));
var error_service = require(path('service/error'));
var channel_service = require(path('service/channel'));
var cookie_service = require(path('service/cookie'));
var store = new (require('connect').session.MemoryStore)();

var all_channel = module.exports = {
  get : function(req, res){
    var search_channel = channel_service.find_all();
    search_channel.on('end', function(channels){
      res.send(JSON.stringify({ is_success : true, data : channels }));
    });
    search_channel.on('error', function(message, code){
      // status
      res.send(JSON.stringify({ is_success : false, message : message }));
    });
  }
};