<template>
  <div>
    <b-row>
      <div class="col-xl-8">
        <div class="row">
          <div class="col-xl-12">

            <!--begin::Tiles Widget 13-->
            <div class="card card-custom gutter-b card-match" style="min-height: 350px;">
              <!--begin::Body-->
              <div class="card-body">
                <b-row>
                  <b-col md="8">
                    <p  class="text-white font-weight-bolder line-height-lg  name-player">
                      <b-skeleton v-if="isFetching" animation="wave" width="85%" height="80px"></b-skeleton>
                      {{ user.firstname }}
                    </p>
                    <h3  class="text-white font-weight-bolder line-height-lg mt-n5 mb-0 mb-lg-15 Poppins">
                      {{ user.lastname }}
                    </h3>
                    <b-row >
                      <b-col md="6" >
                        <div class="py-2">
                          <p href="#" class="text-dark-75 font-weight-bold  font-size-lg mb-1 pb-2">Poste</p>
                          <p class="text-muted font-weight-bold ">
                            <b-skeleton v-if="isFetching" animation="wave" width="50%" height="15px"></b-skeleton>
                            {{ user.user_poste }}
                          </p>
                        </div>

                        <div class="py-2">
                          <p href="#" class="text-dark-75 font-weight-bold  font-size-lg mb-1 pb-2">nationnalite</p>
                          <p class="text-muted font-weight-bold ">
                            <b-skeleton v-if="isFetching" animation="wave" width="50%" height="15px"></b-skeleton>
                            {{ user.nationality_name }}
                          </p>
                        </div>

                      </b-col>
                      <b-col  md="6" class="">
                        <div class="py-2 ">
                          <p href="#" class="text-dark-75 font-weight-bold  font-size-lg mb-1 pb-2">date de fonction</p>
                          <p class="text-muted font-weight-bold ">12/03/2021 (1 an)</p>
                        </div>
                        <div class="py-2">
                          <p href="#" class="text-dark-75 font-weight-bold  font-size-lg mb-1 pb-2">Date de naissance</p>
                          <p class="text-muted font-weight-bold ">12/03/1974 (48 ans)</p>
                        </div>

                      </b-col>
                      <b-col  md="6" class="">
                        <div class="py-2 ">
                          <p href="#" class="text-dark-75 font-weight-bold  font-size-lg mb-1 pb-2">Contact</p>
                          <p class="text-muted font-weight-bold ">{{ user.contact }}</p>
                        </div>

                      </b-col>
                      <b-col  md="6" class="">
                        <div class="py-2">
                          <p href="#" class="text-dark-75 font-weight-bold  font-size-lg mb-1 pb-2">E-mail</p>
                          <p class="text-muted font-weight-bold ">{{ user.email }}</p>
                        </div>
                      </b-col>
                    </b-row>
                  </b-col>
                  <b-col md="4" class="text-right">
                    <img src="~assets/media/equip/asec.png" width="80px"  style="max-width: 90px;" class="">
                  </b-col>
                </b-row>


              </div>
              <!--end::Body-->
            </div>

            <!--end::Tiles Widget 13-->

          </div>
        </div>

      </div>
      <div class="col-xl-4">

        <div  class=" gutter-b card-custom card-match mt-30">
          <div class="row mb-5">
            <div class="col-6 col-lg-6 mb-4 mb-lg-0">
              <a class="card card-number  pt-5 py-lg-5  rounded  align-items-center" href="#">
                <h1 class="text-center">1</h1>
                <span class="nav-text font-size-lg pb-2  text-center">Club(s) <br/>Employeur(s)</span>
              </a>
            </div>
            <div class="col-6 col-lg-6 mb-4 mb-lg-0">
              <a class="card card-number  pt-5 py-lg-5  rounded  align-items-center" href="#">
                <h1 class="text-center">5</h1>
                <span class="nav-text font-size-lg pb-2  text-center">Compétition(s)<br/>remportée(s)</span>
              </a>
            </div>
            <!--begin::Nav Tabs-->
          </div>
          <div class="row pt-5">
            <div class="col mb-4 mb-lg-0" >
              <a href='/' class="btn  px-9 px-lg-9  pb-0 btn-red">
                <b-col>
                  <i class="icon-2x text-white-50 text-hover-dark-50 flaticon-home"></i>
                </b-col>
                <b-col>
                  <p>Page d'accueil</p>
                </b-col>

              </a>
            </div>
            <div class="col mb-4 mb-lg-0" >
              <a onclick="history.back()" href="#" class="btn  px-6 py-3 btn-yellow">
                <b-col>
                  <i class="icon-2x text-white-50 flaticon2-left-arrow-1"></i>
                </b-col>
                <b-col>
                  Page precedente
                </b-col>
              </a>
            </div>

            <!--          <b-col>-->
            <!--            <div class="card card-custom bgi-no-repeat gutter-b">-->
            <!--              &lt;!&ndash;begin::Body&ndash;&gt;-->
            <!--              <div class="card-body d-flex align-items-center">-->
            <!--                <div>-->
            <!--&lt;!&ndash;                  <h1 class="text-white font-weight-bolder line-height-lg mb-5">BIENVENUE<br />&ndash;&gt;-->
            <!--&lt;!&ndash;                  </h1>&ndash;&gt;-->
            <!--                  <a href='#' class="btn  px-6 py-3 btn-red">-->
            <!--                    <i class="icon-2x text-dark-50 flaticon2-left-arrow-1"></i>-->
            <!--                    Page precedente-->
            <!--                  </a>-->
            <!--                </div>-->
            <!--              </div>-->
            <!--              &lt;!&ndash;end::Body&ndash;&gt;-->
            <!--            </div>-->

            <!--          </b-col>-->
            <!--begin::Nav Tabs-->
          </div>

          <b-row class="my-10 mb-10 text-center ">
            <b-col>
              <a href='#' class="btn btn-yellow font-weight-bold pl-3 py-3 mr-5">
                <!--                    <i class="flaticon-edit text-primary"></i>-->
                Modifier
              </a>
              <a href='#' class="btn btn-red font-weight-bold pl-3 py-3 ">
                <!--                    <i class="flaticon-edit text-primary"></i>-->
                Supprimer
              </a>
            </b-col>



          </b-row>

        </div>

      </div>

    </b-row>


    <!--end::Row-->
  </div>

</template>

<script>
export default {
  name: "details-staff",
  data(){
    return{
      isFetching: true,
      user:{},
      id:this.$route.params.id
    }
  },
  methods:{
    async infoUser(){
      console.log("id log",this.id)
      // console.log("create club")
      await this.$axios.$get('v1/users/club/'+this.id)
        .then((response) => {
          console.log("type",typeof response)

          console.log(response.data)
          if (response){
            this.isFetching = false
            this.user = response.data.data
            console.log("ok")
            // return response.data
          }
        })
        .catch((error) => {
          //console.log(error)
        })
    },
  },
  mounted(){
    this.infoUser()
  }
}
</script>

<style scoped>
.card{
  box-shadow: -1px 1px 18px 8px rgba(0,0,0,0.14);
  -webkit-box-shadow: -1px 1px 18px 8px rgba(0,0,0,0.14);
  -moz-box-shadow: -1px 1px 18px 8px rgba(0,0,0,0.14);
}
</style>
