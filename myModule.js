const axios = require('axios');

async function printCountry() {
    const { data } = await axios.get("https://api.country.is/");
    console.log(data.country);
}

module.exports = {
    printCountry,
};