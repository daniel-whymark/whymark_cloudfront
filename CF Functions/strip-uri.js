function handler(event) {

    var request = event.request;
    var headers = request.headers;
    var strippedUri = "/";

    if (request.uri.endsWith("/about.html")) {

        var response = {
            statusCode: 301,
            statusDescription: "Moved Permanently",
            headers: {
                location: {
                  value: strippedUri
                }
                location: {
                    value: strippedUri
                  }
            }
        };

        return response;
    }

    return request;
}