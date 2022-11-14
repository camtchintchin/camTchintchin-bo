<template>
  <b-modal id="modalInfoDepartement"  class="five" hide-footer hide-header-close size="xl">
    <template #modal-title >
      <h3 class="px-3 py-2">Direction régionale ABENGOUROU
        <button @click="closeModal()">
          <i class="fa fa-close" aria-hidden="true"> </i>
        </button>
      </h3>
      <!--        <b-row>-->
      <!--          <b-col class="md-6">-->
      <!--            <h3 class="pl-3 py-2">Fiche détail Producteur</h3>-->
      <!--          </b-col>-->
      <!--          <b-col md="6">-->
      <!--            <i class="fa fa-close" aria-hidden="true"> </i>-->
      <!--          </b-col>-->

      <!--        </b-row>-->


    </template>
    <b-col md="12" class="modalBody">
      <div class="tableInfo">
        <div class="table-responsive ">
          <table class="table header-border">
            <thead>
            <tr class="text-center">
              <th>Département</th>
              <th>Nombre Cartes distribuées</th>
              <th>Nombre Cartes résiduelles</th>
              <th>Producteurs Recensés</th>
              <th>Agents affectés</th>
            </tr>
            </thead>
            <tbody>
              <tr class="table-first text-center">
              <td>Localité 1</td>
              <td>892</td>
              <td>81</td>
              <td>2910</td>
              <td>25</td>
            </tr>
              <tr class="table-second text-center">
                <td>Localité 1</td>
                <td>892</td>
                <td>81</td>
                <td>2910</td>
                <td>25</td>
              </tr>
              <tr class="table-first text-center">
                <td>Localité 1</td>
                <td>892</td>
                <td>81</td>
                <td>2910</td>
                <td>25</td>
              </tr>
              <tr class="table-second text-center">
                <td>Localité 1</td>
                <td>892</td>
                <td>81</td>
                <td>2910</td>
                <td>25</td>
              </tr>
              <tr class="table-first text-center">
                <td>Localité 1</td>
                <td>892</td>
                <td>81</td>
                <td>2910</td>
                <td>25</td>
              </tr>
              <tr class="table-second text-center">
                <td>Localité 1</td>
                <td>892</td>
                <td>81</td>
                <td>2910</td>
                <td>25</td>
              </tr>

            </tbody>
          </table>
        </div>

      </div>
    </b-col>


  </b-modal>

</template>

<script>
export default {
  name: "InfoDepartement",
  methods:{
    closeModal(){
      return this.$bvModal.hide('modalInfoDepartement');
    }
  },

}
</script>

<style lang="scss" scoped>
table{
  padding-bottom: 0px;
  //border: blue 1px solid;

}
  thead {
    &{
      background-color: #768801 ;
    }
    th{
      padding: 20px;
      //font-size: 20px;
      color: white;
      font: normal normal 900 15px Poppins;
    }

  }
.modal-body{
  background: transparent linear-gradient(360deg, #7A8728 0%, #fff 80%) 0% 0% no-repeat padding-box;
  overflow: auto;
  height: 200px;
}
  td{
    font: normal normal 900 20px Poppins;  }
  .modalBody{
    overflow: auto;
    height: 70vh;
  }

</style>
