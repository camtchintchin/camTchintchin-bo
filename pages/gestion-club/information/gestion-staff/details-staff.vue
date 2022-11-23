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
                    <p  class="text-white font-weight-bolder line-height-lg  name-player">Ouégnin</p>
                    <h3  class="text-white font-weight-bolder line-height-lg mt-n5 mb-0 mb-lg-15 Poppins">Roger</h3>
                    <b-row >
                      <b-col md="6" >
                        <div class="py-2">
                          <p href="#" class="text-dark-75 font-weight-bold  font-size-lg mb-1 pb-2">Poste</p>
                          <p class="text-muted font-weight-bold ">Président</p>
                        </div>

                        <div class="py-2">
                          <p href="#" class="text-dark-75 font-weight-bold  font-size-lg mb-1 pb-2">nationnalite</p>
                          <p class="text-muted font-weight-bold ">Ivoirienne</p>
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
                          <p class="text-muted font-weight-bold ">+225 00 00 00 00</p>
                        </div>

                      </b-col>
                      <b-col  md="6" class="">
                        <div class="py-2">
                          <p href="#" class="text-dark-75 font-weight-bold  font-size-lg mb-1 pb-2">E-mail</p>
                          <p class="text-muted font-weight-bold ">email@gmail.com</p>
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
  name: "details-staff"
}
</script>

<style scoped>
.card{
  box-shadow: -1px 1px 18px 8px rgba(0,0,0,0.14);
  -webkit-box-shadow: -1px 1px 18px 8px rgba(0,0,0,0.14);
  -moz-box-shadow: -1px 1px 18px 8px rgba(0,0,0,0.14);
}
</style>
