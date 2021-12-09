const axios = require('axios');

async function printData() {
    const { data } = await axios.get("https://api.country.is/");
    console.log(data);
}

module.exports = {
    printData,
};