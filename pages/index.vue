<template>
  <div id="kt_body" class="header-fixed header-mobile-fixed subheader-enabled subheader-fixed aside-enabled aside-fixed aside-minimize-hoverable page-loading ">
    <!--begin::Main-->
    <div class="d-flex flex-column flex-root">
      <!--begin::Login-->
      <div class="login login-1 login-signin-on d-flex flex-column flex-lg-row flex-column-fluid bg-white vh-100" id="kt_login">
        <!--begin::Aside-->
        <div  style="min-width: 40%" class="d-none d-lg-flex">
          <img
            src="~/assets/media/img/bg-login-no-logo.png"
            alt="Logo"
            style="max-width: 500px;min-width: 100%"
            class="img-fluid mx-auto d-block img-responsive"
          />

        </div>
        <!--begin::Aside-->
        <!--begin::Content-->
        <div class="login-content flex-row-fluid d-flex flex-column justify-content-center position-relative overflow-hidden p-7 mx-auto">
          <!--begin::Content body-->
          <div class="d-flex flex-column-fluid flex-center">
            <!--begin::Signin-->
            <div class="login-form login-signin">
              <!--begin::Form-->
              <form class="form" novalidate="novalidate" id="kt_login_signin_form">
                <!--begin::Title-->
                <div class="pb-13 pt-lg-0 pt-5 text-center">
                  <h3 class="font-weight-bolder  text-dark font-size-h4 font-size-h1-lg">BIENVENUE</h3>
                  <span class="text-muted font-weight-bold font-size-h4">AKWABA</span>
                  <!--									<a href="javascript:;" id="kt_login_signup" class="text-primary font-weight-bolder">Create an Account</a></span>-->
                </div>
                <!--begin::Title-->
                <!--begin::Form group-->
                <div class="form-group">
                  <label class="font-size-h6 font-weight-bolder text-dark">Email</label>
                  <input class="form-control form-control-solid h-auto py-7 px-6 rounded-lg" type="text" name="username" autocomplete="off" />
                </div>
                <!--end::Form group-->
                <!--begin::Form group-->
                <div class="form-group">
                  <div class="d-flex justify-content-between mt-n5">
                    <label class="font-size-h6 font-weight-bolder text-dark pt-5">Mot de passe</label>
                  </div>
                  <input class="form-control form-control-solid h-auto py-7 px-6 rounded-lg" type="password" name="password" autocomplete="off" />
                  <a href="javascript:;" class="text-primary font-size-h6 font-weight-bolder text-hover-primary pt-5" id="kt_login_forgot">Mot de passe oublié ?</a>

                </div>
                <!--end::Form group-->
                <!--begin::Action-->
                <div class="pb-lg-0 pb-5 text-center">
                  <b-spinner small label="Large Spinner" type="grow" v-if="loading"></b-spinner>

                  <button v-else @click="login" type="button" id="kt_login_signin_submit" class=" btn btn-primary font-weight-bolder font-size-h6 px-8 py-4 my-3 mr-3">
                    Connexion
                  </button>

                </div>
                <!--end::Action-->
              </form>
              <!--end::Form-->
            </div>
            <!--end::Signin-->

          </div>
          <!--end::Content body-->
          <!--begin::Content footer-->
          <!--          <div class="d-flex justify-content-lg-start justify-content-center align-items-end py-7 py-lg-0 link__bottom">-->
          <!--&lt;!&ndash;            <a href="#" class="text-primary font-weight-bolder font-size-h5">Terms</a>&ndash;&gt;-->
          <!--            <a href="#" class="text-primary ml-10 font-weight-bolder font-size-h5 link__bottom">A propos de nous</a>-->
          <!--            <a href="#" class="text-primary ml-5  font-weight-bolder font-size-h5">Besoin d'aide ?</a>-->
          <!--          </div>-->
          <!--end::Content footer-->
        </div>
        <!--end::Content-->
      </div>
      <!--end::Login-->
    </div>
    <!--end::Main-->
  </div>

</template>

<script lang="ts">
import Vue from "vue";

// import metronic from "~/helpers/metronic";
// import "~/helpers/metronic";
export default Vue.extend( {
  name: "LoginPage",
  layout:"login",
  data(){
    return{
      loading:false
    }

  },
  methods:{
    login(){
      console.log("login")
      this.loading=true

      setTimeout(function() {
        this.loading=false
      }, 7000);
      window.location = "/dashboard"
      // this.$store.commit("SET_LOGGIN",true)
    }
  }
})
</script>
<style lang="scss" scoped>
#kt_login_signin_submit{
  background: #997334;
  border: none;
  &:hover{
    background: #04315d;
    transition: 0.1ms;
  }
}

.link__bottom{
  font-size:5px;
}
.login-form{
  padding: 50px;
  border-radius: 10px;
  //background: #1CB7D695;
  box-shadow: 1px 2px 23px 20px rgba(86,91,194,0.04);
  -webkit-box-shadow: 1px 2px 23px 20px rgba(86,91,194,0.04);
  -moz-box-shadow: 1px 2px 23px 20px rgba(86,91,194,0.04);
}

</style>
