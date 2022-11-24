<template>
  <div>
    <div class="col-xl-12 login-content flex-row-fluid d-flex flex-column justify-content-center position-relative overflow-hidden p-7 mx-auto">
      <div class="form-add-club">
        <div class=" pt-lg-0 pt-5 text-center">
          <h5 class="font-weight-bolder  text-dark font-size-h4 font-size-h1-lg">Formulaire de création de joueur</h5>
          <!--									<a href="javascript:;" id="kt_login_signup" class="text-primary font-weight-bolder">Create an Account</a></span>-->
        </div>
        <form class="form">
          <div class="card-body">
            <div class="form-group row mt-3">
              <label class="col-lg-2 col-form-label text-right">Nom:</label>
              <div class="col-lg-4">
                <input type="text" class="form-control"  placeholder="Nom" required v-model="form.lastname" />
              </div>

              <label class="col-lg-2 col-form-label text-right">Prenom:</label>
              <div class="col-lg-4">
                <input type="text" class="form-control" required placeholder="Prenom" v-model="form.firstname" />
              </div>
            </div>
            <div class="form-group row mt-3">
              <label class="col-lg-2 col-form-label text-right">Identifiant:</label>
              <div class="col-lg-4">
                <input type="text" class="form-control" required placeholder="Identifiant" v-model="form.username" />
              </div>
              <label class="col-lg-2 col-form-label text-right">Nationalite:</label>
              <div class="col-lg-4">
                <div class="input-group" >
                  <b-form-select v-model="form.nationality" :options="listCountries"></b-form-select>
                </div>

              </div>
            </div>
            <div class="form-group row mt-3">
              <label class="col-lg-2 col-form-label text-right">Contact:</label>
              <div class="col-lg-4">
                <div class="input-group">
                  <input type="text" class="form-control" required placeholder="+225 00 00 00 00" v-model="form.contact" @keypress="$numericValue($event)" />
                  <div class="input-group-append">
                      <span class="input-group-text">
                        <i class="la la-info-circle"></i>
                      </span>
                  </div>
                </div>
              </div>
              <label class="col-lg-2 col-form-label text-right">E-mail:</label>
              <div class="col-lg-4">
                <div class="input-group">
                  <input type="email" class="form-control" required placeholder="mail@tchin.ci" v-model="form.email"/>
                  <div class="input-group-append">
                      <span class="input-group-text">
                        <i class="la la-mail-bulk"></i>
                      </span>
                  </div>
                </div>
              </div>
            </div>
<!--            <div class="form-group row mt-3">-->
<!--              <label class="col-lg-2 col-form-label text-right">Description:</label>-->
<!--              <div class="col-lg-4">-->
<!--                <div class="input-group">-->
<!--                  <textarea type="text" class="form-control" required placeholder="description" v-model="form.description"></textarea>-->
<!--                </div>-->
<!--              </div>-->
<!--              <label class="col-lg-2 col-form-label text-right">Date de naissance:</label>-->
<!--              <div class="col-lg-4">-->
<!--                <div class="input-group">-->
<!--                  <input type="date" class="form-control" required placeholder="creation" />-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
            <div class="form-group row mt-3">


              <label class="col-lg-2 col-form-label text-right">Pays de residence:</label>
              <div class="col-lg-4">
                <div class="input-group" >
                  <b-form-select v-model="form.residence_country" :options="listCountries"></b-form-select>
                </div>

              </div>
              <label class="col-lg-2 col-form-label text-right">Poste:</label>
              <div class="col-lg-4">
                <div class="input-group" >
                  <b-form-select v-model="post" :options="listPost"></b-form-select>
                </div>

              </div>
            </div>


            <!-- end: Example Code-->
          </div>
          <div class="card-footer">
            <div class="row">
              <div class="col-lg-5"></div>
              <div class="col-lg-7">
                <button type="submit" class="btn-blue mr-2 p-4" @click.prevent="createPLayer">Valider</button>
                <a type="button" href="#" onclick="history.back()" class="btn-yellow p-4">Retour</a>
              </div>
            </div>
          </div>
        </form>

      </div>
    </div>
    <b-modal id="modalForm" centered  size="sm" class="ml-50"  hide-header>
      <div class="modal-body">
        <div class="text-center">
          <h1>Joueur ajouté avec succes</h1>
          <i class="flaticon2-check-mark text-success" style="font-size: 50px"></i>
        </div>

      </div>
      <template #modal-footer>

        <div class="w-100 text-center">
          <b-button
            variant="danger"
            size="sm"
            class=""
            @click="closeModal()"
          >
            Retour
          </b-button>
        </div>
      </template>
    </b-modal>

  </div>
</template>

<script>
export default {
  name: "ajouter-un-joueur",
  data(){
    return{
      id:this.$route.params.id,
      selected: null,
      listCountries:[
        {
          value: null,
          text: "Choisissez une option",
        },{
          value: 54,
          text: "Cote D'Ivoire",
        },{
          value: 83,
          text: "Ghana",
        },{
          value: 35,
          text: "Burkina Faso",
        },{
          value: 38,
          text: "Cameroon",
        },
      ],
      post:"",
      listPost:[
        {
          value: null,
          text: "Choisissez une option",
        },{
          value: "Attaquant",
          text: "Attaquant",
        },{
          value: "Milieu",
          text: "Milieu",
        },{
          value: "Defenseur",
          text: "Defenseur",
        },{
          value: "Gardien",
          text: "Gardien",
        },
      ],
      form:{
        "nationality":0,
        "residence_country":null,
        "residence_city":1,
        "profile_id":2,
        "country_id":1,
        "city_id":1,
        "lastname":"",
        "firstname":"",
        "username":"",
        "contact": "+225",
        "email": "",
        "password":"Ingenieur2022@@@",
        "repeat_password":"Ingenieur2022@@@"
      },
      show: true,
      showDismissibleAlert: false,
      messageError: '',
    }
  },
  mounted(){

    // this.getCountries()
  },
  methods:{
    async getCountries(){
      const list =[
        {
          "id": 54,
          "name": "Cote D'Ivoire (Ivory Coast)",
        },{
          "id": 83,
          "name": "Ghana",
        },{
          "id": 35,
          "name": "Burkina Faso",
        },{
          "id": 38,
          "name": "Cameroon",
        },
      ]
      this.listCountries = list
      // await this.$axios.$get("/v1/countries").then((response) => {
      //
      //   console.log(response.data)
      //   if (response.data.status){
      //     this.listCountries = response.data.data
      //     // return response.data
      //   }
      // })
      //   .catch((error) => {
      //     //console.log(error)
      //   })
      return {

      }
    },
    async getCity(country_id){
      await this.$axios.$get("/v1/cities/"+country_id).then((response) => {

        console.log(response.data)
        if (response.data.status){
          this.listCountries = response.data.data
          // return response.data
        }
      })
        .catch((error) => {
          //console.log(error)
        })
    },
    makeToast(msg) {
      this.$bvToast.toast(`${msg} `, {
        title: '',
        autoHideDelay: 5000,
        variant:"danger",
        solid:true
      })
    },

    createPLayer(){
      // return this.$bvModal.show('modalForm');

      // console.log("create club")
      this.form.country_id=this.form.residence_country
      // this.form.nationality=this.form.residence_country
      const data = this.form
      console.log("data xend",data)
      this.$axios
        .$post('v1/users',data)
        .then((response) => {
          console.log("stat",response.data.status)
          if (response.data.status){
            const dataProfil ={
              "user_id":response.data.data.id,
              "profile_id":2,
              "club_id":this.id,
              "poste":this.post
            }
            this.$axios
              .$post('v1/club/affect/user',dataProfil)
              .then((response) => {
                if (response.data.status){
                  this.$bvModal.show('modalForm');
                }
              })
          }else{
            this.messageError = "Une erreur est survenur lors de la création"
            this.showDismissibleAlert = true
            this.makeToast(this.messageError)
          }
        })
        .catch((error) => {
          //console.log(error)
        })
    },
    closeModal(){
      history.back()
      return this.$bvModal.hide('modalForm');
    }
  }
}
</script>

<style scoped>

</style>
