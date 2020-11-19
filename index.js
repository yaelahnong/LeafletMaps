var mymap = L.map('mapid').setView([-6.338116, 106.741686], 13);

var marker = L.marker([-6.338116, 106.741686]).addTo(mymap);

var circle = L.circle([-6.338116, 106.741686], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 10
}).addTo(mymap);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFyaW5vaW1vbGEyNyIsImEiOiJja2dqbWhjcDUwOGFzMzBqd2V3cm93NTVqIn0.g3ozAr9V6OjHXPGprR9N2A', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibWFyaW5vaW1vbGEyNyIsImEiOiJja2dqbWhjcDUwOGFzMzBqd2V3cm93NTVqIn0.g3ozAr9V6OjHXPGprR9N2A'
}).addTo(mymap);