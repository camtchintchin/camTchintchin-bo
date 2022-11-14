<template>
  <b-container fluid>
    <b-row>
      <b-col lg="4">
      <img
        class="left-img"
        src="~assets/images/cacao.png"
        width="100%"
      >
      </b-col>
      <b-col lg="8" class="divRight ">
       <div class="centerDiv">
         <b-col md="10" class="mb-4">
           <figure>
             <img
               src="~assets/images/ccc.png"
               alt="Push Corporate"
               width="400px"
               class="img-fluid mx-auto d-block"
             />
             <figcaption >
               Reporting Distribution
             </figcaption>
           </figure>

           <p
             class="h6 text-center mb-5">
           </p>
         </b-col>
         <b-col md="10" class="mt-5">
           <div class="loginDiv">

             <div class="text-center">
               <b class="fs-20">Bienvenue</b>
               <br/>
               <small>
                 Merci de vous identifier pour <br>accéder à la plateforme
               </small>
             </div>
           </div>

           <va-observer>
             <b-form  @submit.prevent="loginSubmit"   v-if="show" class="text-left">
               <va-provider v-slot="{ errors }" rules="" name="Identifiant">
                 <b-form-group
                   id="input-group-1"
                   label="Login:"
                   label-for="input-1"
                 >
                   <b-form-input
                     id="input-1"
                     v-model="form.username"
                     type="email"
                     placeholder="Identifiant"
                     required
                   ></b-form-input>
                 </b-form-group>
               </va-provider>
               <div class="position-relative">
                 <va-provider v-slot="{ errors }" rules="" name="Mot de passe">
                   <b-form-group
                     id="password"
                     label="Mot de passe"
                     label-for="password"
                     style="color: #004156 !important; font-weight: 400"
                   >
                     <b-form-input
                       v-model="form.password"
                       :type="fieldType"
                       class="input-cus"
                       placeholder="Entrez votre mot de passe"
                       required
                     ></b-form-input>
                     <i
                       :class="eye"
                       class="fa password-reveal position-absolute"
                       aria-hidden="true"
                       role="button"
                       @click="obfuscateToggle"
                     ></i>
                     <h6 class="text-danger">{{ errors[0] }}</h6>
                   </b-form-group>
                 </va-provider>
               </div>
               <div class="d-flex justify-content-center text-center mt-5">
                 <!--<a href="/dashboard" class="btn btn-cus mt-3 btn-primary">Se connecter</a>-->
                 <button v-if="!isLoading"   class="btn-block mt-3"
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
               <div class="d-flex justify-content-center">
                 <NuxtLink
                   to="/forgot-password/admin-panelys"
                   class="link-for text-center mt-1"
                 >Mot de passe oublié ?
                 </NuxtLink>
               </div>

<!--               <div class="text-center mt-5">-->
<!--                 <button type="submit" class="btn-block">Connexion</button>-->
<!--               </div>-->
               <!--              <button type="submit" class="btn-submit">Connexion</button>-->
             </b-form>

           </va-observer>
         </b-col>
       </div>
      </b-col>

    </b-row>

  </b-container>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend( {
  name: "LoginPage",
  layout :"login",
  middleware:'isAuthenticate',

  data() {
    return {
      isLoading: false,
      formSign: {
        email: 'g.mian@panelyscash.com',
        password: 'g.mian@panelyscash.com',
      },
      form: {
        username: '',
        password: '',
        rememberMe: true,
        userType: 'PanelysUser',
      },
      fieldType: 'password',
      eye: 'fa-eye',
      foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
      show: true,
      publicKey: { exponent: String, modulus: String },
      showDismissibleAlert: false,
      messageError: '',
    }
  },
  mounted() {
    // @ts-ignore

    this.$accessor.authenticate.users.getPublickey().then((response) => {
      console.log("response mounted")
      console.log(response.publicKey)
      this.publicKey = response.publicKey
    }) /****/
    // document.body.style.zoom = "100%";
  },
  methods: {

    makeToast(msg: any) {
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

    async loginSubmit() {
      this.isLoading = true
      try {
        // @ts-ignore
        const formSign = {
          username: this.form.username,
          password: this.form.password,
          publicKey: this.publicKey,
          userType: this.form.userType,
        }
        console.log("form",formSign)
        await this.$accessor.login(formSign)
          .then( async (response:any) => {
            console.log("loginSubmit");
            console.log(response.response);
            if (response.id) {
              await this.$axios
                // @ts-ignore
                .$get(`/panelys-users/get/${response.id}`)
                .then((response) => {
                  console.log('panelys-users ' + JSON.stringify(response))
                  // To optimize
                  if (response.status && response.object.active) {
                    // @ts-ignore
                    this.authenticationSuccess(response.object)
                  }
                })
            } else {
              if (!response.response.status) {
                this.messageError = response.response.response
                console.log("erreur")
                this.makeToast(this.messageError)
              }
              this.showDismissibleAlert = true
              this.$accessor.logout()
              window.localStorage.removeItem('vuex')
            }
        })
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

    authenticationSuccess(userData: any) {
      //  console.log("authenticationSuccess")
      // console.log(userData)
      //  console.log(userData.profile)
      try {
        // @ts-ignore
        // const $slugify = this.$slugify
        // userData.id = response.object.id;
          this.$accessor.LOGIN_SUCCESS(userData)
          this.$router.push('/')

          // if (userData.isDefaultPassword) {
          //   return this.$router.push('/reset-password/admin-panelys')
          // }

          // @ts-ignore
          // document.querySelector(".login_error").innerHTML = "";
          // window.location.href = '/dashboard';
        }
       catch (e) {
        console.log('erreur', e)
      }
    },

  }
})
</script>

<style scoped lang="scss">
figcaption{
  font: normal normal 800 25px Poppins;
  color: #768801;
}
.centerDiv{
  margin: 0 auto;
  width: 500px;
  //border: 1px solid red;
}
  .divRight{
    margin-top: 80px;
    //border: 1px solid blue;
    height: 100%;
    //padding-bottom: 400px;
    text-align: center;
    //width: 800px;
    //padding-top:50px;
    //border: 1px solid red;
    //position: relative;
    //top: 50%;
    //left: 180px;
    //padding: 90px 0px 0px 300px;
    //padding-left:200px;
  }
  .loginDiv{
    font: normal normal 800 Poppins;
    color: #87878E;
    h3{
      //border: 1px solid green;
    }
    small{
      //border: 1px solid green;
    }

  }
  .btn-block{
    background: #768801;
    border-radius: 18px !important;
    color: #fff ;
    font-weight: bold !important;
    border: white;
    padding: 5px;
    width: 100%;
    //margin-left: 50px;
    &:hover,&:focus{
      border: 1px #768801 solid;
      background: #fff;
      color: #768801;
    }
    &:disabled:hover {
      color: #768801 !important;
    }
  }

  .btn-submit {
    width: 100%;
    background: #768801;
    color: #fff ;
    border-radius: 18px !important;
    //padding: 8px !important;
    font-weight: bold !important;
    border: white;
    padding: 5px;
    &:hover,&:focus{
               border: 1px #768801 solid;
               background: #fff;
               color: #768801;
             }

    &:disabled:hover {
       color: #768801 !important;
     }
  }
  input{
    border-radius: 18px;
  }
  .left-img{
    position: absolute;
    left: 0;
  }
</style>
