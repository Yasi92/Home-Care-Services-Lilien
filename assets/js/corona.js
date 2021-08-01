fetch("https://covid-19-data.p.rapidapi.com/country?name=Germany", {
    "method": "GET",
    "headers": {
        "x-rapidapi-key": "c627d0f2d2msh9ba409e5b8c495dp17c448jsn5469ec3ad079",
        "x-rapidapi-host": "covid-19-data.p.rapidapi.com"
    }
})
.then(response => response.json())
.then(data => console.dir(data))
.then(console.log(data.confirmed))
.catch(err => console.error(err));


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