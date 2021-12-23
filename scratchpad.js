const axios = require('axios');
const API_KEY = "Censored";

const searchTerm = 'mexico';

axios.get(`https://api.unsplash.com/search/photos/?client_id=${API_KEY}&&query=${searchTerm}`) // /users/:username/photos
.then(response => {
    // console.log(response.data);
    const array = response.data.results;
    for (let i = 0; i < array.length; i++) {
        let photoObj = array[i];
        let fullPhoto = photoObj.urls.full;
        console.log(fullPhoto);
    }
});
