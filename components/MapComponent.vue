<template>
  <div>
    <div id="map-wrap" class="map">
      <template>
        <l-map style="height:80vh" :zoom="zoom" :center="[gpsLatitude,gpsLongitude]"  :option="mapOptions" >
          <l-tile-layer :url="getUrl()" :attribution="attribution"></l-tile-layer>
          <l-control position="bottomleft">
            <div class="info legend">
              {{(currentItem.label)}}
              {{(currentItem.number) + key}}
            </div>

          </l-control>
          <l-reference-chart title="Cartes Distribuées" :colorScale="colorScale" :min="50" :max="50000" position="topright"/>
          <l-geo-json :geojson="statesData" :options="mapOptions" :data="countyData" titleKey="name" idKey="GEO_ID" :value="value" ref="geolayer"></l-geo-json>
        </l-map>

      </template>
    </div>
  </div>
</template>

<script lang="ts">
import {MapData} from "@/helpers/mapData";
import L from 'leaflet';
import { LMap, LTileLayer, LMarker, LGeoJson, LControlLayers, LControlZoom, LControl } from 'vue2-leaflet';
import { InfoControl, ReferenceChart, ChoroplethLayer } from 'vue-choropleth';
import Vue from "vue";

export default Vue.extend( {
  name: "mapComponent",
  components:{
    LMap,
    LGeoJson,
    LTileLayer,
    LControlZoom,
    LControl,
    LControlLayers,
    'l-info-control': InfoControl,
    'l-reference-chart': ReferenceChart,
    'l-choropleth-layer': ChoroplethLayer,
  },
  data(){
    return{
      mapOptions: {
        style: function style(feature:any) {

          return {
            fillColor: MapData.getColorStyle(feature.properties.number),
            weight: 2,
            opacity: 1,
            color: "white",
            dashArray: "3",
            fillOpacity: 0.7,
          };
        },
        onEachFeature: (feature:any, layer:any) => {

          layer.on({
            mouseover: this.highlightFeature,
            mouseout: this.resetHighlight,
            click: this.clickFeature,
          });
        },
      },

      colorScale:MapData.getColorScale(),
      countyData :MapData.getCountyData(),
      value:MapData.getValue(),
      statesData:MapData.getStatesData(),

      id : "mapbox/streets-v11",
      accessToken : "pk.eyJ1Ijoibm9lZGplZGplMTQiLCJhIjoiY2w1anJwNWZsMDJ5ZDNjcWkwZ3poaG5hMCJ9.0gEdr3JbUexUhqFYwh6Pnw",
      zoom : 7,
      gpsLatitude: 7.539989,
      gpsLongitude: -5.547080,
      attribution : '',
      currentStrokeColor: "3d3213",
      // 7.858500299901681
      // -8.476885871692035
      selectedFeature: {},
      currentItem: {
        "geo_id": "",
        "state": "",
        "county": "",
        "name": "",
        "LSAD": "",
        "number":"Survoler la DR"
      },
      key:""
    }
  },
  computed:{

  },
  methods: {
    getUrl():any {
      return `https://api.mapbox.com/styles/v1/${this.id}/tiles/{z}/{x}/{y}?access_token=${this.accessToken}`
    },
    getZoom(){
      console.log("event")
      // console.log("event",event)
    },
    // setControl(){
    //   var legend = L.control({position: 'bottomright'});
    //
    //   legend.onAdd = function (map) {
    //
    //     var div = L.DomUtil.create('div', 'info legend'),
    //       grades = [0, 10, 20, 50, 100, 200, 500, 1000],
    //       labels = [];
    //
    //     // loop through our density intervals and generate a label with a colored square for each interval
    //     for (var i = 0; i < grades.length; i++) {
    //       div.innerHTML +=
    //         '<i style="background:' + Map.getColor(grades[i] + 1) + '"></i> ' +
    //         grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
    //     }
    //
    //     return div;
    //   };
    //
    //   legend.addTo(map);
    // },
    getColor(d:any) {
      return d > 1000 ? '#800026' :
        d > 500  ? '#BD0026' :
          d > 200  ? '#E31A1C' :
            d > 100  ? '#FC4E2A' :
              d > 50   ? '#FD8D3C' :
                d > 20   ? '#FEB24C' :
                  d > 10   ? '#FED976' :
                    '#FFEDA0';
    },

    highlightFeature(e:any) {
      var layer = e.target;
      this.currentItem = e.target.feature.properties;
      this.key = " Carte(s) distribuées"
      layer.setStyle({
        fillColor: "green",
        weight: 5,
        color: "#666",
        dashArray: "",
        fillOpacity: 0.7,
      });

      if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
      }
    },
    resetHighlight(e:any) {
      var layer = e.target;
      this.key = ""
      this.currentItem = {
        "geo_id": "",
        "state": "",
        "county": "",
        "name": "",
        "LSAD": "",
        "number":"Survoler la DR"
      }

      var number =layer.feature.properties.number;
      console.log("reset",layer.feature.properties.number)

      layer.setStyle({
        fillColor: MapData.getColorStyle(number),
        weight: 2,
        opacity: 1,
        color: "white",
        dashArray: "3",
        fillOpacity: 0.7,
      });

      if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
      }
    },
    clickFeature(ev:any) {
      const feature = ev.target && ev.target.feature;
      const featureProps = feature && feature.properties;
      this.selectedFeature = featureProps;
      console.log("ok",this.selectedFeature)

    },
  }
})
</script>

<style scoped>

</style>
