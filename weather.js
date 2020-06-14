const https = require('https');
const api = require('./api.json');

// Print out temp details
function printWeather(weather) {
    const message = `Current temperature in ${weather.location.city} is ${weather.current_observation.temp_f}F`;
    console.log(message);
}
// Print out error message

function get(query) {
    const request = https.get(`https://api.wunderground.com/api/${api.key}/geolookup/conditions/q/${query}.json`, response => {
        let body = "";
        // Read the data
        response.on('data', chunk => {
            body += chunk;
        });
        response.on('end', () => {
            const weather = JSON.parse(body);
            // Parse data
            printWeather(weather);
            // Print the data
        });
    });
}

module.exports.get = get;

// TODO: Handle any errors