L.CursorHandler = L.Handler.extend({

    addHooks: function () {
        this._popup = new L.Popup();
        this._map.on('mouseover', this._open, this);
        this._map.on('mousemove', this._update, this);
        this._map.on('mouseout', this._close, this);
    },

    removeHooks: function () {
        this._map.off('mouseover', this._open, this);
        this._map.off('mousemove', this._update, this);
        this._map.off('mouseout', this._close, this);
    },

    _open: function (e) {
        this._update(e);
        this._popup.openOn(this._map);
    },

    _close: function () {
        this._map.closePopup(this._popup);
    },

    _update: function (e) {
        this._popup.setLatLng(e.latlng)
            .setContent(e.latlng.toString());
    }


});

L.Map.addInitHook('addHandler', 'cursor', L.CursorHandler);

var bounds = [[0,0], [2000,2000]];

var map = L.map('map', {
    crs: L.CRS.Simple,
    maxBounds: bounds,
    maxBoundsViscosity: 1.0,
    zoomControl: false,
    attributionControl: false,
    minZoom: -2,
    zoomSnap: 0.1,
    cursor: true
});

var image = L.imageOverlay('assets/Map.png', bounds).addTo(map);

var cities = L.layerGroup().addTo(map)
var CityIcon = L.Icon.extend({
    options: {
        iconSize: [128, 32],
        iconAnchor: [64, 16],
    }
})

L.marker([1048, 1054], {
    title: "Winchester", 
    icon: new CityIcon({iconUrl: "assets/cities/winchester.png"})
}).addTo(cities)

L.marker([1456, 713], {
    title: "Hedgewood",
    icon: new CityIcon({iconUrl: "assets/cities/hedgewood.png"})
}).addTo(cities)

L.marker([1562, 197], {
    title: "Henderson",
    icon: new CityIcon({iconUrl: "assets/cities/henderson.png"})
}).addTo(cities)

L.marker([1371, 1492], {
    title: "Mountain View",
    icon: new CityIcon({iconUrl: "assets/cities/mountainview.png"})
}).addTo(cities)

L.marker([977, 426], {
    title: "Bakersfield",
    icon: new CityIcon({iconUrl: "assets/cities/bakersfield.png"})
}).addTo(cities)

L.marker([493, 925], {
    title: "Melrose",
    icon: new CityIcon({iconUrl: "assets/cities/melrose.png"})
}).addTo(cities)

L.marker([754, 1344], {
    title: "Arrow Town",
    icon: new CityIcon({iconUrl: "assets/cities/arrowtown.png"})
}).addTo(cities)

L.marker([1151, 72], {
    title: "Port",
    icon: new CityIcon({iconUrl: "assets/cities/port.png"})
}).addTo(cities)

L.marker([509, 1140], {
    title: "Southern Lakes",
    icon: new CityIcon({iconUrl: "assets/cities/southernlakes.png"})
}).addTo(cities)

var atv = L.layerGroup().addTo(map)
var atvIcon = L.icon({
    iconUrl: "assets/icons/atv.png",
    iconSize: [32, 32],
    iconAnchor: [16, 16]
})

L.marker([578, 321], {
    icon: atvIcon
}).addTo(atv)

L.marker([973, 374], {
    icon: atvIcon
}).addTo(atv)

L.marker([1568, 234], {
    icon: atvIcon
}).addTo(atv)

L.marker([1287, 820], {
    icon: atvIcon
}).addTo(atv)

L.marker([1215, 1159], {
    icon: atvIcon
}).addTo(atv)

L.marker([1271, 1440], {
    icon: atvIcon
}).addTo(atv)

L.marker([453, 967], {
    icon: atvIcon
}).addTo(atv)

L.marker([445, 846], {
    icon: atvIcon
}).addTo(atv)

L.marker([788, 1347], {
    icon: atvIcon
}).addTo(atv)

L.marker([1389, 1424], {
    icon: atvIcon
}).addTo(atv)

var buggy = L.layerGroup().addTo(map)
var buggyIcon = L.icon({
    iconUrl: "assets/icons/buggy.png",
    iconSize: [32, 32],
    iconAnchor: [16, 16]
})

L.marker([435, 846], {
    icon: buggyIcon
}).addTo(buggy)

L.marker([767, 1377], {
    icon: buggyIcon
}).addTo(buggy)

L.marker([1008, 1049], {
    icon: buggyIcon
}).addTo(buggy)

L.marker([1050, 1214], {
    icon: buggyIcon
}).addTo(buggy)

L.marker([1157, 931], {
    icon: buggyIcon
}).addTo(buggy)

L.marker([1430, 1439], {
    icon: buggyIcon
}).addTo(buggy)

L.marker([1338, 1446], {
    icon: buggyIcon
}).addTo(buggy)

var gasStation = L.layerGroup().addTo(map)
var compound = L.layerGroup().addTo(map)
var radioTower = L.layerGroup().addTo(map)
var reactor = L.layerGroup().addTo(map)
var bunker = L.layerGroup().addTo(map)
var safezones = L.layerGroup().addTo(map)

var overlays = {
    "Cities": cities,
    "ATVs": atv,
    "Buggies": buggy
}

L.control.layers(null, overlays).addTo(map);

map.fitBounds(bounds);