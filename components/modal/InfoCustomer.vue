<template>
  <div>
    <b-modal id="modalInfoCustomer"  class="five" hide-footer hide-header-close size="lg">
      <template #modal-title >
        <h3 class="px-3 py-2">Fiche détail Producteur
          <button @click="closeModal()">
            <i class="fa fa-close" aria-hidden="true"> </i>
          </button>
        </h3>
        <!--        <b-row>-->
        <!--          <b-col class="md-6">-->
        <!--            <h3 class="pl-3 py-2">Fiche détail Producteur</h3>-->
        <!--          </b-col>-->
        <!--          <b-col md="6">-->
        <!--            <i class="fa fa-close" aria-hidden="true"> </i>-->
        <!--          </b-col>-->

        <!--        </b-row>-->


      </template>
      <b-col md="12" class="modalBody">
        <b-row class="principalDiv infoPerso">
          <b-col md="4" >
            <p>
              Informations Personnelles
            </p>
          </b-col>
          <b-col md="8" class="justify-content-center">
            <hr>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="4">
            <img src="~/assets/images/img/img_planteur.png">
          </b-col>
          <b-col md="8">
            <b-row class="mb-2">
              <b-col md="5" class="labelInfo text-left">
                <p>Nom</p>
              </b-col>
              <b-col md="6" class="value">
                <p>Kouassi</p>
              </b-col>
            </b-row>
            <b-row class="mb-2">
              <b-col md="5" class="labelInfo text-left">
                <p>Prénom</p>
              </b-col>
              <b-col md="6" class="value">
                <p>Kouassi Basile</p>
              </b-col>
            </b-row>
            <b-row class="mb-2">
              <b-col md="5" class="labelInfo text-left">
                <p>Matricule</p>
              </b-col>
              <b-col md="6" class="value">
                <p>01480300478</p>
              </b-col>
            </b-row>
            <b-row class="mb-2">
              <b-col md="5" class="labelInfo text-left">
                <p>Localité</p>
              </b-col>
              <b-col md="6" class="value">
                <p>Atta Kouadiokro</p>
              </b-col>
            </b-row>
            <b-row class="mb-2">
              <b-col md="5" class="labelInfo text-left">
                <p>Délégation</p>
              </b-col>
              <b-col md="6" class="value">
                <p>Abengourou</p>
              </b-col>
            </b-row>
            <b-row class="mb-2">
              <b-col md="5" class="labelInfo text-left">
                <p>Contact</p>
              </b-col>
              <b-col md="6" class="value">
                <p>07 89 213 901</p>
              </b-col>
            </b-row>
          </b-col>
        </b-row>

        <!--Sur la carte-->
        <b-row class="principalDiv">
          <b-col md="4" >
            <p>
              Informations sur la Carte
            </p>
          </b-col>
          <b-col md="8" class=" justify-content-center">
            <hr>
          </b-col>
        </b-row>
        <b-row class="infoCarte">
          <b-col md="4">
            <img src="~/assets/images/img/carte_ccc.png">
          </b-col>
          <b-col md="8">
            <b-row class="mb-2">
              <b-col md="5" class="labelInfo text-left">
                <p>Statut carte</p>
              </b-col>
              <b-col md="6" class="value">
                <p>Livré</p>
              </b-col>
            </b-row>
            <b-row class="mb-2">
              <b-col md="5" class="labelInfo text-left">
                <p>Activation carte</p>
              </b-col>
              <b-col md="6" class="value">
                <p>OUI</p>
              </b-col>
            </b-row>
            <b-row class="mb-2">
              <b-col md="5" class="labelInfo text-left">
                <p>KYC</p>
              </b-col>
              <b-col md="6" class="value">
                <p>OUI</p>
              </b-col>
            </b-row>
            <b-row class="mb-2">
              <b-col md="5" class="labelInfo text-left">
                <p>Autres Informations</p>
              </b-col>
              <b-col md="6" class="value">
                <p>...</p>
              </b-col>
            </b-row>
          </b-col>
        </b-row>

        <!--Sur la carte-->
        <b-row class="principalDiv infoPerso">
          <b-col md="4" >
            <p>
              Information Parcelle
            </p>
          </b-col>
          <b-col md="8" class="justify-content-center">
            <hr>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="4">
          </b-col>
          <b-col md="8">
            <b-row class="mb-2">
              <b-col md="5" class="labelInfo text-left">
                <p>Superficie parcelle</p>
              </b-col>
              <b-col md="6" class="value">
                <p>3,3 Hectares</p>
              </b-col>
            </b-row>
            <b-row class="mb-2">
              <b-col md="5" class="labelInfo text-left">
                <p>Potentiel de vente</p>
              </b-col>
              <b-col md="6" class="value">
                <p>20 Tonnes</p>
              </b-col>
            </b-row>

            <b-row class="mb-2">
              <b-col md="5" class="labelInfo text-left">
                <p>Potentiel déjà vendu</p>
              </b-col>
              <b-col md="6" class="value">
                <p>13 Tonnes</p>
              </b-col>
            </b-row>
            <b-row class="mb-2">
              <b-col md="5" class="labelInfo text-left">
                <p>Potentiel restant</p>
              </b-col>
              <b-col md="6" class="value">
                <p>7 Tonnes</p>
              </b-col>
            </b-row>
          </b-col>
        </b-row>

      </b-col>


    </b-modal>

  </div>
</template>

<script>

export default{
  mounted() {

  },
  // props:{
  //   nom:  {
  //     type: String,
  //     required:true
  //   }
  // },
  data(){
    return{
      // nom : this.nom
      // nom :"test"
    }
  },
  methods:{
    closeModal(){
      return this.$bvModal.hide('modalInfoCustomer');
    }
  }
}
</script>

<style  lang="scss">
.modal-backdrop {
  display: none;
}
.close {
  float: right;
  font-size: 100px;
  font-weight: 700;
  line-height: 1;
  color: #000;
  display: none;
}
</style>
