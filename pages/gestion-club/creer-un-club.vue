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
                <input type="text" class="form-control" placeholder="Nom complet" />
              </div>


              <label class="col-lg-2 col-form-label text-right">Logo:</label>
              <div class="col-lg-4">
                <div class="input-group">
                  <input type="file" class="form-control" placeholder="" />
                  <div class="input-group-append">
                      <span class="input-group-text">
                        <i class="la la-file-image"></i>
                      </span>
                  </div>
                </div>

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
              <label class="col-lg-2 col-form-label text-right">President:</label>
              <div class="col-lg-4">
                <div class="input-group">
                  <input type="text" class="form-control" placeholder="Nom complet" />
                  <div class="input-group-prepend">
                      <span class="input-group-text">
                        <i class="la la-user"></i>
                      </span>
                  </div>
                </div>
              </div>

            </div>
            <div class="form-group row mt-3">
              <label class="col-lg-2 col-form-label text-right">Contact club:</label>
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
              <label class="col-lg-2 col-form-label text-right">E-mail club:</label>
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
  name: "creer-un-club"
})
</script>

<style scoped>

</style>
