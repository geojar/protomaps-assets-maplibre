import 'maplibre-gl/dist/maplibre-gl.css'
import './style.css'

// Import MapLibre
import maplibregl from 'maplibre-gl'

const map = new maplibregl.Map({
  container: 'map',
  hash: true,
  style: 'http://100.117.212.29/style.json',
  center: [11, 53],
  zoom: 7.5,
  maplibreLogo: false,
  maxZoom: 15,
  attributionControl: false
})
