function handler(event) {
    var request = event.request;
    var uri = request.uri;
    var host = request.headers.host.value;
//  var newurl = `https://${host}/de/index.html`

if (uri.endsWith('/about.html')) {

    var response = {
        statusCode: 301,
        statusDescription: 'Moved Permanently',
        headers: {
        location: {
            value: `https://${host}`
        },
        },
    };

}

    return response;



    if (headers['cloudfront-viewer-country']) {
        var countryCode = headers['cloudfront-viewer-country'].value;
        if (countryCode === country) {
            var response = {
                statusCode: 302,
                statusDescription: 'Found',
                headers:
                    { "location": { "value": newurl } }
                }

            return response;
        }
    }
    return request;
}


function handler(event) {
    var request = event.request;
  
    var splitHost = request.headers.host.value.split('.');
    splitHost[splitHost.length - 2] = 'example';
    splitHost[splitHost.length - 1] = 'com';
    var adjustedHost = splitHost.join('.');
  
    var response = {
      statusCode: 302,
      statusDescription: 'Found',
      headers: {
        location: {
          value: `https://${adjustedHost}${request.uri}`
        },
      },
    };
  
    return response;
  }


