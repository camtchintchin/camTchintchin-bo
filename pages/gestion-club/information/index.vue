<template>
  <div>
    <b-row>
      <div class="col-xl-8">
        <div class="row">
          <div class="col-xl-12">

            <!--begin::Tiles Widget 13-->
            <div class="card card-custom bgi-no-repeat gutter-b" style="height: 175px; background-color: #663259; background-position: calc(100% + 0.5rem) 100%; background-size: 100% auto; background-image: url(../../../assets/media/svg/patterns/taieri.svg)">
              <!--begin::Body-->
              <div class="card-body d-flex align-items-center">
                <div>
                  <h3 class="text-white font-weight-bolder line-height-lg mb-5">Gestion Clubs & <br />Joueurs</h3>
                  <a href='#' class="btn btn-success font-weight-bold px-6 py-3">C'est parti !</a>
                </div>
              </div>
              <!--end::Body-->
            </div>

            <!--end::Tiles Widget 13-->

          </div>
        </div>
      </div>
      <div class="col-xl-4">

        <!--begin::Tiles Widget 13-->
        <div class="card card-custom card-match bgi-no-repeat gutter-b  text-center" style="height: 175px;">
          <!--begin::Body-->
          <div class="card-body d-flex align-items-center justify-content-center">
            <img src="~assets/media/equip/asec.png" width="80px"  style="max-width: 90px;" >
          </div>
          <!--end::Body-->
        </div>
        <!--end::Tiles Widget 13-->

      </div>

    </b-row>
    <div class="row">

      <div class="col-xl-8">
        <div class="row">
          <div class="col-xl-12">
            <div class="card card-custom gutter-b">
              <!--begin::Header-->
              <div class="card-header border-0 py-5">
                <h3 class="card-title align-items-start flex-column">
                  <span class="card-label font-weight-bolder text-dark">MEMBRES DU CLUBS</span>
                  <span class="text-muted mt-3 font-weight-bold font-size-sm">10 membres enregistrés</span>
                </h3>
                <div class="card-toolbar">
                  <a href="/gestion-club/information/gestion-joueurs/details-joueurajouter-un-membre" class="btn btn-success font-weight-bolder font-size-sm">

                    <i class=" text-dark-50 flaticon2-plus"></i>

                    Ajouter un nouveau membre
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
                        <span class="text-dark-75">Image</span>
                      </th>
                      <th style="min-width: 100px">
                        <span class="text-dark-75">Nom & prenom</span>
                      </th>
                      <th style="min-width: 130px">
                        <span class="text-dark-75">Poste</span>
                      </th>
                      <th style="min-width: 130px">
                        <span class="text-dark-75">Adresse</span>
                      </th>
                      <th style="min-width: 170px">
                        <span class="text-dark-75">Contact</span>
                      </th>
                      <th style="min-width: 170px">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td class="pl-0 py-8">
                        <div class="d-flex align-items-center">
                          <div class="symbol symbol-50  ml-4">
                            <img src="~assets/media/svg/avatars/001-boy.svg" class="h-75 align-self-end" alt="" />

                            <!--                            <div class="symbol-label" style="background-image: url('assets/media/equip/asec.png');background-size: 100% auto" ></div>-->
                          </div>
                        </div>
                      </td>
                      <td>
                        <span class="text-dark-75 font-weight-bolder d-block font-size-lg">Toure Sylla</span>
                      </td>
                      <td>
                        <span class="text-dark-75 font-weight-bolder d-block font-size-lg">President</span>
                      </td>
                      <td>
                        <span class="text-dark-75 font-weight-bolder d-block font-size-lg">Abidjan/Marcory</span>
                      </td>
                      <td>
                        <span class="text-dark-75 font-weight-bolder d-block font-size-lg">+225 00 00 00 00 00</span>
                      </td>
                      <td class="text-left pr-0">
                        <a href="/gestion-club/information/gestion-joueurs/details-joueur" class="btn btn-icon btn-light btn-hover-primary btn-sm">
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
                        <a href="#" class="btn btn-icon btn-light btn-hover-primary btn-sm mx-3">
																		<span class="svg-icon svg-icon-md svg-icon-primary">
																			<!--begin::Svg Icon | path:assets/media/svg/icons/Communication/Write.svg-->
																			<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
																				<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
																					<rect x="0" y="0" width="24" height="24" />
																					<path d="M12.2674799,18.2323597 L12.0084872,5.45852451 C12.0004303,5.06114792 12.1504154,4.6768183 12.4255037,4.38993949 L15.0030167,1.70195304 L17.5910752,4.40093695 C17.8599071,4.6812911 18.0095067,5.05499603 18.0083938,5.44341307 L17.9718262,18.2062508 C17.9694575,19.0329966 17.2985816,19.701953 16.4718324,19.701953 L13.7671717,19.701953 C12.9505952,19.701953 12.2840328,19.0487684 12.2674799,18.2323597 Z" fill="#000000" fill-rule="nonzero" transform="translate(14.701953, 10.701953) rotate(-135.000000) translate(-14.701953, -10.701953)" />
																					<path d="M12.9,2 C13.4522847,2 13.9,2.44771525 13.9,3 C13.9,3.55228475 13.4522847,4 12.9,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,6 C2,3.790861 3.790861,2 6,2 L12.9,2 Z" fill="#000000" fill-rule="nonzero" opacity="0.3" />
																				</g>
																			</svg>
                                      <!--end::Svg Icon-->
																		</span>
                        </a>
                        <a href="#" class="btn btn-icon btn-light btn-hover-primary btn-sm">
																		<span class="svg-icon svg-icon-md svg-icon-primary">
																			<!--begin::Svg Icon | path:assets/media/svg/icons/General/Trash.svg-->
																			<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
																				<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
																					<rect x="0" y="0" width="24" height="24" />
																					<path d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z" fill="#000000" fill-rule="nonzero" />
																					<path d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z" fill="#000000" opacity="0.3" />
																				</g>
																			</svg>
                                      <!--end::Svg Icon-->
																		</span>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td class="pl-0 py-8">
                        <div class="d-flex align-items-center">
                          <div class="symbol symbol-50  ml-4">
                            <img src="~assets/media/svg/avatars/001-boy.svg" class="h-75 align-self-end" alt="" />

                            <!--                            <div class="symbol-label" style="background-image: url('assets/media/equip/asec.png');background-size: 100% auto" ></div>-->
                          </div>
                        </div>
                      </td>
                      <td>
                        <span class="text-dark-75 font-weight-bolder d-block font-size-lg">Toure Sylla</span>
                      </td>
                      <td>
                        <span class="text-dark-75 font-weight-bolder d-block font-size-lg">President</span>
                      </td>
                      <td>
                        <span class="text-dark-75 font-weight-bolder d-block font-size-lg">Abidjan/Marcory</span>
                      </td>
                      <td>
                        <span class="text-dark-75 font-weight-bolder d-block font-size-lg">+225 00 00 00 00 00</span>
                      </td>
                      <td class="text-left pr-0">
                        <a href="/gestion-club/information/gestion-joueurs/details-joueur" class="btn btn-icon btn-light btn-hover-primary btn-sm">
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
                        <a href="#" class="btn btn-icon btn-light btn-hover-primary btn-sm mx-3">
																		<span class="svg-icon svg-icon-md svg-icon-primary">
																			<!--begin::Svg Icon | path:assets/media/svg/icons/Communication/Write.svg-->
																			<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
																				<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
																					<rect x="0" y="0" width="24" height="24" />
																					<path d="M12.2674799,18.2323597 L12.0084872,5.45852451 C12.0004303,5.06114792 12.1504154,4.6768183 12.4255037,4.38993949 L15.0030167,1.70195304 L17.5910752,4.40093695 C17.8599071,4.6812911 18.0095067,5.05499603 18.0083938,5.44341307 L17.9718262,18.2062508 C17.9694575,19.0329966 17.2985816,19.701953 16.4718324,19.701953 L13.7671717,19.701953 C12.9505952,19.701953 12.2840328,19.0487684 12.2674799,18.2323597 Z" fill="#000000" fill-rule="nonzero" transform="translate(14.701953, 10.701953) rotate(-135.000000) translate(-14.701953, -10.701953)" />
																					<path d="M12.9,2 C13.4522847,2 13.9,2.44771525 13.9,3 C13.9,3.55228475 13.4522847,4 12.9,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,6 C2,3.790861 3.790861,2 6,2 L12.9,2 Z" fill="#000000" fill-rule="nonzero" opacity="0.3" />
																				</g>
																			</svg>
                                      <!--end::Svg Icon-->
																		</span>
                        </a>
                        <a href="#" class="btn btn-icon btn-light btn-hover-primary btn-sm">
																		<span class="svg-icon svg-icon-md svg-icon-primary">
																			<!--begin::Svg Icon | path:assets/media/svg/icons/General/Trash.svg-->
																			<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
																				<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
																					<rect x="0" y="0" width="24" height="24" />
																					<path d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z" fill="#000000" fill-rule="nonzero" />
																					<path d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z" fill="#000000" opacity="0.3" />
																				</g>
																			</svg>
                                      <!--end::Svg Icon-->
																		</span>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td class="pl-0 py-8">
                        <div class="d-flex align-items-center">
                          <div class="symbol symbol-50  ml-4">
                            <img src="~assets/media/svg/avatars/001-boy.svg" class="h-75 align-self-end" alt="" />

                            <!--                            <div class="symbol-label" style="background-image: url('assets/media/equip/asec.png');background-size: 100% auto" ></div>-->
                          </div>
                        </div>
                      </td>
                      <td>
                        <span class="text-dark-75 font-weight-bolder d-block font-size-lg">Toure Sylla</span>
                      </td>
                      <td>
                        <span class="text-dark-75 font-weight-bolder d-block font-size-lg">President</span>
                      </td>
                      <td>
                        <span class="text-dark-75 font-weight-bolder d-block font-size-lg">Abidjan/Marcory</span>
                      </td>
                      <td>
                        <span class="text-dark-75 font-weight-bolder d-block font-size-lg">+225 00 00 00 00 00</span>
                      </td>
                      <td class="text-left pr-0">
                        <a href="/gestion-club/information/gestion-joueurs/details-joueur" class="btn btn-icon btn-light btn-hover-primary btn-sm">
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
                        <a href="#" class="btn btn-icon btn-light btn-hover-primary btn-sm mx-3">
																		<span class="svg-icon svg-icon-md svg-icon-primary">
																			<!--begin::Svg Icon | path:assets/media/svg/icons/Communication/Write.svg-->
																			<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
																				<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
																					<rect x="0" y="0" width="24" height="24" />
																					<path d="M12.2674799,18.2323597 L12.0084872,5.45852451 C12.0004303,5.06114792 12.1504154,4.6768183 12.4255037,4.38993949 L15.0030167,1.70195304 L17.5910752,4.40093695 C17.8599071,4.6812911 18.0095067,5.05499603 18.0083938,5.44341307 L17.9718262,18.2062508 C17.9694575,19.0329966 17.2985816,19.701953 16.4718324,19.701953 L13.7671717,19.701953 C12.9505952,19.701953 12.2840328,19.0487684 12.2674799,18.2323597 Z" fill="#000000" fill-rule="nonzero" transform="translate(14.701953, 10.701953) rotate(-135.000000) translate(-14.701953, -10.701953)" />
																					<path d="M12.9,2 C13.4522847,2 13.9,2.44771525 13.9,3 C13.9,3.55228475 13.4522847,4 12.9,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,6 C2,3.790861 3.790861,2 6,2 L12.9,2 Z" fill="#000000" fill-rule="nonzero" opacity="0.3" />
																				</g>
																			</svg>
                                      <!--end::Svg Icon-->
																		</span>
                        </a>
                        <a href="#" class="btn btn-icon btn-light btn-hover-primary btn-sm">
																		<span class="svg-icon svg-icon-md svg-icon-primary">
																			<!--begin::Svg Icon | path:assets/media/svg/icons/General/Trash.svg-->
																			<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
																				<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
																					<rect x="0" y="0" width="24" height="24" />
																					<path d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z" fill="#000000" fill-rule="nonzero" />
																					<path d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z" fill="#000000" opacity="0.3" />
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
      <div class="col-xl-4" data-aos="fade-left">
        <!--begin::Tiles Widget 1-->
        <div class="card card-custom gutter-b card-stretch">
          <!--begin::Header-->
          <div class="card-header border-0 pt-5">
            <div class="card-title">
              <div class="card-label text-center">
                <div class="font-weight-bolder text-center">Informations du Club</div>
              </div>
            </div>
          </div>
          <!--end::Header-->
          <!--begin::Body-->
          <div class="card-body d-flex flex-column px-0">

            <!--begin::Items-->
            <div class="flex-grow-1 card-spacer-x">
              <!--begin::Item-->
              <div class="d-flex align-items-center justify-content-between ">
                <a href="#" class="font-size-h6 text-dark-75 text-hover-primary font-weight-bolder">NOM</a>
                <div class="font-size-sm text-muted font-weight-bold mt-1">Fc Adjame</div>
              </div>
              <!--end::Item-->


            </div>
            <div class="flex-grow-1 card-spacer-x">
              <!--begin::Item-->
              <div class="d-flex align-items-center justify-content-between ">
                <a href="#" class="font-size-h6 text-dark-75 text-hover-primary font-weight-bolder">Localisation</a>
                <div class="font-size-sm text-muted font-weight-bold mt-1">Abidjan/Adjame</div>
              </div>
              <!--end::Item-->


            </div>
            <div class="flex-grow-1 card-spacer-x">
              <!--begin::Item-->
              <div class="d-flex align-items-center justify-content-between">
                <a href="#" class="font-size-h6 text-dark-75 text-hover-primary font-weight-bolder">Président</a>
                <div class="font-size-sm text-muted font-weight-bold mt-1">M. Shadrack</div>

              </div>
              <!--end::Item-->


            </div>
            <div class="flex-grow-1 card-spacer-x">
              <!--begin::Item-->
              <div class="d-flex align-items-center justify-content-between">
                <a href="#" class="font-size-h6 text-dark-75 text-hover-primary font-weight-bolder">Date de création</a>
                <div class="font-size-sm text-muted font-weight-bold mt-1">12/03-1995</div>
              </div>
              <!--end::Item-->


            </div>
            <!--end::Items-->
          </div>
          <!--end::Body-->
        </div>
        <!--end::Tiles Widget 1-->
      </div>
    </div>
    <div class="row">
      <div class="col-xl-8">
        <div class="row">
          <div class="col-xl-12">
            <div class="card card-custom gutter-b">
              <!--begin::Header-->
              <div class="card-header border-0 py-5">
                <h3 class="card-title align-items-start flex-column">
                  <span class="card-label font-weight-bolder text-dark">JOUEURS DU CLUBS</span>
                  <span class="text-muted mt-3 font-weight-bold font-size-sm">10 joueurs enregistrés</span>
                </h3>
                <div class="card-toolbar">
                  <a href="/gestion-club/information/gestion-joueurs/details-joueurajouter-un-joueur" class="btn btn-success font-weight-bolder font-size-sm">

                    <i class=" text-dark-50 flaticon2-plus"></i>

                    Ajouter un nouveau joueur
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
                        <span class="text-dark-75">Image</span>
                      </th>
                      <th style="min-width: 100px">
                        <span class="text-dark-75">Nom & prenom</span>
                      </th>
                      <th style="min-width: 130px">
                        <span class="text-dark-75">Poste</span>
                      </th>
                      <th style="min-width: 130px">
                        <span class="text-dark-75">Adresse</span>
                      </th>
                      <th style="min-width: 170px">
                        <span class="text-dark-75">Contact</span>
                      </th>
                      <th style="min-width: 170px">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td class="pl-0 py-8">
                        <div class="d-flex align-items-center">
                          <div class="symbol symbol-50  ml-4">
                            <img src="~assets/media/svg/avatars/001-boy.svg" class="h-75 align-self-end" alt="" />

                            <!--                            <div class="symbol-label" style="background-image: url('assets/media/equip/asec.png');background-size: 100% auto" ></div>-->
                          </div>
                        </div>
                      </td>
                      <td>
                        <span class="text-dark-75 font-weight-bolder d-block font-size-lg">Toure Sylla</span>
                      </td>
                      <td>
                        <span class="text-dark-75 font-weight-bolder d-block font-size-lg">President</span>
                      </td>
                      <td>
                        <span class="text-dark-75 font-weight-bolder d-block font-size-lg">Abidjan/Marcory</span>
                      </td>
                      <td>
                        <span class="text-dark-75 font-weight-bolder d-block font-size-lg">+225 00 00 00 00 00</span>
                      </td>
                      <td class="text-left pr-0">
                        <a href="/gestion-club/information/gestion-joueurs/details-joueur" class="btn btn-icon btn-light btn-hover-primary btn-sm">
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
                        <a href="#" class="btn btn-icon btn-light btn-hover-primary btn-sm mx-3">
																		<span class="svg-icon svg-icon-md svg-icon-primary">
																			<!--begin::Svg Icon | path:assets/media/svg/icons/Communication/Write.svg-->
																			<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
																				<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
																					<rect x="0" y="0" width="24" height="24" />
																					<path d="M12.2674799,18.2323597 L12.0084872,5.45852451 C12.0004303,5.06114792 12.1504154,4.6768183 12.4255037,4.38993949 L15.0030167,1.70195304 L17.5910752,4.40093695 C17.8599071,4.6812911 18.0095067,5.05499603 18.0083938,5.44341307 L17.9718262,18.2062508 C17.9694575,19.0329966 17.2985816,19.701953 16.4718324,19.701953 L13.7671717,19.701953 C12.9505952,19.701953 12.2840328,19.0487684 12.2674799,18.2323597 Z" fill="#000000" fill-rule="nonzero" transform="translate(14.701953, 10.701953) rotate(-135.000000) translate(-14.701953, -10.701953)" />
																					<path d="M12.9,2 C13.4522847,2 13.9,2.44771525 13.9,3 C13.9,3.55228475 13.4522847,4 12.9,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,6 C2,3.790861 3.790861,2 6,2 L12.9,2 Z" fill="#000000" fill-rule="nonzero" opacity="0.3" />
																				</g>
																			</svg>
                                      <!--end::Svg Icon-->
																		</span>
                        </a>
                        <a href="#" class="btn btn-icon btn-light btn-hover-primary btn-sm">
																		<span class="svg-icon svg-icon-md svg-icon-primary">
																			<!--begin::Svg Icon | path:assets/media/svg/icons/General/Trash.svg-->
																			<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
																				<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
																					<rect x="0" y="0" width="24" height="24" />
																					<path d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z" fill="#000000" fill-rule="nonzero" />
																					<path d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z" fill="#000000" opacity="0.3" />
																				</g>
																			</svg>
                                      <!--end::Svg Icon-->
																		</span>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td class="pl-0 py-8">
                        <div class="d-flex align-items-center">
                          <div class="symbol symbol-50  ml-4">
                            <img src="~assets/media/svg/avatars/001-boy.svg" class="h-75 align-self-end" alt="" />

                            <!--                            <div class="symbol-label" style="background-image: url('assets/media/equip/asec.png');background-size: 100% auto" ></div>-->
                          </div>
                        </div>
                      </td>
                      <td>
                        <span class="text-dark-75 font-weight-bolder d-block font-size-lg">Toure Sylla</span>
                      </td>
                      <td>
                        <span class="text-dark-75 font-weight-bolder d-block font-size-lg">Gardien</span>
                      </td>
                      <td>
                        <span class="text-dark-75 font-weight-bolder d-block font-size-lg">Abidjan/Marcory</span>
                      </td>
                      <td>
                        <span class="text-dark-75 font-weight-bolder d-block font-size-lg">+225 00 00 00 00 00</span>
                      </td>
                      <td class="text-left pr-0">
                        <a href="/gestion-club/information/gestion-joueurs/details-joueur" class="btn btn-icon btn-light btn-hover-primary btn-sm">
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
                        <a href="#" class="btn btn-icon btn-light btn-hover-primary btn-sm mx-3">
																		<span class="svg-icon svg-icon-md svg-icon-primary">
																			<!--begin::Svg Icon | path:assets/media/svg/icons/Communication/Write.svg-->
																			<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
																				<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
																					<rect x="0" y="0" width="24" height="24" />
																					<path d="M12.2674799,18.2323597 L12.0084872,5.45852451 C12.0004303,5.06114792 12.1504154,4.6768183 12.4255037,4.38993949 L15.0030167,1.70195304 L17.5910752,4.40093695 C17.8599071,4.6812911 18.0095067,5.05499603 18.0083938,5.44341307 L17.9718262,18.2062508 C17.9694575,19.0329966 17.2985816,19.701953 16.4718324,19.701953 L13.7671717,19.701953 C12.9505952,19.701953 12.2840328,19.0487684 12.2674799,18.2323597 Z" fill="#000000" fill-rule="nonzero" transform="translate(14.701953, 10.701953) rotate(-135.000000) translate(-14.701953, -10.701953)" />
																					<path d="M12.9,2 C13.4522847,2 13.9,2.44771525 13.9,3 C13.9,3.55228475 13.4522847,4 12.9,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,6 C2,3.790861 3.790861,2 6,2 L12.9,2 Z" fill="#000000" fill-rule="nonzero" opacity="0.3" />
																				</g>
																			</svg>
                                      <!--end::Svg Icon-->
																		</span>
                        </a>
                        <a href="#" class="btn btn-icon btn-light btn-hover-primary btn-sm">
																		<span class="svg-icon svg-icon-md svg-icon-primary">
																			<!--begin::Svg Icon | path:assets/media/svg/icons/General/Trash.svg-->
																			<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
																				<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
																					<rect x="0" y="0" width="24" height="24" />
																					<path d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z" fill="#000000" fill-rule="nonzero" />
																					<path d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z" fill="#000000" opacity="0.3" />
																				</g>
																			</svg>
                                      <!--end::Svg Icon-->
																		</span>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td class="pl-0 py-8">
                        <div class="d-flex align-items-center">
                          <div class="symbol symbol-50  ml-4">
                            <img src="~assets/media/svg/avatars/001-boy.svg" class="h-75 align-self-end" alt="" />

                            <!--                            <div class="symbol-label" style="background-image: url('assets/media/equip/asec.png');background-size: 100% auto" ></div>-->
                          </div>
                        </div>
                      </td>
                      <td>
                        <span class="text-dark-75 font-weight-bolder d-block font-size-lg">Toure Sylla</span>
                      </td>
                      <td>
                        <span class="text-dark-75 font-weight-bolder d-block font-size-lg">President</span>
                      </td>
                      <td>
                        <span class="text-dark-75 font-weight-bolder d-block font-size-lg">Abidjan/Marcory</span>
                      </td>
                      <td>
                        <span class="text-dark-75 font-weight-bolder d-block font-size-lg">+225 00 00 00 00 00</span>
                      </td>
                      <td class="text-left pr-0">
                        <a href="/gestion-club/information/gestion-joueurs/details-joueur" class="btn btn-icon btn-light btn-hover-primary btn-sm">
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
                        <a href="#" class="btn btn-icon btn-light btn-hover-primary btn-sm mx-3">
																		<span class="svg-icon svg-icon-md svg-icon-primary">
																			<!--begin::Svg Icon | path:assets/media/svg/icons/Communication/Write.svg-->
																			<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
																				<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
																					<rect x="0" y="0" width="24" height="24" />
																					<path d="M12.2674799,18.2323597 L12.0084872,5.45852451 C12.0004303,5.06114792 12.1504154,4.6768183 12.4255037,4.38993949 L15.0030167,1.70195304 L17.5910752,4.40093695 C17.8599071,4.6812911 18.0095067,5.05499603 18.0083938,5.44341307 L17.9718262,18.2062508 C17.9694575,19.0329966 17.2985816,19.701953 16.4718324,19.701953 L13.7671717,19.701953 C12.9505952,19.701953 12.2840328,19.0487684 12.2674799,18.2323597 Z" fill="#000000" fill-rule="nonzero" transform="translate(14.701953, 10.701953) rotate(-135.000000) translate(-14.701953, -10.701953)" />
																					<path d="M12.9,2 C13.4522847,2 13.9,2.44771525 13.9,3 C13.9,3.55228475 13.4522847,4 12.9,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,6 C2,3.790861 3.790861,2 6,2 L12.9,2 Z" fill="#000000" fill-rule="nonzero" opacity="0.3" />
																				</g>
																			</svg>
                                      <!--end::Svg Icon-->
																		</span>
                        </a>
                        <a href="#" class="btn btn-icon btn-light btn-hover-primary btn-sm">
																		<span class="svg-icon svg-icon-md svg-icon-primary">
																			<!--begin::Svg Icon | path:assets/media/svg/icons/General/Trash.svg-->
																			<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
																				<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
																					<rect x="0" y="0" width="24" height="24" />
																					<path d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z" fill="#000000" fill-rule="nonzero" />
																					<path d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z" fill="#000000" opacity="0.3" />
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
      <div class="col-xl-4" data-aos="fade-left">
        <div class="row ">
          <div class="col mb-4 mb-lg-0">
            <div class="card card-custom bg-light-warning gutter-b card-stretch" style="height: 250px">
              <!--begin::header-->
              <div class="card-header border-0">
                <h3 class="card-title font-weight-bolder ">PALMARES DU CLUB</h3>
              </div>
              <!--end::header-->
              <!--begin::Body-->
              <div class="card-body pt-0">
                <!--begin::Item-->
                <b-row >
                  <b-col  >
                    <div class="py-2">
                      <p href="#" class="text-dark-75 font-weight-bold  font-size-lg mb-1 pb-2">
                        V <span class="span-score rounded bg-success text-white p-1 font-weight-bold"><b>10</b></span>
                        N <span class="span-score rounded bg-warning text-white p-1 font-weight-bold"><b>2</b></span>
                        D <span class="span-score rounded bg-danger text-white p-1 font-weight-bold"><b>4</b></span>
                      </p>
                      <a href="#" class="text-dark-75 font-weight-bold text-hover-primary font-size-lg mb-1"></a>
                      <p class="text-muted font-weight-bold ">2021 - 2022</p>
                    </div>
                  </b-col>
                  <b-col >
                    <div class="d-flex flex-column flex-grow-1 py-2">
                      <p href="#" class="text-dark-75 font-weight-bold  font-size-lg mb-1 pb-2">
                        Champion: <span class="span-score rounded bg-danger text-white p-1 font-weight-bold"><b>X</b></span>
                      </p>
                    </div>
                  </b-col>
                </b-row>
                <b-row >
                  <b-col >
                    <div class="d-flex flex-column flex-grow-1 py-2">
                      <p href="#" class="text-dark-75 font-weight-bold  font-size-lg mb-1 pb-2">
                        V <span class="span-score rounded bg-success text-white p-1 font-weight-bold"><b>10</b></span>
                        N <span class="span-score rounded bg-warning text-white p-1 font-weight-bold"><b>2</b></span>
                        D <span class="span-score rounded bg-danger text-white p-1 font-weight-bold"><b>4</b></span>
                      </p>
                      <a href="#" class="text-dark-75 font-weight-bold text-hover-primary font-size-lg mb-1"></a>
                      <p class="text-muted font-weight-bold ">2020 - 2021</p>
                    </div>
                  </b-col>
                  <b-col  >
                    <div class="d-flex flex-column flex-grow-1 py-2">
                      <p href="#" class="text-dark-75 font-weight-bold  font-size-lg mb-1 pb-2">
                        Champion: <span class="span-score rounded bg-success text-white p-1 font-weight-bold"><b>V</b></span>
                      </p>
                    </div>
                  </b-col>
                </b-row><!--end::Item-->

                <!--end::Item-->
              </div>
              <!--end::Body-->
            </div>

          </div>

        </div>
        <div class="row pt-5">
          <div class="col mb-4 mb-lg-0">
            <a class="card card-number  pt-5 py-lg-5  rounded  align-items-center" href="#">
              <h1 class="text-center">1</h1>
              <span class="nav-text font-size-lg pb-2  text-center">Compétitions<br/>remportées</span>
            </a>
          </div>
          <div class="col mb-4 mb-lg-0">
            <a class="card card-number  pt-5 py-lg-5  rounded  align-items-center" href="#">
              <h1 class="text-center">50</h1>
              <span class="nav-text font-size-lg pb-2  text-center">Membres <br/>enregistrés </span>
            </a>
          </div>
          <!--begin::Nav Tabs-->
        </div>
        <div class="row pt-5">
          <div class="col mb-4 mb-lg-0" >
            <a href='/dashboard' class="btn  px-9 px-lg-6  pb-0 btn-red">
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
      </div>
    </div>


    <!--end::Row-->
  </div>
</template>

<script lang="ts">

import Vue from 'vue'

export default Vue.extend({
  name: "information"
})

</script>

<style scoped>
.card{
  box-shadow: -1px 1px 18px 8px rgba(0,0,0,0.14);
  -webkit-box-shadow: -1px 1px 18px 8px rgba(0,0,0,0.14);
  -moz-box-shadow: -1px 1px 18px 8px rgba(0,0,0,0.14);
}
th{
  color: #997334;
}
</style>
