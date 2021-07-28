fetch("https://covid-19-data.p.rapidapi.com/country?name=Germany", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "c627d0f2d2msh9ba409e5b8c495dp17c448jsn5469ec3ad079",
		"x-rapidapi-host": "covid-19-data.p.rapidapi.com"
	}
})
.then(response => {
    const data = response.json();
	console.dir(data);

    
})


.catch(err => {
	console.error(err);
});

