function handler(event) {

	var request = event.request;
	var host = event.request.headers.host.value;
	var uri = event.request.uri;

	if (host.startsWith("www.")) {

		host = host.replace('www.whymark.', 'whymark.');

		var response = {
			statusCode: 301,
			statusDescription: "Moved Permanently",
			headers: {
				location: {
					value: host
				}
			}
		};

		return response;
	} else if (host.startsWith("daniel.")) {

		host = host.replace('daniel.whymark.', 'whymark.');

		var response = {
			statusCode: 301,
			statusDescription: "Moved Permanently",
			headers: {
				location: {
					value: host
				}
			}
		};

		return response;

	} else if (uri.endsWith("about.html")) {

		var response = {
			statusCode: 301,
			statusDescription: "Moved Permanently",
			headers: {
				location: {
					value: "/"
				}
			}
		};

		return response;
	}

	return request;
}