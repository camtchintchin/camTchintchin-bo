<template>
  <div>
    <b-row>
      <div class="basic-dropdown">
        <!-- Default dropright button -->
        <div class="btn-group dropright mb-5">
          <button type="button" class="btn-search" data-toggle="dropdown">
            Rechercher un producteur
            <i class="fa fa-search" aria-hidden="true"> </i>
          </button>
          <div class="dropdown-menu dropdown-search">
            <b-form action="#" @submit.prevent="getProducter">
              <div class="col">
                <b-form-input type="text" class="form-control text-center" placeholder="Matricule" v-model="data.matricule">
                </b-form-input>
              </div>
              <div class="col">
                <b-form-input type="text" class="form-control text-center" placeholder="Numéro tel."  v-model="data.contact" @keypress="$numericValue($event)">
                </b-form-input>
              </div>
              <div class="col">
                <b-form-input type="text" class="form-control text-center" placeholder="Nom & prénoms" v-model="data.fullname">
                </b-form-input>
              </div>
              <div class="search col justify-content-center text-center">
                <button  type="submit" class="btn-search  mb-2">Valider</button>
              </div>

            </b-form>

          </div>
        </div>
<!--        v-b-modal.modalResultSearch-->
        <!-- Split dropright button -->
      </div>
    </b-row>

    <ResultSearch :customerList="customerList"/>
  </div>
</template>

<script>
import ResultSearch from "@/components/modal/ResultSearch.vue";

export default {
  name: "SearchComponent",
  components:{
    ResultSearch,
  },
  data(){
    return{
      data:{
        "contact":"",
        "matricule": "",
        "fullname": "",
        "departmentCode": "",
        "fromDate": "",
        "toDate": "",
        "page":0,
        "size":5
      },
      customerList: {}

      //

    }
  },

  mounted() {
  },

  methods:{
    getProducter(){
      console.log("dto",this.data)
      this.$axios.$post("/findProducer",this.data).then(response => {
        console.log("response",response)
        if (response.status){
          this.customerList = response.object
          return this.$bvModal.show('modalResultSearch');
        }


        // this.$emit("FindCstumer",this.data)
      })
    }
  }
}
</script>

<style scoped>

</style>
