<template>
  <div id="main-wrapper">
    <div class="nav-header">
      <a
        role="button"
        class="brand-logo d-flex justify-content-center"
      >
        <img
          src="~assets/images/ccc.png"
          style="width: 100%"
          alt="Logo CCC"
        />
      </a>
<!--      <div class="nav-control">-->
<!--        <div class="hamburger">-->
<!--          <span class="line"></span><span class="line"></span>-->
<!--          <span class="line"></span>-->
<!--        </div>-->
<!--      </div>-->
    </div>
    <div class="header">
      <div class="header-content">
        <nav class="navbar navbar-expand">
          <div class="collapse navbar-collapse justify-content-between">
            <div class="header-left">
<!--              <button type="button" class="btn btn-primary" @click="reRender">-->
<!--                <i class="fa fa-refresh" aria-hidden="true"></i>-->
<!--                Rafraichir-->
<!--              </button>-->
            </div>
            <ul class="navbar-nav header-right">

              <li class="nav-item dropdown notification_dropdown">
                <a class="nav-link  ai-icon" href="javascript:void(0)" role="button" data-toggle="dropdown">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6001 4.3008V1.4C12.6001 0.627199 13.2273 0 14.0001 0C14.7715 0 15.4001 0.627199 15.4001 1.4V4.3008C17.4805 4.6004 19.4251 5.56639 20.9287 7.06999C22.7669 8.90819 23.8001 11.4016 23.8001 14V19.2696L24.9327 21.5348C25.4745 22.6198 25.4171 23.9078 24.7787 24.9396C24.1417 25.9714 23.0147 26.6 21.8023 26.6H15.4001C15.4001 27.3728 14.7715 28 14.0001 28C13.2273 28 12.6001 27.3728 12.6001 26.6H6.19791C4.98411 26.6 3.85714 25.9714 3.22014 24.9396C2.58174 23.9078 2.52433 22.6198 3.06753 21.5348L4.20011 19.2696V14C4.20011 11.4016 5.23194 8.90819 7.07013 7.06999C8.57513 5.56639 10.5183 4.6004 12.6001 4.3008ZM14.0001 6.99998C12.1423 6.99998 10.3629 7.73779 9.04973 9.05099C7.73653 10.3628 7.00011 12.1436 7.00011 14V19.6C7.00011 19.817 6.94833 20.0312 6.85173 20.2258C6.85173 20.2258 6.22871 21.4718 5.57072 22.7864C5.46292 23.0034 5.47412 23.2624 5.60152 23.4682C5.72892 23.674 5.95431 23.8 6.19791 23.8H21.8023C22.0445 23.8 22.2699 23.674 22.3973 23.4682C22.5247 23.2624 22.5359 23.0034 22.4281 22.7864C21.7701 21.4718 21.1471 20.2258 21.1471 20.2258C21.0505 20.0312 21.0001 19.817 21.0001 19.6V14C21.0001 12.1436 20.2623 10.3628 18.9491 9.05099C17.6359 7.73779 15.8565 6.99998 14.0001 6.99998Z" fill="#3E4954"/>
                  </svg>
                  <span class="badge light text-white bg-danger rounded-circle">0</span>
                </a>

              </li>
              <li class="nav-item dropdown header-profile">
                <a class="nav-link" href="javascript:void(0)" role="button" data-toggle="dropdown">
                  <div class="header-info">
                    <span class="text-black"><strong>{{  loggedInUser.lastname}}</strong></span>
                    <p class="fs-12 mb-0">{{  loggedInUser.profile.label}}</p>
                  </div>
                  <img src="" width="20" alt=""/>
                </a>
                <div class="dropdown-menu dropdown-menu-right">
                  <a href="/profil" class="dropdown-item ai-icon">
                    <svg id="icon-user1" xmlns="http://www.w3.org/2000/svg" class="text-primary" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                    <span class="ml-4">Mon profile </span>
                  </a>
                  <a href="#" @click="logout" class="dropdown-item ai-icon">
                    <svg id="icon-logout" xmlns="http://www.w3.org/2000/svg" class="text-danger" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                    <span class="ml-4">Déconnexion </span>
                  </a>
                </div>
              </li>
            </ul>

          </div>
        </nav>
      </div>
    </div>
    <SideBar/>
    <div class="content-body">
      <div  class="container-fluid">
        <div class="row mainDiv">
          <div class="col-md-6 div-left">
            <Nuxt />
          </div>

          <div class="col-md-6 div-right">
            <b-row class="mb-4   page-fluid">
              <b-col class="result-bar col-md-12 pl-4 mt-n2 mb-3">
                Sélectionnez une Délégation régionale ( DR ) …
              </b-col>
            </b-row>

            <b-row class="cart__box">
              <div class="col-xl-12 col-lg-12 col-sm-12">
                <div class="card">
                  <div class="card-body">
                    <MapComponent/>
                  </div>
                </div>
              </div>
            </b-row>
          </div>

        </div>


        <ResultSearch/>

      </div>
    </div>
    <div class="footer shadow-none">
      <div class="copyright font-weight-bold text-center">
        <p class="color-blue">
          &copy; {{ new Date().getFullYear() }}
          <a href="/" target="_blank">Reporting Distribution </a> Tous
          droits réservés
        </p>
      </div>
    </div>

  </div>
</template>

<script  lang="ts">
import Vue from "vue";
import SideBar from "@/components/SideBar.vue";
import {mapGetters} from "vuex";
import ResultSearch from "@/components/modal/ResultSearch.vue";
import MapComponent from "@/components/MapComponent.vue";



export default Vue.extend({

  name: "default",
  middleware:'isAuthenticate',
  data(){
    return{
      // geojson,



    }
  },
  components:{
    SideBar,
    ResultSearch,
    MapComponent,

  },
  // props:{
  //   name,
  // },

  mounted() {
    this.initMophy()
    document.body.style.zoom = "80%";

  },
  computed:{
    ...mapGetters(["loggedInUser"]),
    // getUserInfo(){
    //   return this.state.user
    // }
  },
  methods:{
    initMophy() {
      "use strict";
      Mophy.init();
    },




    async logout() {
      // @ts-ignore
      // this.$accessor.usersManagement.assignment.REMOVE_USER_ASSIGEMENT();

      //
      // if (this.sessionExpired){
      //   // @ts-ignore
      //   if (this.logoutType){
      //     // console.log("is Pos")
      //     window.location.href = "/?session=expired";
      //   }else{
      //     // console.log("is panelUser")
      //     window.location.href = "/panelys-login?session=expired";
      //   }
      //   // @ts-ignore
      // }else if (this.logoutType){
      //   // console.log("is Pos")
      //   window.location.href = "/";
      // }else{
      //   // console.log("is panelUser")
      //   window.location.href = "/panelys-login";
      // }


      this.$accessor.logout();
      window.location.href = '/login';
      // if (userRoles.includes("panelys-user") ) {
      //   window.location.href = "/panelys-login";
      // }
      //this.$auth.setUser(null)
      //this.$auth.setUserToken('')
      //this.$store.commit('SET_LOGGED_IN', false);
      //this.$router.push('');
      //window.location.href = '/';
      //this.$router.push('/')
    }

  },
})
</script>

<style lang="scss">
.info {
  padding: 6px 8px;
  font: 14px/16px Arial, Helvetica, sans-serif;
  background: white;
  background: rgba(255,255,255,0.8);
  box-shadow: 0 0 15px rgba(0,0,0,0.2);
  border-radius: 5px;
}
.legend {
  line-height: 18px;
  color: #555;
}
.cart__box{
  .card{
    z-index: 0;
  }
  z-index: -1;
  //height: 100vh;
}
html, body {margin: 0; height: 100%; overflow: hidden}




.card-ccc{
  border: green;
}
.deznav{
  //width: 22%;
  //border: 2px green solid;
  //margin-right:  5px;
}
.deznav-scroll{
  background: #768801;
  //margin-right:40px;
  //border: 2px red solid;

  .nav-text{
    color: white;
  }
}
.header,.nav-header{
  background: #fff;
}
.header{
  box-shadow: 0px 0px 14px #00000029;

}

.content-body{
  z-index: 1;
  //border: 2px yellow solid;
  //margin-left: 13rem;

}


/*page*/


.five {
  transform:scale(1);
  .modal-background {
    background:rgba(0,0,0,.0);
    animation: fadeIn .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
    .modal {
      transform:translateX(-1500px);
      animation: roadRunnerIn .3s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
    }
  }
  &.out {
    animation: quickScaleDown 0s .5s linear forwards;
    .modal-background {
      animation: fadeOut .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
      .modal {
        animation: roadRunnerOut .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
      }
    }
  }
}
@keyframes roadRunnerIn {
  0% {
    transform:translateX(-1500px) skewX(30deg) scaleX(1.3);
  }
  70% {
    transform:translateX(30px) skewX(0deg) scaleX(.9);
  }
  100% {
    transform:translateX(0px) skewX(0deg) scaleX(1);
  }
}

@keyframes roadRunnerOut {
  0% {
    transform:translateX(0px) skewX(0deg) scaleX(1);
  }
  30% {
    transform:translateX(-30px) skewX(-5deg) scaleX(.9);
  }
  100% {
    transform:translateX(1500px) skewX(30deg) scaleX(1.3);
  }
}


.modal-header{
  i{
    color: black;
    position: absolute;
    right: 40px;
    top: 15px;
  }
  button{
    border: none;
  }
}
.modalBody{
  //height: 600px;
  //overflow-y: auto;
  overflow: auto;
  height: 100vh;
}
.principalDiv{
  hr{
    background-color: #7A8728;
  }
  p{
    color: #7A8728;

  }
}
.infoCarte {
  .value {

    p {
      border-radius: 0px 30px 30px 0px;
      margin: 10px;
      font: normal normal 900 15px/26px Poppins;
      color: #768801;
      //border: 1px red solid;
    }
  }
}
.labelInfo{
  background-color: #eef2f4;
  border-radius: 30px 0px 0px 30px;
  //border: 1px red solid;

  p{
    margin: 10px ;
    font: normal normal 900 15px/26px Poppins;
    color:#000000;
    //border: 1px red solid;
  }
}
.value{
  background-color: #ebeeda;
  border-radius: 0px 30px 30px 0px;
  p{
    margin: 10px ;
    font: normal normal 900 15px/26px Poppins;
    color: #004156;
    //border: 1px red solid;
  }
}


/* ===== Scrollbar CSS ===== */
/* Firefox */
* {
  scrollbar-width: auto;
  scrollbar-color: #f2ecf3 #ffffff;
}

/* Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 0;
}

*::-webkit-scrollbar-track {
  background: #ffffff;
}

*::-webkit-scrollbar-thumb {
  background-color: #f2ecf3;
  border-radius: 10px;
  border: 2px solid #ffffff;
}
.div-left{
  overflow: auto;
  height: 100vh;
  padding-bottom: 50px;
  //height:650px;
  padding-left: 20px;
  width: 100%;
}

.div-right{
  //.card{
  //  height: 100%;
  //}

  width: 100%;
  img{
    height: 90vh;
  }
  .card-header{
    border: none;
  }
}

.dropdown-search{
  z-index: 1;
  background: #e1e5c7;
  form{
    //padding: 0;
    //margin: 10px;
    input{
      border-radius: 20px;
      margin:2px 2px 8px 2px;
    }
  }
  //.form-row{
  //  border: green solid 1px;
  //  padding: 0;
  //  margin: 0;
  //}
  width: 300px;
  //padding: 20px 1px 20px 10px;
}
.color-blue {
  color: #004156;
  //font-size: 14px;
  line-height: 20px;
}
.color-green {
  color: #768801;
  font: normal normal 800 30px Poppins ;
}
.details-link{
  color: #707070;
  text-decoration: underline;
}
.bg-sc {
  background-color: #4daf27;
}
.result-bar{
  border-radius: 18px 0px 0px 18px;

  //width: 105%;
  //border : solid 1px green;
  //margin-left: -30px;
  background: #e1e5c7;
  padding: 5px;
  .border-blue-op{
    background: #fff;
  }

}
.bar-info{
  //background: #e1e5c7;
}
.search-input{
  border-radius: 0px 18px 18px 0px;
  padding: 0;
  height: 100%;
}
.search{
  //button{
  //  border-radius: 18px;
  //  background: #768801;
  //  //margin: 12px;
  //}

  span,div{
    text-align: center;
    color: white;
    //border: 2px solid;
  }
}
.card--home{
  background: #fff;
  //&:hover{
  //  background: #e1e5c7;
  //
  //}
}
.card-shadow {
  box-shadow: 0px 0px 14px #00000029;
  border-radius: 18px;
  backdrop-filter: blur(17px);
  border-color: transparent;
  background-color: white;
  //&:hover{
  //  border: 2px solid green;
  //  background-color: red;
  //
  //}
}

.block-text-left{
  background: #768801;
  border-radius: 0px 18px 18px 0px;
  color: white;
}
.page-fluid {
  padding: 10px;
  background: none;
  margin-right: -38px;
  div{
    color: #768801;
  }
  //width: 70%;
}
.card-blue{
  background: #f4f4f4;
}

</style>
