// fetch("https://covid-19-data.p.rapidapi.com/country?name=Germany", {
//     "method": "GET",
//     "headers": {
//         "x-rapidapi-key": "c627d0f2d2msh9ba409e5b8c495dp17c448jsn5469ec3ad079",
//         "x-rapidapi-host": "covid-19-data.p.rapidapi.com"
//     }
// })
// .then(response => response.json())
// .then(data => console.dir(data))
// .then(console.log(data))
// .catch(err => console.error(err));




async function getData() {

    const response = await fetch("https://covid-19-data.p.rapidapi.com/country?name=Germany", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "c627d0f2d2msh9ba409e5b8c495dp17c448jsn5469ec3ad079",
            "x-rapidapi-host": "covid-19-data.p.rapidapi.com"
        }
    });

    const data = await response.json();
    const options = await data[0];
    const {
        country,
        confirmed,
        deaths,
        recovered,
        lastUpdate
    } = options;

    

    document.getElementById('country').textContent = country;
    document.getElementById('confirmed').textContent = confirmed;
    document.getElementById('death').textContent = deaths;
    document.getElementById('recovered').textContent = recovered;
    document.getElementById('update').textContent = lastUpdate;
}

getData();










// code: "DE"
// confirmed: 3769541
// country: "Germany"
// critical: 357
// deaths: 92106
// lastChange: "2021-07-29T05:34:51+02:00"
// lastUpdate: "2021-07-29T08:45:03+02:00"
// latitude: 51.165691
// longitude: 10.451526
// recovered: 3650900