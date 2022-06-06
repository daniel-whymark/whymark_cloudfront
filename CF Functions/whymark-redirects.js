function handler(event) {

    var request = event.request;
    var host = event.request.headers.host.value;
    var uri = event.request.uri;

	var code301 = false;

    if (host.startsWith("www.") || host.startsWith("daniel.")) {

        host = host.replace('www.whymark.', 'whymark.');
        host = host.replace('daniel.whymark.', 'whymark.');

		code301 = true;       
    }

    if (uri == "/about.html") {

		uri = uri.replace('/about.html','/');

		code301 = true;       
    }

	if (code301 === true) {

		var response = {
            statusCode: 301,
            statusDescription: "Moved Permanently",
            headers: {
                location: {
                    value: `https://${host}${uri}`
                }
            }
        };

        return response;
	}

    return request;
}