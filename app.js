var redis = require('redis');
client = redis.createClient(); //creates a new client
//var client = redis.createClient(port, host);
client.on('connect', function () {
    console.log('connected');
});

client.set('framework-mayahaj', 'Hibernate', function (err, reply) {
    console.log(reply);
});

client.get('framework-mayahaj', function (err, reply) {
    console.log(reply);
});

client.exists('framework-mayahaj', function(err, reply) {
    if (reply === 1) {
        console.log('exists');
        client.get('framework-mayahaj', function (err, reply) {
            console.log(reply);
        });
    } else {
        console.log('doesn\'t exist');
        client.set('framework-mayahaj', 'Hibernate', function (err, reply) {
            console.log(reply);
        });
    }
});