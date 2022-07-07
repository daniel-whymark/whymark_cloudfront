function handler(event) {

	var request = event.request;
	var uri = event.request.uri;

	if (uri.startsWith('/assets/js/pb.js')) {
		request.uri = uri.replace('/assets/js/pb.js', '/analytics.js');
	}

	return request;
}