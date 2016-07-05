var exports = module.exports = {};
var fs = require('fs');
var path = require('path');
var jsforce = require('jsforce');
var settings = require('./salesforce.config.js')
var conn = new jsforce.Connection({loginUrl : 'https://login.salesforce.com'});

var createMetadataPkg = function (res)
{
  console.log(res);
  var bitmap = fs.readFileSync(path.join(__dirname,'./staticresources.zip'));
  // convert binary data to base64 encoded string
  var base64Buf = new Buffer(bitmap).toString('base64');
  var metadata = [{
    fullName: settings.zipName,
    content: base64Buf,
    contentType: 'application/javascript',
    description: settings.zipDescription,
    cacheControl: 'Public'
  }];

  return metadata;
};

var upsertMetadata = function(mdPkg)
{
  return conn.metadata.upsert('StaticResource', mdPkg)
}

conn.login(settings.username, settings.password)

.then(createMetadataPkg)
.then(upsertMetadata)
.then(function(res){console.log(res);})
.catch(function(res){console.log(res);});