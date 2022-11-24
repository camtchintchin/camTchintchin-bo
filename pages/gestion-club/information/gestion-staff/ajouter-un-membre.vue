<template>
  <div>
    <div class="col-xl-12 login-content flex-row-fluid d-flex flex-column justify-content-center position-relative overflow-hidden p-7 mx-auto">
      <div class="form-add-club">
        <div class=" pt-lg-0 pt-5 text-center">
          <h5 class="font-weight-bolder  text-dark font-size-h4 font-size-h1-lg">Formulaire d'ajout d'un membre du staff</h5>
          <!--									<a href="javascript:;" id="kt_login_signup" class="text-primary font-weight-bolder">Create an Account</a></span>-->
        </div>
        <form class="form">
          <div class="card-body">
            <div class="form-group row mt-3">
              <label class="col-lg-2 col-form-label text-right">Nom:</label>
              <div class="col-lg-4">
                <input type="text" class="form-control" placeholder="Nom" />
              </div>

              <label class="col-lg-2 col-form-label text-right">Prenoms:</label>
              <div class="col-lg-4">
                <input type="text" class="form-control" placeholder="Prenom" />
              </div>

            </div>
            <div class="form-group row mt-3">
              <label class="col-lg-2 col-form-label text-right">Adresse:</label>
              <div class="col-lg-4">
                <div class="input-group">
                  <input type="text" class="form-control" placeholder="Localite" />
                  <div class="input-group-append">
                      <span class="input-group-text">
                        <i class="la la-map-marker"></i>
                      </span>
                  </div>
                </div>
              </div>
              <label class="col-lg-2 col-form-label text-right">Date de naissance:</label>
              <div class="col-lg-4">
                <div class="input-group">
                  <input type="date" class="form-control" placeholder="Nom complet" />
                </div>
              </div>

            </div>
            <div class="form-group row mt-3">
              <label class="col-lg-2 col-form-label text-right">Contact:</label>
              <div class="col-lg-4">
                <div class="input-group">
                  <input type="text" class="form-control" placeholder="+225 00 00 00 00" />
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
                  <input type="email" class="form-control" placeholder="mail@tchin.ci" />
                  <div class="input-group-append">
                      <span class="input-group-text">
                        <i class="la la-mail-bulk"></i>
                      </span>
                  </div>
                </div>
              </div>

            </div>

            <!-- end: Example Code-->
          </div>
          <div class="card-footer">
            <div class="row">
              <div class="col-lg-5"></div>
              <div class="col-lg-7">
                <button type="submit" class="btn-blue mr-2 p-4">Valider</button>
                <a type="button" href="#" onclick="history.back()" class="btn-yellow p-4">Retour</a>
              </div>
            </div>
          </div>
        </form>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: "ajouter-un-membre",
  data(){
    return{
      form:{
        "name": "Asec1 ",
        "creation_year": "2022",
        "contact": "+22501010102",
        "email": "club1@gmail.com",
        "description": "descriptio du club"
      },
      show: true,
      showDismissibleAlert: false,
      messageError: '',
    }
  },
  mounted(){
  },
  methods:{
    makeToast(msg: any) {
      this.$bvToast.toast(`${msg} `, {
        title: '',
        autoHideDelay: 5000,
        variant:"danger",
        solid:true
      })
    },


  }
})
</script>

<style scoped>

</style>
