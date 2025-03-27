import L from "leaflet";

export function initMap() {
  const map = L.map("map", {
    zoomControl: false,
    minZoom: 1,
    maxZoom: 1,
    maxBounds: [
      [90, 179],
      [-70, -179],
    ],
  }).setView([50, 0], 1);
  return map;
}
export function drawBaseMap(map) {
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);
}

export function drawMapFeature(
  map,
  geo,
  onClickFeatureCallback = null,
  outlineColor = "grey",
  fillColor = "grey",
  weight = 1
) {
  const style = {
    color: outlineColor,
    fillColor: fillColor,
    weight: weight,
  };
  var geojson;

  function onClickFeature(e) {
    if (onClickFeatureCallback != null) onClickFeatureCallback(e.target.feature.properties.name)
  }

  function onEachFeature(feature, layer) {
    layer.on({
      click: onClickFeature,
    });
  }

  geojson = L.geoJSON(geo, {
    style: style,
    onEachFeature: onEachFeature,
  }).addTo(map);

  return geojson;
}

export function reset(layer, map) {
  map.removeLayer(layer);
}

export function createLayerGroup() {
  return L.layerGroup();
}
