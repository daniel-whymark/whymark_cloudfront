function handler(event) {

	var request = event.request;
	var host = request.headers.host.value;
	var uri = request.uri;

    var queryString = Object.keys(event.request.querystring).map(key => key + '=' + event.request.querystring[key].value).join('&');
    
	var code301 = false;
	var code302 = false;


	if (host.startsWith("www.") || host.startsWith("daniel.")) {

		host = host.replace('www.whymark.', 'whymark.');
		host = host.replace('www.whymark-cdn.', 'whymark-cdn.');
		host = host.replace('daniel.whymark.', 'whymark.');
		host = host.replace('daniel.whymark-cdn.', 'whymark-cdn.');

		code301 = true;
	}

	if (uri == "/about.html") {

		uri = uri.replace('/about.html', '/');

		code301 = true;
	}
	
	if (uri.startsWith("/.well-known/host-meta") || uri.startsWith("/.well-known/nodeinfo") || uri.startsWith("/.well-known/webfinger") || uri == "/@Daniel") {

		host = 'mastodon.whymark-cdn.net';

		code301 = true;
	}

	if (uri == "/request" || uri == "/requests") {

		host = "request.whymark-cdn.net";
		uri = "/"
		
		code302 = true;
	}

	if (host.startsWith("plex.") || host.startsWith("transmission.") || host.startsWith("tautulli.") || host.startsWith("sonarr.") || host.startsWith("nzbhydra.") || host.startsWith("radarr.") || host.startsWith("nzbget.") || host.startsWith("bazarr.") || host.startsWith("unifi.") || host.startsWith("request.")) {

		host = host.replace('.whymark.net', '.whymark-cdn.net');

		code302 = true;
	}

    if (host.startsWith("mail.")) {

		host = "mail.google.com";
		uri = "/a/whymark.net"

		code302 = true;
	}

	if (code301 === true) {

		var response = {
			statusCode: 301,
			statusDescription: "Moved Permanently",
			headers: {
				location: {
					value: `https://${host}${uri}${(queryString.length > 0 ? '?' + queryString : '')}`
				}
			}
		};

		return response;

	} else if (code302 === true) {

		var response = {
			statusCode: 302,
			statusDescription: "Found",
			headers: {
				location: {
					value: `https://${host}${uri}${(queryString.length > 0 ? '?' + queryString : '')}`
				}
			}
		};

		return response;
	}

	return request;
}
