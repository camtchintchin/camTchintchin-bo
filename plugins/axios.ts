import { Inject } from "@nuxt/types/app";
import axios, { AxiosResponse } from "axios";
const moment = require('moment')
export default function ({ $axios }: { $axios: any }, inject: Inject) {


  const baseUrl = document.location.origin + "/api"
  const instance = axios.create({
    timeout: 30000,
  });

  // Create a custom axios instance
  const api = $axios.create({
    headers: {
      common: {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Credentials': true,
        'X-Requested-With': 'XMLHttpRequest',
      },
    },
    baseURL: baseUrl,
  })
  api.setBaseURL(process.env.api_url + "/api")
  api.defaults.baseURL = document.location.origin + "/api"
  api.baseURL = document.location.origin + "/api"
  api.defaults.timeout = 60000;

  $axios.onRequest(
    function (config: any) {
      // Do something before request is sent
      config.baseURL = document.location.origin + "/api"
      config.baseUrl = document.location.origin + "/api"
      console.log("base",process.env.api_url)

      console.log("all==>",config.headers)
      console.log("endpoint==>",config.url)
      console.log("dto==>",config.data)
      console.log("on request interceptor")
      //console.log(config.url)
      if(!["/user/publicKey", "/signin"].includes(config.url)){

        const token = localStorage.getItem('access_token')
        console.log("token",token)
        // const refreshToken = localStorage.getItem('refresh_token')
        // const endTime = localStorage.getItem('end_refresh_time')
        //const bool = localStorage.getItem('end_refresh')
        //console.log("token==>",token)
        // @ts-ignore
        // const expiration = moment().format() > endTime
        if (token) {
          console.log("token non expiré")
          config.headers.Authorization = `Bearer ${token}`
        }else{
          console.log("no token")
        }
      }
      console.log("config",config)

      return config;

    }
  );
  $axios.onResponse(
    function (response: any) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      try {
        if (response.data) {
          const data = response.data.data;
          // console.log("uncrypting")
          // console.log(data)
          console.log("endpoint",response.request.responseURL)
           console.log("response axios 1",response)
          return response;
        } else {
          console.log("return axios",response)

          // console.log(response)
          return response;
        }
      } catch (e) {
        //  console.log("error ")
        //  console.log(e)
        return response;
      }
      // Do something with response data
    }
  );

  $axios.onError((error: any) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error

    // const msg = decrypt(error.response.data, TokenStorage.getToken() || "");
    // console.log(error)
    return Promise.reject("Une erreur est survenue.");
  });

  // Inject to context as $api
  inject('api', api)
}

