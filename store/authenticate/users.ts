import { getterTree, mutationTree, actionTree } from 'typed-vuex'
import * as CryptoJS from "crypto-js";
import RSA from "~/assets/rsa/rsa/RSA";

export const state = () => ({
  token:'',
})

export const getters = getterTree(state, {})

export const mutations = mutationTree(state, {
  SET_TOKEN(state, newValue: {access_token: string}) {
    state.token = newValue.access_token
  },
})

export const actions = actionTree(
  { state, getters, mutations },
  {
    async generateTokenHandler() {

      const data = {
        username: `${process.env.authenticate_username}`,
        password: `${process.env.authenticate_password}`,
        rememberMe: true,
      }
      await this.$axios
        .$post('/authenticate', data)
        .then((response) => {
          ////console.log('generateTokenHandler : ')
          ////console.log(response)
          return this.$axios.setToken(response.id_token, 'Bearer')
        })
        .catch((error) => {
          //console.log(error)
        })
    },
    /*** getAccesskey({ commit },formSign) {
      console.log("getAccesskey")
      console.log(formSign)
      try {
        return new Promise((resolve, reject) => {
           this.$axios
            .$get('/user/publicKey')
            .then(async (response) => {
              const RSA = require("~/assets/rsa/rsa/RSA");
              const publicKey = response.object
              // this.publicKey.exponent = response.data.object.exponent
              console.log("publicKey",publicKey)
              try {
                // eslint-disable-next-line import/namespace
                const key = CryptoJS.lib.WordArray.random(16).toString();
                console.log("CryptoJS", key)
                const tmp = {
                  key,
                  "data": formSign
                }
                console.log("tmp", tmp)
                // TokenStorage.setToken(key);
                const str = JSON.stringify(tmp)
                console.log("str", str)
                let rsaData = RSA.encrypt(str, publicKey.modulus, publicKey.exponent);
                console.log("before rsaData", rsaData)
                rsaData = RSA.hex2Base64(rsaData);
                console.log("after rsaData", rsaData)

                const data = {
                  "data": rsaData
                }
                console.log("key", key)
                console.log("datacrypt", data)
                await this.$axios.post(`/users/signin`, rsaData).then(response => {
                  const accessToken = response.data.access_token
                  const refreshToken = response.data.refresh_token
                  resolve({accessToken,refreshToken})
                });
              } catch (e: any) {
                console.log(e)
              }
            })
        })
      } catch (e) {
        console.log(e)
      }
    }, **/
    getPublickey(){
      try {
        return new Promise((resolve, reject) => {
          this.$axios
            .$get('/user/publicKey')
            .then( (response) => {
               // console.log("response publick")
               // console.log(response)
              if(response.object){
                const publicKey = response.object
                resolve({publicKey})
              }
            })
        })
      } catch (e) {
        console.log(e)
      }
    },

    async signinHandler({ commit }, publicKey): Promise<void> {
      // @ts-ignore
      // await this.app.$accessor.authenticate.users.generateTokenHandler()
      await this.$axios
        .$post('/users/signin', publicKey)
        .then((response) => {
          commit('SET_TOKEN', response)
        })
        .catch((error) => {
          console.log(error)
        })
    },
  }
)
