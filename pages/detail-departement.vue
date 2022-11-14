<template>
  <div>


    <b-row class="mt-3 pb-n2">
      <div class="col-lg-12">
        <div class="card tableInfo">
          <div class="table-responsive ">
            <table class="table header-border">
              <thead>
              <tr class="text-center">
                <th>Département Département</th>
                <th>Cartes distribuées</th>
                <th>Cartes résiduelles</th>
                <th>Producteurs Recensés</th>
              </tr>
              </thead>
              <tbody>
              <tr class="table-first text-center">
                <td>Localité 1</td>
                <td>892</td>
                <td>81</td>
                <td>2910</td>
              </tr>
              <tr class="table-second text-center">
                <td>Localité 1</td>
                <td>892</td>
                <td>81</td>
                <td>2910</td>
              </tr>
              <tr class="table-first text-center">
                <td>Localité 1</td>
                <td>892</td>
                <td>81</td>
                <td>2910</td>
              </tr>
              <tr class="table-second text-center">
                <td>Localité 1</td>
                <td>892</td>
                <td>81</td>
                <td>2910</td>
              </tr>
              <tr class="table-first text-center">
                <td>Localité 1</td>
                <td>892</td>
                <td>81</td>
                <td>2910</td>
              </tr>
              <tr class="table-second text-center">
                <td>Localité 1</td>
                <td>892</td>
                <td>81</td>
                <td>2910</td>
              </tr>

              </tbody>
            </table>
          </div>

        </div>
      </div>

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
    </b-row>
    <InfoDepartement/>
  </div>
</template>

<script>
import Vue from "vue";
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import InfoDepartement from "@/components/modal/InfoDepartement";

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default Vue.extend( {
  name: 'detail-departement',
  layout: "default",
  components:{
    InfoDepartement
  },
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
  mounted() {
    return this.$bvModal.show('modalInfoDepartement');
  }
  
})
</script>



<style  lang="scss">
.tableInfo{
  border-radius:20px;
}
.table-first{
  background-color:#f5f7ed ;
  font: normal normal 900 15px Poppins;
}
.table-second{
  background-color:#dbe4e7 ;
}
</style>
