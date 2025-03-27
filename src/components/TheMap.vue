<script setup>
import { onMounted, ref, defineProps, watchEffect } from 'vue'
import 'leaflet/dist/leaflet.css'
import { initMap, drawMapFeature, createLayerGroup } from '@/helper/map'
import world from '@/data/world.geo.json'
import canada from '@/data/canada.geo.json'
import china from '@/data/china.geo.json'

const props = defineProps({
  selectedFeatures: {
    type: Array,
    default: Array
  },
  onClickFeature: {
    type: Function,
    default: () => { }
  },
  selectableFeatures: {
    type: Array,
    default: Array
  },
})

const mapRef = ref(null)
const drawnLayersGroup = ref(createLayerGroup())

const regionMap = {
  canada: {
    geo: canada,
  },
  china: {
    geo: china,
  }
}

onMounted(() => {
  mapRef.value = initMap()
  drawBaseMap()
})

function drawBaseMap() {
  drawMapFeature(mapRef.value, world, null, 'var(--primary-grey-90)', 'var(--primary-grey-90)', 1)
}

watchEffect(() => {
  if (mapRef.value !== null) {
    drawnLayersGroup.value.eachLayer(layer => layer.remove())

    props.selectableFeatures.forEach(region => {
      const regionProperties = regionMap[region]

      if (props.selectedFeatures.includes(region)) {
        const layer = drawMapFeature(mapRef.value, regionProperties.geo, props.onClickFeature, 'var(--primary-colour-40)', 'var(--primary-colour-60)', 1)
        drawnLayersGroup.value.addLayer(layer)
      } else {
        const layer = drawMapFeature(mapRef.value, regionProperties.geo, props.onClickFeature, 'var(--primary-colour-80)', 'var(--primary-colour-80)', 1)
        drawnLayersGroup.value.addLayer(layer)
      }
    })
  }
})

</script>
<template>
  <div id="map"></div>
</template>

<style lang="scss" scoped>
#map {
  height: 256px;
  background-color: transparent;
}
</style>
