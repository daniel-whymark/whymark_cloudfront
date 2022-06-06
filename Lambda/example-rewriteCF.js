'use strict';

exports.handler = (event, context, callback) => {
    const request = event.Records[0].cf.request;
    const host = request.headers.host;
    const uri = request.uri;

    if (uri == "/about.html") {
        return {
            status: '301',
            statusDescription: `Redirecting to apex domain`,
            headers: {
                location: [{
                    key: 'Location',
                    value: host
                }]
            }
        };
    }

    if (host.startsWith("www.")) {
        var newHost = host.replace('www.', '');
        return {
            status: '301',
            statusDescription: `Redirecting to apex domain`,
            headers: {
                location: [{
                    key: 'Location',
                    value: newHost`${request.uri}`
                }]
            }
        };
    }

    if (host.startsWith("daniel.")) {
        var newHost = host.replace('daniel.', '');
        return {
            status: '301',
            statusDescription: `Redirecting to apex domain`,
            headers: {
                location: [{
                    key: 'Location',
                    value: newHost`${request.uri}`
                }]
            }
        };
    }

};