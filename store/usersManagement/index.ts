import { getterTree, mutationTree, actionTree } from 'typed-vuex'
import _ from "lodash";
import {getAllResourceTypesResponse} from "~/types/gestion-users/getAllResourceTypesResponse";

export const state = () => ({
  users: [],
  userProfiles: [],
  userResourceTypes: [] as getAllResourceTypesResponse,
  userResources: [],
  userTypes: [],
  user: {},
  userProfil: {},
  userInfo: {},
  userRoles: [],
  userResource: {},
  userRole: {},
  supervisorInfo: {},
  responsePasswordReset: {},
  virtualAccountBalance: '',
})

export const getters = getterTree(state, {
  getUsersList: (state) => (state.users.length ? state.users : []),
  getKycRolesCashier: (state) => (state.userRoles.length ? _.find(state.userRoles, ['label', 'cashier']) : []),
  getKycRolesKyc: (state) => (state.userRoles.length ? _.find(state.userRoles, ['label', 'kyc']) : []),
  getUserProfilesList: (state) => state.userProfiles.length ? state.userProfiles : [],
  getUserResourceTypesList: (state) =>
    state.userResourceTypes.length ? state.userResourceTypes : [],
  getUserResourcesList: (state) =>
    state.userResources.length ? state.userResources : [],
  getUserTypesList: (state) => (state.userTypes.length ? state.userTypes : []),
  getSingleUser: (state) => state.user,
  getSingleUserProfil: (state) => state.userProfil,
  getUserInfo: (state) => state.userInfo,
  getUserRolesList: (state) => (state.userRoles.length ? state.userRoles : []),
  getSingleUserResource: (state) => state.userResource,
  getSingleUserRole: (state) => state.userRole,
  getSupervisor: (state) => state.supervisorInfo,
  getVirtualAccountBalance: (state) => state.virtualAccountBalance,
})

export const mutations = mutationTree(state, {
  SET_USERS_LIST(state, users: []) {
    state.users = users
  },
  SET_USER_PROFILES_LIST(state, userProfiles: []) {
    state.userProfiles = userProfiles
  },
  SET_USER_RESOURCE_TYPES(state, userResourceTypes:getAllResourceTypesResponse  ) {
    state.userResourceTypes = userResourceTypes
  },
  SET_USER_RESOURCES(state, userResources: []) {
    state.userResources = userResources
  },
  SET_USER_TYPES(state, userTypes: []) {
    state.userTypes = userTypes
  },
  SET_USER(state, user: {}) {
    state.user = user
  },
  SET_USER_RESOURCE(state, userResource: {}) {
    state.userResource = userResource
  },
  SET_USER_PROFIL(state, userProfil: {}) {
    state.userProfil = userProfil
  },
  SET_USER_INFO(state, userInfo: {}) {
    state.userInfo = userInfo
  },
  SET_USER_ROLES(state, userRoles: []) {
    state.userRoles = userRoles
  },
  SET_USER_ROLE(state, userRole: {}) {
    state.userRole = userRole
  },
  DELETE_USER(state, id) {
    // @ts-ignore
    var index = state.users.findIndex((user) => user.id == id)
    state.users.splice(index, 1)
  },
  SET_SUPERVISOR_INFO(state, supervisorInfo: {}) {
    state.supervisorInfo = supervisorInfo
  },
  SET_VIRTUAL_ACCOUNT_BALANCE(state, virtualAccountBalance: string) {
    //console.log('SET_VIRTUAL_ACCOUNT_BALANCE')
    //console.log(virtualAccountBalance)
    state.virtualAccountBalance = virtualAccountBalance
  },
  SET_REQUEST_PASSWORD_RESET(state, responsePasswordReset: {}) {
    state.responsePasswordReset = responsePasswordReset
  },
})

export const actions = actionTree(
  { state, getters, mutations },
  {
    async getUsersListHandler({ commit }): Promise<void> {
      const dto = {
        "page": 0,
        "size": 100
      }
      //console.log("postPartnerHandler");
      // @ts-ignore
      // await this.app.$accessor.authenticate.users.generateTokenHandler()
      //await this.$axios.$get('/users?queryParams=0').then(response => {
      await this.$axios
        .$post('/panelys-users/getallusers',dto)
        .then((response) => {
          //console.log('getUsersListHandler')
          //console.log(response)
          commit('SET_USERS_LIST', response.object)
        })
        .catch((error) => {
          //console.log(error)
        })
    },
    async getUserProfilesHandler({ commit }): Promise<void> {
      const dto = {
        "page": 0,
        "size": 100
      }
      //console.log("postPartnerHandler");
      // @ts-ignore
      // await this.app.$accessor.authenticate.users.generateTokenHandler()
      //await this.$axios.$get('/users?queryParams=0').then(response => {
      await this.$axios
        .$post('/user-profiles/getallprofiles',dto)
        //.$get('/user-profiles/getallprofiles')
        .then((response) => {
          //console.log('getUserProfilesHandler')
          //console.log(response)
          commit('SET_USER_PROFILES_LIST', response.object)
        })
        .catch((error) => {
          //console.log(error)
        })
    },
    async getUserResourceTypesHandler({ commit }): Promise<void> {
      await this.$axios
        .$get<getAllResourceTypesResponse>('/resources-types/getallresourcetypes')
        .then((response) => {
          //console.log('getUserResourceTypesHandler')
          //console.log(response)
          if(response){
            commit('SET_USER_RESOURCE_TYPES', response)
          }
        })
        .catch((error) => {
          //console.log(error)
        })
    },
    async getUserResourcesHandler({ commit }): Promise<void> {
      //console.log("postPartnerHandler");
      // @ts-ignore
      // await this.app.$accessor.authenticate.users.generateTokenHandler()
      //await this.$axios.$get('/users?queryParams=0').then(response => {
      await this.$axios
        .$get('/resources/getallresources')
        .then((response) => {
          //console.log('getUserResourcesHandler')
          //console.log(response)
          commit('SET_USER_RESOURCES', response)
        })
        .catch((error) => {
          //console.log(error)
        })
    },
    async getUserTypesHandler({ commit }): Promise<void> {
      //console.log("postPartnerHandler");
      // @ts-ignore
      // await this.app.$accessor.authenticate.users.generateTokenHandler()
      //await this.$axios.$get('/users?queryParams=0').then(response => {
      await this.$axios
        .$get('/user-types/getallusertypes')
        .then((response) => {
          //console.log('getUserTypesHandler')
          //console.log(response)
          commit('SET_USER_TYPES', response)
        })
        .catch((error) => {
          //console.log(error)
        })
    },
    async getSingleUserHandler({ commit }, id): Promise<void> {
      //await dispatch('auth/usersManagement/generateTokenHandler');
      //
      //@ts-ignore
      // await this.app.$accessor.authenticate.users.generateTokenHandler()
      await this.$axios
        .$get(`/panelys-users/get/${id}`)
        .then((response) => {
          //console.log('getSingleUserHandler')
          //console.log(response)
          if(response.object) {
            commit('SET_USER', response.object)
          }
        })
        .catch((error) => {
          //console.log(error)
        })
    },
    async getSingleUserProfilHandler({ commit }, id): Promise<void> {
      //await dispatch('auth/usersManagement/generateTokenHandler');
      //
      //@ts-ignore
      // await this.app.$accessor.authenticate.users.generateTokenHandler()
      await this.$axios
        .$get(`/user-profiles/get/${id}`)
        .then((response) => {
          //console.log('getSingleUserProfilHandler')
          //console.log(response)
          commit('SET_USER_PROFIL', response)
        })
        .catch((error) => {
          //console.log(error)
        })
    },
    async getUserInfoHandler({ commit }, id): Promise<void> {
      //await dispatch('auth/usersManagement/generateTokenHandler');
      //
      //@ts-ignore
      // await this.app.$accessor.authenticate.users.generateTokenHandler()
      await this.$axios
        .$get(`/panelys-users/get/${id}`)
        .then((response) => {
          //console.log('getUserInfoHandler')
          //console.log(response)
          commit('SET_USER_INFO', response)
        })
        .catch((error) => {
          //console.log(error)
        })
    },
    async getUserRolesHandler({ commit }): Promise<void> {
      //console.log("postPartnerHandler");
      // @ts-ignore
      // await this.app.$accessor.authenticate.users.generateTokenHandler()
      //await this.$axios.$get('/users?queryParams=0').then(response => {
      await this.$axios
        .$get('/roles/getallroles')
        .then((response) => {
          //console.log('getUserRolesHandler')
          //console.log(response)
          commit('SET_USER_ROLES', response)
          return response
        })
        .catch((error) => {
          //console.log(error)
        })
    },
    async getSingleUserResourceHandler({ commit }, id): Promise<void> {
      //await dispatch('auth/usersManagement/generateTokenHandler');
      //
      //@ts-ignore
      // await this.app.$accessor.authenticate.users.generateTokenHandler()
      await this.$axios
        .$get(`/resources/get/${id}`)
        .then((response) => {
          //console.log('getSingleUserResourceHandler')
          //console.log(response)
          commit('SET_USER_RESOURCE', response)
        })
        .catch((error) => {
          //console.log(error)
        })
    },
    async getSingleUserRoleHandler({ commit }, id): Promise<void> {
      //await dispatch('auth/usersManagement/generateTokenHandler');
      //
      //@ts-ignore
      // await this.app.$accessor.authenticate.users.generateTokenHandler()
      await this.$axios
        .$get(`/roles/get/${id}`)
        .then((response) => {
          //console.log('getSingleUserRoleHandler')
          //console.log(response)
          commit('SET_USER_ROLE', response)
        })
        .catch((error) => {
          //console.log(error)
        })
    },

    async getSupervisorHandler({ commit }, id): Promise<void> {
      //await dispatch('auth/usersManagement/generateTokenHandler');
      //
      //@ts-ignore
      // await this.app.$accessor.authenticate.users.generateTokenHandler()
      await this.$axios
        .$get(`/pos-employees/get/${id}`)
        .then((response) => {
          if (response.object.manager) {
            //console.log('getSupervisorHandler')
            //console.log(response)
            commit('SET_SUPERVISOR_INFO', response.object)
          }
        })
        .catch((error) => {
          //console.log(error)
        })
    },


    async requestSupervisorPasswordResetHandler(
      { commit },
      postData
    ): Promise<void> {
      //await dispatch('auth/usersManagement/generateTokenHandler');
      //
      //@ts-ignore
      // await this.app.$accessor.authenticate.users.generateTokenHandler()
      await this.$axios
        .$post(`/api/pos/requestSupervisorPasswordReset`, postData)
        .then((response) => {
          if (response.status) {
            //console.log('getSupervisorHandler')
            //console.log(response)
            commit('SET_SUPERVISOR_INFO', response.object)
          }
        })
        .catch((error) => {
          //console.log(error)
        })
    },
  }
)
