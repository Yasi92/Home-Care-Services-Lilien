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

    var ul = `<div class="row my-3 my-md-4">`;


    for (var i = 0; i < articles.length; i++) {

        const titles = articles[i].title;
        const baseURL = articles[i].originalUrl;
        const description = articles[i].excerpt;
        const providers = articles[i].provider.name;
        const published = articles[i].publishedDateTime;
        


        ul +=
            `<div class=" d-flex px-4 col-12 col-md-6 py-3 py-md-4">
               <div class="card"> 
                    <div class="card-body d-flex align-items-start flex-column text-left"> 
                        <h5 class="card-title text-left">` + titles + '</h5>' +  '<hr>' +                  
                        '<p class="card-text small-p">' + description + '...' + '</p>' +
                        '<div class="d-flex"><small class="text-muted mt-1">' + 'Published:' + published + '</small>' + '</div>' +
                    '</div>' +    
                    '<div class="mt-auto card-footer w-100"><div class="d-flex justify-content-center"><a class="btn green-btn" rel="noopener" target="_blank" href="' + baseURL + '"' + '>' + "Read More" + '</a></div>' +
                    `</div> 
                </div> 
            </div>` ;

        document.getElementById("corona-news").innerHTML = ul ;
    }


    ul += '</div>';


    
}

getNewsData();



//  all animations in this project including below, are learned from gsap learning center "https://greensock.com/gsap/"
gsap.registerPlugin(ScrollTrigger);


gsap.from("#covid-news", {
    scrollTrigger: {
        trigger: "#covid-news",
        start: "bottom 90%",
        toggleActions: "restart none none play",
        once: true
    },

    autoAlpha: 0,
    duration: 3,
    ease: "back",
    z: -100,
    duration: 4,
    opacity: 0,
    scale: 1,
});
ScrollTrigger.addEventListener("refreshInit", () => gsap.set("#covid-news", {
    autoAlpha: 0
}));

gsap.from("#covid-stats", {
    scrollTrigger: {
        trigger: "#covid-stats",
        start: "top 90%",
        toggleActions: "restart none none play",
        once: true
    },
    autoAlpha: 0,
    duration: 3,
    ease: "back",
    z: 100,
    duration: 4,
    opacity: 0,
    scale: 1,

});

ScrollTrigger.addEventListener("refreshInit", () => gsap.set("#covid-stats", {
    autoAlpha: 0
}));