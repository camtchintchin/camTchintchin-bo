<template>
  <div>
    <b-modal id="modalResultSearch"  class="five" hide-footer hide-header-close size="xl">
      <template #modal-title >
        <h3 class="px-3 py-2">Resultats
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
            <b-table

              ref="table"
              :fields="fields"
              :items="items"
              :per-page="perPage"
              show-empty

              table-classes="panelys-table"
              :current-page="currentPage"
              :total-rows="totalRows"
              responsive
              table-class="table-info bg-white rounded"
              thead-class="bg-greenPerso shadow-sm"
              thead-th-class="thClass"
              tbody-tr-class="body-tr-element  shadow "
              tbody-class="tbody-padding bg-white"
              @filtered="onFiltered"
              @row-clicked="rowClickHandler"
            >
              <template #emptyfiltered>
                <h4 class="color-blue font-weight-bold text-center">
                  Aucun enregistrement trouvé
                </h4>
              </template>

              <template #empty>
                <h4 class="color-blue font-weight-bold text-center">
                  Aucun enregistrement trouvé
                </h4>
              </template>

              <template #table-busy>
                <div class="sk-three-bounce">
                  <div class="sk-child sk-bounce1"></div>
                  <div class="sk-child sk-bounce2"></div>
                  <div class="sk-child sk-bounce3"></div>
                </div>
              </template>

              <template #cell(actions)="row">
                <div class="d-flex">
                  <button
                    v-for="(item, index) in row.field.thAttr"
                    :key="index"
                    class="mx-1">
                    <!--                  :class="actionClassObject(index, row)"-->
                    <!--                  @click="ActionClickHandler(row, index)"-->

                    {{ item }}
                  </button>
                </div>
              </template>
            </b-table>
          </div>

        </div>
      </b-col>


    </b-modal>
<!--    <div v-if="showInfo">-->
<!--      <InfoCustomer/>-->
<!--    </div>-->
      <InfoCustomer/>
  </div>


</template>

<script>
import InfoCustomer from "./InfoCustomer";
export default {
  name: "ResultSearch",
  components:{
    InfoCustomer
  },
  data(){
    return{
      showInfo:false,
      fields: ['nom', 'matricule', 'locatite','delegation','contact'],
      items: [
        {
          nom: 'Kouassi Basile',
          matricule: '01480300478',
          locatite: 'Atta Kouadiokro',
          delegation: 'Abengourou',
          contact: '07 89 213 901'
        },
        {
          isActive: true,
          nom: 'Kouassi Basile',
          matricule: '01480300478',
          locatite: 'Atta Kouadiokro',
          delegation: 'Abengourou',
          contact: '07 89 213 901'
        },
        {
          nom: 'Kouassi Basile',
          matricule: '01480300478',
          locatite: 'Atta Kouadiokro',
          delegation: 'Abengourou',
          contact: '07 89 213 901'
        }
        ]
    }
  },
  methods:{
    rowClickHandler(item) {
      console.log(item)
      // this.showInfo =true
      return this.$bvModal.show('modalInfoCustomer');
    },
    closeModal(){
      // this.showInfo =false
      return this.$bvModal.hide('modalResultSearch');

    },

  }
}
</script>

<style lang="scss" scoped>
#modalResultSearch{
  z-index: 1;
}
table{
  padding-bottom: 0px;
  //border: blue 1px solid;
}
.thStyle{
  background-color: #768801 ;
}

//thead {
//  &{
//    background-color: #768801 ;
//  }
//  th{
//    padding: 20px;
//    //font-size: 20px;
//    color: white;
//    font: normal normal 900 15px Poppins;
//  }
//
//}
.modal-body{
  background: transparent linear-gradient(360deg, #7A8728 0%, #fff 80%) 0% 0% no-repeat padding-box;
  overflow: auto;
  height: 200px;
}
//td{
//  font: normal normal 900 20px Poppins;  }
.modalBody{
  overflow: auto;
  height: 70vh;
}

</style>
