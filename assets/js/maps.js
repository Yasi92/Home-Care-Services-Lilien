//calling google.map API and mebeding it into the project has been learned from code institute tutorial


let map;

function initMap() {
 
    const uluru = { lat: 52.3994039, lng: 9.7777185 };
   
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 9,
      center: uluru,
    });
   
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }


