function handler(event) {

	var request = event.request;
	var strippedUri = "/";

	if (request.uri.includes('.')) {

		var response = {
			statusCode: 301,
			statusDescription: "Moved Permanently",
			headers: {
				location: {
					value: strippedUri
				}
			}
		};

		return response;
	}

	return request;
}