import { Inject } from "@nuxt/types/app";
import { decrypt, encrypt } from "~/helpers/cryptHelper";
import { TokenStorage } from "~/helpers/TokenStorage";
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
  api.setBaseURL(document.location.origin + "/api")
  api.defaults.baseURL = document.location.origin + "/api"
  api.baseURL = document.location.origin + "/api"
  api.defaults.timeout = 60000;

  $axios.onRequest(
    function (config: any) {
      // Do something before request is sent
      config.baseURL = document.location.origin + "/api"
      config.baseUrl = document.location.origin + "/api"
      // console.log("endpoint==>",config.url)
      // console.log("dto==>",config.data)
      console.log("on request interceptor")
      //console.log(config.url)
      if(!["/user/publicKey", "/users/signin"].includes(config.url)){

        const token = localStorage.getItem('access_token')
        const refreshToken = localStorage.getItem('refresh_token')
        const endTime = localStorage.getItem('end_refresh_time')
        //const bool = localStorage.getItem('end_refresh')
        //console.log("token==>",token)
        // @ts-ignore
        const expiration = moment().format() > endTime
        if (token && expiration == false) {
          console.log("token non expiré")
          config.headers.Authorization = `Bearer ${token}`
        }else if(token && expiration == true){
          console.log("token expiré")
          instance.post(`${process.env.backend_api_url}/users/refreshToken`,{
            refreshToken: refreshToken
          }).then(function(response){
            //console.log("retour expire token", response);
            localStorage.setItem("access_token",response.data.access_token)
            const expires_token = response.data.expires_in - 300
            //const newEnd = moment().add(response.data.expires_in,'seconds').format()
            const newEnd = moment().add(expires_token,'seconds').format()
            localStorage.setItem("end_refresh_time", newEnd)
            localStorage.setItem('refresh_token',response.data.refresh_token)
            config.headers.Authorization = `Bearer ${token}`
          }).catch(function(error){
            console.log("retour error expire token", error);
          })
        }
      }
      if (config.method === "post" || config.method === "put" || config.method === "patch") {
        const privateKey = TokenStorage.getToken() || "";
        // console.log(config.data)
        // @ts-ignore
        config.data = { aesData: encrypt(config.data, privateKey) };
        // console.log(config.data)
      }
      return config;

    }
  );
  $axios.onResponse(
    function (response: any) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      try {

        const privateKey = TokenStorage.getToken() || "";
        if (response.data) {
          const data = response.data.data;
          // console.log("uncrypting")
          // console.log(data)
          if (data) {
            response.data = decrypt(data, privateKey);

            // console.log("on response interceptor")
            // console.log(response)
            // console.log("data before json parse")
            // console.log(response.data)
            response.data = JSON.parse(response.data);

          }
          //  console.log("return",response)

          return response;
        } else {
          // console.log("return",response)

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

