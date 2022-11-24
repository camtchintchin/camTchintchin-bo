<template>
  <div>
    <div class="col-xl-12 login-content flex-row-fluid d-flex flex-column justify-content-center position-relative overflow-hidden p-7 mx-auto">
      <div class="form-add-club">
        <div class=" pt-lg-0 pt-5 text-center">
          <h5 class="font-weight-bolder  text-dark font-size-h4 font-size-h1-lg">Formulaire de création de club</h5>
          <!--									<a href="javascript:;" id="kt_login_signup" class="text-primary font-weight-bolder">Create an Account</a></span>-->
        </div>
        <form class="form">
          <div class="card-body">
            <div class="form-group row mt-3">
              <label class="col-lg-2 col-form-label text-right">Nom du club:</label>
              <div class="col-lg-4">
                <input type="text" class="form-control" placeholder="Nom complet" v-model="form.name" />
              </div>


<!--              <label class="col-lg-2 col-form-label text-right">Logo:</label>-->
<!--              <div class="col-lg-4">-->
<!--                <div class="input-group">-->
<!--                  <input type="file" class="form-control" placeholder="" />-->
<!--                  <div class="input-group-append">-->
<!--                      <span class="input-group-text">-->
<!--                        <i class="la la-file-image"></i>-->
<!--                      </span>-->
<!--                  </div>-->
<!--                </div>-->

<!--              </div>-->
              <label class="col-lg-2 col-form-label text-right">Contact club:</label>
              <div class="col-lg-4">
                <div class="input-group">
                  <input type="text" class="form-control" placeholder="+225 00 00 00 00" v-model="form.contact" @keypress="$numericValue($event)" />
                  <div class="input-group-append">
                      <span class="input-group-text">
                        <i class="la la-info-circle"></i>
                      </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="form-group row mt-3">

              <label class="col-lg-2 col-form-label text-right">E-mail club:</label>
              <div class="col-lg-4">
                <div class="input-group">
                  <input type="email" class="form-control" placeholder="mail@tchin.ci" v-model="form.email"/>
                  <div class="input-group-append">
                      <span class="input-group-text">
                        <i class="la la-mail-bulk"></i>
                      </span>
                  </div>
                </div>
              </div>


            </div>
            <div class="form-group row mt-3">
              <label class="col-lg-2 col-form-label text-right">Description:</label>
              <div class="col-lg-4">
                <div class="input-group">
                  <textarea type="text" class="form-control" placeholder="description" v-model="form.description"></textarea>
                </div>
              </div>
              <label class="col-lg-2 col-form-label text-right">Annee de creation:</label>
              <div class="col-lg-4">
                <div class="input-group">
                  <input type="number" class="form-control" placeholder="creation" v-model="form.creation_year"/>
                </div>
              </div>

            </div>

            <!-- end: Example Code-->
          </div>
          <div class="card-footer">
            <div class="row">
              <div class="col-lg-5"></div>
              <div class="col-lg-7">
                <button type="submit" class="btn-blue mr-2 p-4" @click.prevent="createClub">Valider</button>
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
          <h1>Club ajouté avec succes</h1>
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

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: "creer-un-club",
  data(){
    return{
      form:{
        "name": "",
        "creation_year": "",
        "contact": "+225",
        "email": "",
        "description": ""
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

    createClub(){
      // return this.$bvModal.show('modalForm');

      // console.log("create club")
      const data = this.form
      this.$axios
        .$post('v1/club',data)
        .then((response) => {
          console.log(response.data.status)
          if (response.data.status){
            this.$bvModal.show('modalForm');
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
})
</script>

<style scoped>

</style>
