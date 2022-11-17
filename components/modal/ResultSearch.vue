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
              :items="provider"
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
            <b-pagination
              v-model="currentPage"
              :total-rows="totalRows"
              :per-page="perPage"
            ></b-pagination>
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

<script lang="ts">
import InfoCustomer from "./InfoCustomer";
import {Component, Prop, Vue} from "nuxt-property-decorator";
import _ from "lodash";
Vue.component("InfoCustomer", InfoCustomer);

@Component
export default class CompleteVersion extends Vue  {

  // components={
  //   InfoCustomer
  // }
  // props:{
  //   customerList:{
  //       type: {},
  //       required:true
  //   }
  // },
  @Prop({required: true, default: () => ("")})
  customerList!: string;

  name= "ResultSearch"
  totalRows = 0;
  perPage = 5;
  currentPage = 1;
  json_data = []
  showInfo=false
  // customerList = this.customerList
  fields= [
    {key: "firstname", label: "Nom", thAttr: {"searchKey": "firstname"}},
    {key: "lastname", label: "Prenom", thAttr: {"searchKey": "firstname"}},
    {key: "matricule", label: "Matricule", thAttr: {"searchKey": "matricule"}},
    {key: "residence", label: "Localité", thAttr: {"searchKey": "residence"}},
    // {key: "city", label: "Délégation", thAttr: {"searchKey": "location"} , formatter:(value:any)=>{ return value ?? "value" }},
    {key: "phoneNumber", label: "Contact", thAttr: {"searchKey": "phoneNumber"}},
    // {
    //   key: "actions",
    //   label: "Actions",
    //   thAttr: {"canSee": "Voir"}
    // }
    // { key: "", label: "Nbre Transac" },
    // { key: "", label: "Commission" },
  ]
  // fields: ['nom', 'matricule', 'locatite','delegation','contact'],
  mounted() {
  }
  onFiltered(filteredItems: any) {
    // Trigger pagination to update the number of buttons/pages due to filtering
    this.totalRows = filteredItems.length;
    this.currentPage = 1;
  }
  provider(ctx: { currentPage: number, perPage: number }): any {
    let initPost= {}
    console.log("current",this.currentPage)
    if (this.currentPage === 1){
       return this.customerList
    }else{
       initPost = {
        "contact":"",
        "matricule": "",
        "fullname": "",
        "departmentCode": "",
        "fromDate": "",
        "toDate": "",
        "page": this.currentPage - 1,
        "size": this.perPage
      };
    }

    const promise = this.$axios.$post("/findProducer", initPost);
    return promise.then((data) => {
      // console.log("provider");
      //console.log(data);
      let items = {} as any;
      items = data.object;
      this.json_data = data.object;
      this.totalRows = data.totalNumberOfElements;
      console.log("iteme",items)

      // Here we could override the busy state, setting isBusy to false
      // this.isBusy = false
      return (items);
    }).catch(() => {
      console.log("erreur")
      return [];
    });

  }
  rowClickHandler(item: any) {
    console.log(item)

    console.log('log fiules',this.customerList)

    // this.showInfo =true
    return this.$bvModal.show('modalInfoCustomer');
  }
  closeModal(){
    // this.showInfo =false
    return this.$bvModal.hide('modalResultSearch');

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
