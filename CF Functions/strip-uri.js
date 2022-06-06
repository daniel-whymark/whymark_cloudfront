function handler(event) {

	var request = event.request;
	var uri = event.request.uri;

	if (uri.endsWith("about.html")) {

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