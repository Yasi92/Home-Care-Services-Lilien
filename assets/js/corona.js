// The method has been learned from this tutorial video on youtube "https://www.youtube.com/watch?v=uxf0--uiX0I&t=1s"
async function getData() {

    const response = await fetch("https://covid-19-data.p.rapidapi.com/country?name=germany&format=json", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "c627d0f2d2msh9ba409e5b8c495dp17c448jsn5469ec3ad079",
            "x-rapidapi-host": "covid-19-data.p.rapidapi.com"
        }
    });

    const data = await response.json();
    const options = await data[0];
    console.log(data);
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





async function getNewsData() {

    const newsResponse = await fetch("https://coronavirus-smartable.p.rapidapi.com/news/v1/DE/", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "c627d0f2d2msh9ba409e5b8c495dp17c448jsn5469ec3ad079",
            "x-rapidapi-host": "coronavirus-smartable.p.rapidapi.com"
        }
    });

    const dataNews = await newsResponse.json();
    console.log(dataNews.news);

    var articles = dataNews.news;
    var ul = '<ul class="list-group">';

   

    for (var i = 0; i < articles.length; i++) {

        const titles = articles[i].title;
        const baseURL = articles[i].originalUrl;
        const description = articles[i].excerpt;
        const providers = articles[i].provider.name;

        
        ul += '<li class="list-group-item">' + '<a class="corona-links" ' + 'href="' + baseURL + '"' + '>' + titles + '</a>' + '</li>';

        document.getElementById("news").innerHTML = ul;
        $('.corona-links').css('color', 'blue').css('text-decoration', 'underline');
    
 
    }


    ul += '</ul>';

    


}

getNewsData();



// ampWebUrl: "https://mobile.reuters.com/article/amp/idUSKBN2AP0W8"
// categories: ["news"]
// cdnAmpWebUrl: "https://mobile-reuters-com.cdn.ampproject.org/c/s/mobile.reuters.com/article/amp/idUSKBN2AP0W8"
// content: "
// ↵"
// excerpt: "France said on Thursday it would bring in new COVID-19 restrictions for the area around its common border with Germany, as President Emmanuel Macron's government tries to contain a surge of coronavirus variants in the French region of Moselle."
// featuredContent: null
// heat: 85
// highlight: null
// images: null
// locale: "en-us"
// originalUrl: "https://www.reuters.com/article/health-coronavirus-france/france-germany-to-beef-up-covid-19-controls-at-common-border-idUSL1N2KV0IK"
// path: "_news/2021-02-25-france-germany-to-beef-up-covid-19-controls-at-common-border.md"
// provider: {name: "Reuters", domain: "reuters.com", images: null, publishers: null, authors: null}
// publishedDateTime: "2021-02-24T23:31:00-08:00"
// sourceUrl: null
// tags: (4) ["Germany", "DE", "France", "FR"]
// title: "France, Germany to beef up COVID-19 controls at common border"
// topics: (2) ["Coronavirus in Europe", "Coronavirus"]
// type: "article"
// updatedDateTime: null
// webUrl: "http