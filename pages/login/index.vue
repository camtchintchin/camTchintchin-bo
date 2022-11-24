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
              <va-observer>
                <b-form  @submit.prevent="loginSubmit"   v-if="show" class="form" id="kt_login_signin_form">
                  <div class="pb-13 pt-lg-0 pt-5 text-center">
                    <h3 class="font-weight-bolder  text-dark font-size-h4 font-size-h1-lg">BIENVENUE</h3>
                    <span class="text-muted font-weight-bold font-size-h4">AKWABA</span>
                    <!--									<a href="javascript:;" id="kt_login_signup" class="text-primary font-weight-bolder">Create an Account</a></span>-->
                  </div>
                  <va-provider v-slot="{ errors }" rules="" name="Identifiant">
                    <b-form-group
                      id="input-group-1"
                      label="Login:"
                      label-for="input-1"
                      class="font-size-h6 font-weight-bolder text-dark"
                    >
                      <b-form-input
                        id="input-1"
                        v-model="form.username"
                        type="text"
                        placeholder="Identifiant ou E-mail"
                        class="form-control form-control-solid h-auto py-7 px-6 rounded-lg"
                        required
                      ></b-form-input>
                    </b-form-group>
                  </va-provider>
                  <div class="position-relative">
                    <va-provider v-slot="{ errors }" rules="" name="Mot de passe">
                      <b-form-group
                        id="password"
                        label="Mot de passe"
                        class="font-size-h6 font-weight-bolder text-dark"
                        label-for="password"
                      >
                        <b-form-input
                          v-model="form.password"
                          :type="fieldType"
                          placeholder="Entrez votre mot de passe"
                          class=" input-cus form-control form-control-solid h-auto py-7 px-6 rounded-lg"
                          required
                        ></b-form-input>
<!--                        <i-->
<!--                          :class="eye"-->
<!--                          class="fa password-reveal position-absolute"-->
<!--                          aria-hidden="true"-->
<!--                          role="button"-->
<!--                          @click="obfuscateToggle"-->
<!--                        ></i>-->
                        <h6 class="text-danger">{{ errors[0] }}</h6>
                      </b-form-group>
                    </va-provider>
                  </div>
                  <div class="text-primary font-size-h6 font-weight-bolder text-hover-primary pt-5" id="kt_login_forgot">
                    <NuxtLink
                      to="#"
                      class="link-for text-center mt-1">Mot de passe oublié ?
                    </NuxtLink>
                  </div>
                  <div class="d-flex justify-content-center text-center mt-5">
                    <!--<a href="/dashboard" class="btn btn-cus mt-3 btn-primary">Se connecter</a>-->
                    <button v-if="!isLoading"   id="kt_login_signin_submit" class=" btn btn-primary font-weight-bolder font-size-h6 px-8 py-4 my-3 mr-3"
                            @click.prevent="loginSubmit">Connexion
                    </button>

                    <!--                 <button-->
                    <!--                   v-if="!isLoading"-->

                    <!--                   type="submit"-->
                    <!--                   class="btn-block"-->
                    <!--                 >-->
                    <!--                   Connexion-->
                    <!--                 </button>-->
                    <b-spinner
                      v-else
                      variant="success"
                      type="grow"
                      label="Spinning"
                    ></b-spinner>
                  </div>


                  <!--               <div class="text-center mt-5">-->
                  <!--                 <button type="submit" class="btn-block">Connexion</button>-->
                  <!--               </div>-->
                  <!--              <button type="submit" class="btn-submit">Connexion</button>-->
                </b-form>

              </va-observer>
<!--              <form class="form" novalidate="novalidate" id="kt_login_signin_form">-->
<!--                &lt;!&ndash;begin::Title&ndash;&gt;-->
<!--                <div class="pb-13 pt-lg-0 pt-5 text-center">-->
<!--                  <h3 class="font-weight-bolder  text-dark font-size-h4 font-size-h1-lg">BIENVENUE</h3>-->
<!--                  <span class="text-muted font-weight-bold font-size-h4">AKWABA</span>-->
<!--                  &lt;!&ndash;									<a href="javascript:;" id="kt_login_signup" class="text-primary font-weight-bolder">Create an Account</a></span>&ndash;&gt;-->
<!--                </div>-->
<!--                &lt;!&ndash;begin::Title&ndash;&gt;-->
<!--                &lt;!&ndash;begin::Form group&ndash;&gt;-->
<!--                <div class="form-group">-->
<!--                  <label class="font-size-h6 font-weight-bolder text-dark">Email</label>-->
<!--                  <input class="form-control form-control-solid h-auto py-7 px-6 rounded-lg" type="text" name="username" autocomplete="off" />-->
<!--                </div>-->
<!--                &lt;!&ndash;end::Form group&ndash;&gt;-->
<!--                &lt;!&ndash;begin::Form group&ndash;&gt;-->
<!--                <div class="form-group">-->
<!--                  <div class="d-flex justify-content-between mt-n5">-->
<!--                    <label class="font-size-h6 font-weight-bolder text-dark pt-5">Mot de passe</label>-->
<!--                  </div>-->
<!--                  <input class="form-control form-control-solid h-auto py-7 px-6 rounded-lg" type="password" name="password" autocomplete="off" />-->
<!--                  <a href="javascript:;" class="text-primary font-size-h6 font-weight-bolder text-hover-primary pt-5" id="kt_login_forgot">Mot de passe oublié ?</a>-->

<!--                </div>-->
<!--                &lt;!&ndash;end::Form group&ndash;&gt;-->
<!--                &lt;!&ndash;begin::Action&ndash;&gt;-->
<!--                <div class="pb-lg-0 pb-5 text-center">-->
<!--                  <b-spinner small label="Large Spinner" type="grow" v-if="loading"></b-spinner>-->

<!--                  <button v-else @click="login" type="button" id="kt_login_signin_submit" class=" btn btn-primary font-weight-bolder font-size-h6 px-8 py-4 my-3 mr-3">-->
<!--                    Connexion-->
<!--                  </button>-->

<!--                </div>-->
<!--                &lt;!&ndash;end::Action&ndash;&gt;-->
<!--              </form>-->
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
export default Vue.extend( {
  name: "LoginPage",
  layout:"login",
  middleware:'isAuthenticate',

  data(){
    return{
      isLoading: false,
      fieldType: 'password',
      eye: 'fa-eye',
      foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
      show: true,
      showDismissibleAlert: false,
      messageError: '',
      form: {
        username: '',
        password: '',
        rememberMe: true,
      },
    }

  },
  mounted(){

  },
  methods:{
    makeToast(msg: any) {
      // @ts-ignore
      this.$bvToast.toast(`${msg} `, {
        title: '',
        autoHideDelay: 5000,
        variant:"danger",
        solid:true
      })
    },
    obfuscateToggle() {
      if (this.fieldType === 'password') {
        this.fieldType = 'text'
      } else this.fieldType = 'password'
      if (this.eye === 'fa-eye') {
        this.eye = 'fa-eye-slash'
      } else this.eye = 'fa-eye'
    },
     async loginSubmit(){
      this.isLoading = true
      try {
        // @ts-ignore
        const formSign = {
          username: this.form.username,
          password: this.form.password,
          // username: "mianahissan@proton.me",
          // password: "Ingenieur2022@@@"
        }
        console.log("form",formSign)
        // @ts-ignore
        await this.$accessor.generateTokenHandler(formSign).then(  (response) => {
          console.log("response ss",response)
           if (response.response.data.code == '99'){
             console.log("response in logn")

             this.messageError = "Mot de passe ou identifiant incorrect"
             this.showDismissibleAlert = true
             this.makeToast(this.messageError)
           }else{
             console.log("response for call log")
             this.$axios
               .$get('/v1/users/token/get')
               .then((response) => {
                 console.log(response)

                 this.authenticationSuccess(response.data.data)
               })
               .catch((error) => {
                 //console.log(error)
               })


           }


           // await this.$accessor.authenticate.users.login()
        })
        this.isLoading = false
      } catch (err) {
        //  console.log("err")
        //   console.log(err)
        this.messageError = "Une erreur est survenue. Veuillez réssayer ou contacter l'administrateur"
        this.showDismissibleAlert = true
        //this.$accessor.logout();
        window.localStorage.removeItem('vuex')
        // console.log(err);
      }
      this.isLoading = false
    },

    authenticationSuccess(userData :any) {

      try {

        // console.log("user datat",userData)
        // @ts-ignore
        this.$accessor.LOGIN_SUCCESS(userData)
        this.$router.push('/')

      }
      catch (e) {
        console.log('erreur', e)
      }
    },
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
</style>
