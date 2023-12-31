// JavaScript

const map = L.map('map').setView([33.66719252628797, 130.44390437674102], 15);

// タイルレイヤーを作成し、地図にセットする

// Open Street Map
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

//複数アイコンをまとめて定義
const circleIcon = L.Icon.extend({
  options: {
    shadowUrl: 'images/ico_shadow.png',
    iconSize: [40, 40],
    shadowSize: [40, 40],
    iconAnchor: [20, 40],
    shadowAnchor: [20, 40],
    popupAnchor: [0, -42]
  }
});

// クリック位置の緯度経度表示
const popup = L.popup();

function onMapClick(e) {
  popup
    .setLatLng(e.latlng)
    .setContent("ここは" + e.latlng.toString() + "です")
    .openOn(map);
}

map.on('click', onMapClick);

const whiteIcon = new circleIcon({ iconUrl: 'images/ico.png' }),
  pinkIcon = new circleIcon({ iconUrl: 'images/ico_pink.png' });

L.marker([33.67345752177457, 130.44140661378802], { icon: whiteIcon }).addTo(map)
  .bindPopup('A pretty CSS popup.<br> Easily customizable.<br><img src="images/img01.png" alt="img">');

L.marker([33.65958150849491, 130.4440143454105], { icon: pinkIcon }).addTo(map)
  .bindPopup('A pretty CSS popup.<br> Easily customizable.');

L.marker([33.67020170623659, 130.4345714724636], { icon: pinkIcon }).addTo(map)
  .bindPopup('A pretty CSS popup.<br> Easily customizable.');

L.marker([33.654556, 130.442476], { icon: pinkIcon }).addTo(map)
  .bindPopup('A pretty CSS popup.<br> Easily customizable.');

L.marker([33.659469, 130.441725], { icon: pinkIcon }).addTo(map)
  .bindPopup('A pretty CSS popup.<br> Easily customizable.');

L.marker([33.68026, 130.434548], { icon: pinkIcon }).addTo(map)
  .bindPopup('A pretty CSS popup.<br> Easily customizable.');

L.marker([33.688942, 130.429763], { icon: pinkIcon }).addTo(map)
  .bindPopup('A pretty CSS popup.<br> Easily customizable.');