<template>
  <div>

    <b-row>
      <b-col lg="12">
        <b-row class="mb-4">
          <b-col lg="6" class="pl-0">
            <div class="h-100 card-shadow" >
              <b-card-body
                class="'shadow border-none card--home "
                style="border-radius: 1.1em">
                <b-row >
                  <b-col md="8">
                    <p class="color-blue" style="font-weight: 600;">Nombre total de producteurs recencés</p>
                    <h1 class="color-green font-weight-bold">980 894</h1>
                    <!--                    <div class="details-link">-->
                    <!--                      <nuxt-link to="#" class="details-link">Voir détails</nuxt-link>-->
                    <!--                    </div>-->
                  </b-col>
                  <b-col md="4" class="mt-5">
                    <img
                      width="50px"
                      height="auto"
                      src="~/assets/images/icon/planteur.svg"
                      alt="icon"

                    />
                  </b-col>
                </b-row>


              </b-card-body>
            </div>
          </b-col>
          <b-col lg="6" class="pl-0 ">
            <div class="h-100 card-shadow">
              <b-card-body
                class="'shadow border-none card--home"
                style="border-radius: 1.1em">
                <b-row>
                  <b-col md="8">
                    <p class="color-blue" style="font-weight: 600;">Nombre total de cartes distribuées</p>
                    <h1 class="color-green font-weight-bold pt-3">489 891</h1>
                    <!--                    <div class="details-link pt-1">-->
                    <!--                      <nuxt-link to="#" class="details-link">Voir détails</nuxt-link>-->
                    <!--                    </div>-->
                  </b-col>
                  <b-col md="4" class="mt-5">
                    <img
                      width="80px"
                      height="auto"
                      src="~/assets/images/icon/carte.png"
                      alt="icon"

                    />
                  </b-col>
                </b-row>


              </b-card-body>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col lg="6" class="pl-0 ">
            <div class="h-100 card-shadow">
              <b-card-body
                class="'shadow border-none card--home"
                style="border-radius: 1.1em">
                <b-row>
                  <b-col md="8">
                    <p class="color-blue" style="font-weight: 600;">Nombre total de cartes résiduelles</p>
                    <h1 class="color-green font-weight-bold ">489 891</h1>
                    <div class="details-link pt-4">
                    </div>
                  </b-col>
                  <b-col md="4" class="mt-5">
                    <img
                      width="80px"
                      height="auto"
                      src="~/assets/images/icon/carte.png"
                      alt="icon"

                    />
                  </b-col>
                </b-row>


              </b-card-body>
            </div>
          </b-col>
          <b-col lg="6" class="pl-0 ">
            <div class="h-100 card-shadow">
              <b-card-body
                class="'shadow border-none card--home"
                style="border-radius: 1.1em">
                <b-row>
                  <b-col md="8">
                    <p class="color-blue" style="font-weight: 600;">Nombre total d’agents</p>
                    <h1 class="color-green font-weight-bold ">901</h1>
                    <!--                    <div class="details-link">-->
                    <!--                      <nuxt-link to="#" class="details-link">Voir détails</nuxt-link>-->
                    <!--                    </div>-->
                  </b-col>
                  <b-col md="4" class="mt-5">
                    <img
                      width="60px"
                      height="auto"
                      src="~/assets/images/icon/user.svg"
                      alt="icon"
                    />
                  </b-col>
                </b-row>


              </b-card-body>
            </div>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <b-row class="mt-3">
      <b-col class="">
        <h5 class="color-blue font-weight-bold">Répartition nationale de la distribution des cartes</h5>
      </b-col>
    </b-row>
    <b-row>

      <b-col lg="12 mb-5">
        <div class="h-100 card-shadow">
          <b-card-body
            class="'shadow border-none bg-white card-blue "
            style="border-radius: 1.1em">
            <div id="chartBar">
              <apexchart type="bar" height="350"></apexchart>
            </div>
          </b-card-body>
        </div>
      </b-col>

    </b-row>

    <b-row>

      <b-col lg="12">
        <b-row class="mb-4">
          <b-col lg="6" class="pl-0">
            <div class="h-100" >
              <b-card-body
                class="'shadow border-none  card-blue "
                style="border-radius: 1.1em">
                <b-row >
                  <b-col md="8">
                    <p class="color-blue" style="font-weight: 600;">Nombre total de KYC effectué</p>
                    <h1 class="color-green font-weight-bold ">980 894</h1>
                  </b-col>
                  <b-col md="4" class="mt-5">
                    <img
                      width="50px"
                      height="auto"
                      src="~/assets/images/icon/loupe-success.svg"
                      alt="icon"

                    />
                  </b-col>
                </b-row>


              </b-card-body>
            </div>
          </b-col>
          <b-col lg="6" class="pl-0">
            <div class="h-100" >
              <b-card-body
                class="'shadow border-none  card-blue "
                style="border-radius: 1.1em">
                <b-row >
                  <b-col md="8">
                    <p class="color-blue" style="font-weight: 600;">Nombre total de KYC non conforme</p>
                    <h1 class="color-green font-weight-bold ">980 894</h1>
                  </b-col>
                  <b-col md="4" class="mt-5">
                    <img
                      width="50px"
                      height="auto"
                      src="~/assets/images/icon/loupe-error.svg"
                      alt="icon"
                    />
                  </b-col>
                </b-row>


              </b-card-body>
            </div>
          </b-col>

        </b-row>
      </b-col>
      <b-col lg="12">

        <b-row class="mb-4">
          <b-col lg="12 cardDonut" class="pl-0">
            <div class="h-50" >
              <b-card-body
                class="'shadow border-none  card-blue "
                style="border-radius: 1.1em">
                <b-row >
                  <b-col md="12" class="">
                    <h5 class="text-center">Taux actif des agents</h5>
                    <div id="radialChartBar" class="text-center">
                      <apexchart type="radialBar" height="350" width="100%"></apexchart>
                    </div>
                  </b-col>
<!--                  <b-col md="6">-->
<!--                    <div id="lineChart">-->
<!--                      <apexchart type="line" height="230"></apexchart>-->
<!--                    </div>-->
<!--                  </b-col>-->
                </b-row>


              </b-card-body>
            </div>
          </b-col>

        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Vue from "vue";
import { Bar,Line } from 'vue-chartjs'
// import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import {BModal} from 'bootstrap-vue'
import "~/assets/canvaJs/canvasjs.min.js"
// ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
import ApexCharts from 'apexcharts'

export default Vue.extend( {
  name: 'IndexPage',
  layout: "default",
// components:{
//   apexchart: VueApexCharts,
//
// },
  data() {
    return {
      show: false,
      variants: ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'light', 'dark'],
      headerBgVariant: 'light',
      headerTextVariant: 'light',
      bodyBgVariant: 'light',
      bodyTextVariant: 'dark',

    }
  },
  computed: {

  },

  mounted(){
    const data= {

      series: [{
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
      }],
      chart: {
        id: 'chart2',
        type: 'line',
        height: 230,
        toolbar: {
          autoSelected: 'pan',
          show: false
        }
      },
      colors: ['#546E7A'],
      stroke: {
        width: 3
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        opacity: 1,
      },
      markers: {
        size: 0
      },
      xaxis: {
        type: 'datetime'
      }

    }
    const chart = new ApexCharts(document.querySelector("#lineChart"), data);

    chart.render();



    this.charBar()
    this.radialChartBar()

    // Size of browser viewport.
    $(window).height();
    $(window).width();

// Size of HTML document (same as pageHeight/pageWidth in screenshot).
    $(document).height();
    $(document).width();
    console.log( "screen==>",window.screen.width,"x", window.screen.height)
  },
  methods: {
    charBar(){
      const data={

        series: [
          {
            name: 'Nombre de carte livré',
            data: [44, 55, 41, 67, 22, 43, 41, 67, 22, 70],
            color:'#768801'
          },
          {
            name: 'Nombre de carte distribuée',
            data: [13, 23, 20, 8, 13, 27, 20, 8, 13, 27],
            color:'#D5965C'
          },
        ],
        chart: {
          type: 'bar',
          height: 350,
          stacked: true,
          toolbar: {
            show: true
          },
          zoom: {
            enabled: true
          }

        },
        responsive: [{
          breakpoint: 480,
          options: {
            legend: {
              position: 'bottom',
              offsetX: -10,
              offsetY: 0
            }
          }
        }],
        plotOptions: {
          bar: {
            horizontal: false,

            dataLabels: {
              total: {
                enabled: false,
                style: {
                  fontSize: '13px',
                  fontWeight: 900
                }
              }
            }
          },
        },
        xaxis: {
          categories: ['','','','','','','','','',''],
        },
        legend: {
          position: 'top',
        },
        fill: {
          colors: ['#768801','#D5965C'],
          opacity: 1
        },


      }
      const chart = new ApexCharts(document.querySelector("#chartBar"), data);

      chart.render();
    },
    radialChartBar(){
      const data= {

        series: [80],
        chart: {
          height: 250,
          type: 'radialBar',
          fontSize: '140px',
          fontFamily: 'Helvetica, Arial, sans-serif',
        },

        plotOptions: {

          radialBar: {
            dataLabels: {
              enabled: true,

            },
            hollow: {
              size: '50%',
            }
          },
        },
        labels: [''],
        fill: {
          colors: ['#768801','#D5965C'],
          opacity: 1
        },
        legend: {
          position: 'top',
        },
      }
      const chart = new ApexCharts(document.querySelector("#radialChartBar"), data);

      chart.render();
    }
  }

})
</script>



<style  lang="scss">
#chartContainer{
  background: none;
}


//#myChart{
//  height: 50px;
//}
</style>
