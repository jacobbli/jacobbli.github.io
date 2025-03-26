<script setup>
import { onMounted, ref, defineProps, watchEffect } from 'vue'
import 'leaflet/dist/leaflet.css'
import { initMap, drawMapFeature, createLayerGroup } from '@/helper/map'
import world from '@/data/world.geo.json'
import canada from '@/data/canada.geo.json'
import china from '@/data/china.geo.json'

const props = defineProps({
  highlightedRegions: {
    type: Array,
    default: Array
  },
  onClickFeature: {
    type: Function,
    default: () => { }
  }
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
  drawMapFeature(mapRef.value, world, props.onClickFeature)
})

watchEffect(() => {
  if (mapRef.value !== null) {
    drawnLayersGroup.value.eachLayer(layer => layer.remove())
    props.highlightedRegions.forEach(region => {
      const regionProperties = regionMap[region]
      const layer = drawMapFeature(mapRef.value, regionProperties.geo, props.onClickFeature, 'var(--primary-color-40)', 'var(--primary-color-60)', 1)
      drawnLayersGroup.value.addLayer(layer)
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
