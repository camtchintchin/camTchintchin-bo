import { getterTree,getAccessorType, mutationTree, actionTree } from 'typed-vuex'

import moment from "moment";
import * as users from './authenticate/users'

export const state= ()=>{
  return{
    token:'',
    user: {} as any,
    auth: {} as any,
    loggedIn: false,
    listCLub:{},
    listCountries:{}
  }
}

type RootState = ReturnType<typeof state>

export const getters = getterTree(state, {
  getListCLub: (state) => state.listCLub,
  getListCountries: (state) => state.listCountries,

// @ts-ignore
  isAuthenticated(state) {
    return state.loggedIn
  },
  // @ts-ignore
  loggedInUser:(state)=> {
    return state.user
  },
})

export const mutations = mutationTree(state, {
  SET_TOKEN(state, newValue: {access_token: string}) {
    state.token = newValue.access_token
  },
  LOGIN_SUCCESS(state, user) {
    console.log('LOGIN_SUCCESS',user)
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
  SET_LIST_CLUB(state,value) {
    state.listCLub = value;
    // state.user = null;
  },
  SET_LIST_COUNTRIES(state,value) {
    state.listCountries = value;
    // state.user = null;
  },

  LOGOUT(state) {
    state.loggedIn = false;
    state.user = null;
  },
})

export const actions = actionTree(
  { state, getters, mutations },
  {

    generateTokenHandler({},data) {

      return new Promise((resolve, reject) => {
        this.$axios
          .$post('/signin', data)
          .then((response) => {
            console.log("response data",response.data)
            if (response.data.code == '99'){
              console.log("response in")

              resolve({ response })
            }else {
              localStorage.setItem('access_token', response.data.data.access_token)
              resolve({ response })
            }

            ////console.log('generateTokenHandler : ')
            // return {response}
          })
          .catch((error) => {
            //console.log(error)
          })
      })
      // const data = {
      //   username: `${process.env.authenticate_username}`,
      //   password: `${process.env.authenticate_password}`,
      // }


      // console.log("token",this.$axios.getToken())

    },

    async login({commit}){
      await this.$axios
        .$get('/v1/users')
        .then((response) => {
          ////console.log('generateTokenHandler : ')
          console.log(response)
        })
        .catch((error) => {
          //console.log(error)
        })

    },
    async getListCLubHandler({commit}){
      await this.$axios.$get("/v1/club",).then((response) => {
        console.log("type",response)

        console.log(response.data)
        if (response.status){
          // this.items = response.data
          console.log("response succs",response)
          commit("SET_LIST_CLUB",response)
          // return response.data
        }
      })
        .catch((error) => {
          //console.log(error)
        })
    },

    async getcountries({commit}){
      await this.$axios.$get("/v1/countries").then((response) => {
        console.log("type",response)

        console.log(response.data)
        if (response.status){
          // this.items = response.data
          console.log("response succs",response)
          commit("SET_LIST_COUNTRIES",response)
          // return response.data
        }
      })
        .catch((error) => {
          //console.log(error)
        })
    },
    logout({ commit }) {
      // console.log('/users/logout')
      //  logout();
      localStorage.clear()
      commit('LOGOUT');
      // this.$axios.post('/users/logout').then(()=>{
      //   commit('LOGOUT');
      // })

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
