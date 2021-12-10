const axios = require('axios');

async function printData() {
    const { data } = await axios.get("https://api.country.is/");
    console.log("You are located in our " + data.country + " servers");
}

module.exports = {
    printData,
};