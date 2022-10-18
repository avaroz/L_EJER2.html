/*
TRABAJO REALIZADO POR:
ANTHONY RAMOS CAMACHO
TOMAS FELIPE JIMENEZ MEDINA
*/

var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
        + 'contributors',
    maxZoom: 18
});

/* 1. Capa base osm en coordenadas de florencia */
var map = L.map('map', {
    center: [1.61438, -75.60623],
    zoom: 15,
    layers: osm,
    /*scrollWheelZoom: true,*/
});

/* 2. Marcador universidad de la amazonia */
var marker = L.marker([1.62020, -75.60430], {
}).addTo(map)
    .bindPopup('Universidad de la Amazonia')
    .openPopup();

/* 3. Marcador circulo Alcaldia de Florencia */
var marker2 = L.marker([1.6150752, -75.61386], {
}).addTo(map)
    .bindPopup('Alcaldia de Florencia')
    .openPopup();
var circle = L.circle([1.6150752, -75.61386], 500, {
    color: 'green',
    fillColor: 'green',
    fillOpacity: 0.5
}).addTo(map);

/* 4. Marcador Poligono Parque Santander Florencia */

var polygon = L.polygon([
    [1.6151491, -75.6136903],
    [1.6153663, -75.6130144],
    [1.6146960, -75.6128106],
    [1.6145056, -75.6135026]
]).addTo(map)
    .bindPopup('Parque Santander');
polygon.bindTooltip("Parque Santander", {
    permanent: true
})

/* 5. Línea ubicación vivienda a la u amazonia*/
var pointA = new L.LatLng(1.6133393, -75.6072611); 
var pointB = new L.LatLng(1.6139104, -75.6069446);
var pointC = new L.LatLng(1.6138327, -75.6055284);
var pointD = new L.LatLng(1.6153931, -75.6041282);
var pointE = new L.LatLng(1.6188089, -75.6064242);
var pointF = new L.LatLng(1.6201709, -75.6051207);

var latlngs = [pointA, pointB, pointC, pointD, pointE, pointF];
var polyline = L.polyline(
latlngs, {color: 'blue'}
)
.addTo(map)
.bindPopup ('Ruta para ir a clase');

var marker3 = L.marker([1.6133393, -75.6072611], {
}).addTo(map)
    .bindPopup('Casa Anthony Ramos')
    .openPopup();


L.control.scale().addTo(map);