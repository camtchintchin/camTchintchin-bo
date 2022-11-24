<template>
  <div>
    <div class="row">
      <div class="col-xl-12">
        <div class="row">
          <div class="col-xl-12">
            <div class="card card-custom gutter-b">
              <!--begin::Header-->
              <div class="card-header border-0 py-5">
                <h3 class="card-title align-items-start flex-column">
                  <span class="card-label font-weight-bolder text-dark">LISTE DES CLUBS</span>
                  <span class="text-muted mt-3 font-weight-bold font-size-sm">50 clubs enregistrés</span>
                </h3>
                <div class="card-toolbar">
                  <a href="/gestion-club/creer-un-club" class="btn btn-success font-weight-bolder font-size-sm">

                    <i class=" text-dark-50 flaticon2-plus"></i>

                    Ajouter un nouveau club
                  </a>
                </div>
              </div>
              <!--end::Header-->
              <!--begin::Body-->
              <div class="card-body pt-0 pb-3">
                <!--begin::Table-->
                <div class="table-responsive">
                  <table class="table table-head-custom table-head-bg table-borderless table-vertical-center">
                    <thead>
                    <tr class="text-uppercase">
                      <th style="min-width: 100px" class="pl-7">
                        <span class="text-dark-75">Logo</span>
                      </th>
                      <th style="min-width: 100px">
                        <span class="text-dark-75">Nom</span>
                      </th>
                      <th style="min-width: 130px">
                        <span class="text-dark-75">Localité</span>
                      </th>
                      <th style="min-width: 100px">
                        <span class="text-dark-75">Création</span>
                      </th>
                      <th style="min-width: 100px">
                        <span class="text-dark-75">email</span>
                      </th>
                      <th style="min-width: 130px">
                        <span class="text-dark-75">Contact</span>
                      </th>
                      <th style="min-width: 120px">Actions</th>
                    </tr>
                    </thead>
                    <tbody v-for="(item, key) in items">
                      <tr>
                        <td class="pl-0 py-8">
                          <div class="d-flex align-items-center">
                            <div class="symbol symbol-50  ml-4">
                              <img src="~assets/media/equip/africa.png"  >

                              <!--                            <div class="symbol-label" style="background-image: url('assets/media/equip/asec.png');background-size: 100% auto" ></div>-->
                            </div>
                          </div>
                        </td>
                        <td>
                          <span class="text-dark-75 font-weight-bolder d-block font-size-lg">{{item.name}}</span>
                        </td>
                        <td>
                          <span class="text-dark-75 font-weight-bolder d-block font-size-lg">ABIDJAN</span>
                        </td>
                        <td>
                          <span class="text-dark-75 font-weight-bolder d-block font-size-lg">{{item.creation_year}}</span>
                        </td>
                        <td>
                          <span class="text-dark-75  font-weight-bolder d-block font-size-lg">{{item.email}}</span>
                        </td>
                        <td>
                          <span class="text-dark-75 font-weight-bolder d-block font-size-lg">{{item.contact}}</span>
                        </td>
                        <td class="text-left pr-0">
                          <a :href="'/gestion-club/information/'+item.id" class="btn btn-icon btn-light btn-hover-primary btn-sm">
																<span class="svg-icon svg-icon-md svg-icon-primary">
																	<!--begin::Svg Icon | path:assets/media/svg/icons/Navigation/Arrow-right.svg-->
																	<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
																		<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
																			<polygon points="0 0 24 0 24 24 0 24" />
																			<rect fill="#000000" opacity="0.3" transform="translate(12.000000, 12.000000) rotate(-90.000000) translate(-12.000000, -12.000000)" x="11" y="5" width="2" height="14" rx="1" />
																			<path d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z" fill="#000000" fill-rule="nonzero" transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997)" />
																		</g>
																	</svg>
                                  <!--end::Svg Icon-->
																</span>
                          </a>
                        </td>
                      </tr>

                    </tbody>
                  </table>
                </div>
                <!--end::Table-->
              </div>
              <!--end::Body-->
            </div>

          </div>

        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  layout:"default",
  data(){
    return{
      items:{}
    }
  },
  computed:{
    getListCLubItems(){
      return this.$accessor.getListCLub
    },
  },
  methods:{
    async ListClub(){

      // console.log("create club")
      await this.$axios.$get('v1/club')
        .then((response) => {
          console.log("type",typeof response)

          console.log(response.data)
          if (response){
            this.items = response
            console.log("ok")
            // return response.data
          }
        })
        .catch((error) => {
          //console.log(error)
        })
    }
  },
  mounted(){
    // this.$accessor.getListCLubHandler()

    this.ListClub()
  }

}
</script>

<style scoped>

</style>
