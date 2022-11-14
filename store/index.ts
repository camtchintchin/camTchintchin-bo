import { getAccessorType, mutationTree, actionTree } from 'typed-vuex'
import CryptoJS from "crypto-js";

import * as users from './authenticate/users'
import {TokenStorageV2} from "~/helpers/TokenStorageV2"

import moment from "moment";


export const state = () => ({
  showOverlay: false,
  user: {} as any,
  auth: {} as any,
  loggedIn: false,
})

type RootState = ReturnType<typeof state>

export const getters = {
  // @ts-ignore
  isAuthenticated(state) {
    return state.loggedIn
  },
  // @ts-ignore
  loggedInUser:(state)=> {
    return state.user
  },
}

export const mutations = mutationTree(state, {
  LOGIN_SUCCESS(state, user) {
    console.log('LOGIN_SUCCESS')
    state.loggedIn = true;
    state.user = user;
    state.auth.user = user;
    // state.auth.loggedIn = user;
  },
  SET_IS_AUTHENTICATE(state,value){
    state.loggedIn = value;
  },
  LOGIN_FAILURE(state) {
    // state.loggedIn = false;
    // state.user = null;
  },
  TOGGLE_LOADING(state, showOverlay) {
    state.showOverlay = showOverlay
  },
  LOGOUT(state) {
    state.loggedIn = false;
    state.user = null;
  },
})

export const actions = actionTree(
  { state, getters, mutations },
  {
    nuxtServerInit({ commit }, { req, $gates }) {
      console.log("nuxtServerInit");
      console.log(req);

      /**  const user = req.session.user
       if (user) {
        $gates.setRoles(user.userRoles)
      }*/
    },
    getPublickey() {
      try {
        return new Promise((resolve, reject) => {
          this.$axios
            .$get('/user/publicKey')
            .then((response) => {
              //  console.log("response")
              //  console.log(response)
              if (response.object) {
                const publicKey = response.object
                resolve({ publicKey })
              }
            })
        })
      } catch (e) {
        console.log(e)
      }
    },
    login({ commit }, user) {
      const RSA = require("~/assets/rsa/rsa/RSA");
      // eslint-disable-next-line import/namespace
      const key = CryptoJS.lib.WordArray.random(16).toString();
      // console.log("CryptoJS", key)
      const formSign = { "username": user.username, "password": user.password, "userType": user.userType }
      //  console.log("dto to pos",formSign)
      const publicKey = user.publicKey
      const tmp = {
        key,
        "data": formSign
      }
      console.log("tmp", tmp)
      // TokenStorage.setToken(key);
      const str = JSON.stringify(tmp)
      // console.log("str", str)
      let rsaData = RSA.encrypt(str, publicKey.modulus, publicKey.exponent);
      // console.log("before rsaData", rsaData)
      rsaData = RSA.hex2Base64(rsaData);
      // console.log("after rsaData", rsaData)

      const data = {
        "data": rsaData
      }
      return new Promise((resolve, reject) => {
        this.$axios
          .$post('/users/signin', data)
          .then((response) => {
            console.log("response store")
            console.log(response)
            localStorage.setItem('refresh_token', response.refresh_token)
            localStorage.setItem('access_token', response.access_token)
            const expires_in = response.expires_in
            if (response.access_token) {
              const expires_token = expires_in - 300
              //const expires_token = 180
              const endTime = moment().add(expires_token,'seconds').format()

              //localStorage.setItem("end_refresh", castingInString(bool))
              localStorage.setItem("end_refresh_time", endTime)
              console.log("test1", expires_token);
              console.log("test2", endTime);
              //console.log("test3", bool);
              //localStorage.setItem('expire_in', response.expires_in)
              if(formSign.userType === 'PanelysUser')  {
                TokenStorageV2.setToken("AccessToken",response.access_token)
              }
              this.$axios.defaults.headers.common = { Authorization: `Bearer ${response.access_token}` }
              const id = response.user_id
              resolve({ id })
            }else {
              resolve({ response })
            }
            console.log("ok ok")
            commit("LOGIN_SUCCESS")
          })
      })
    },
    logout({ commit }) {
      // console.log('/users/logout')
      //  logout();
      localStorage.clear()
      this.$axios.post('/users/logout').then(()=>{
        commit('LOGOUT');
      })

    },
  }
)

export const accessorType = getAccessorType({
  actions,
  getters,
  mutations,
  state,
  modules: {
    users: users,
  },
})

// export const app = () => {
//
//   // Only _actual_ login/outs (including resets) will be watched here.
//   // @ts-ignore
//   app.$auth.$storage.watchState('loggedIn', (isAuthenticated: any) => {
//     if (isAuthenticated) {
//       // Follow @nuxtjs/auth workflow.
//       // @ts-ignore
//       app.$auth.redirect('home')
//     }
//   })
// }
