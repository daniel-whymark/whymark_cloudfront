function handler(event) {

    var request = event.request;

    if (request.uri.endsWith("/about.html")) {
        request.uri = '/';

        var response = {
            statusCode: 301,
            statusDescription: "Moved Permanently",
        };

        return response;
    }

    return request;
}