import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import axios, { AxiosResponse } from "axios";
// import cookie from "js-cookie";
import { TokenStorage } from "../helpers/TokenStorage";
import { decrypt, encrypt } from "../helpers/cryptHelper";
// const session = require("express-session")
const storage = require('node-sessionstorage')
const moment = require('moment')


// import {TokenStorageV2} from "../helpers/TokenStorageV2";
// Create app
const app = express()

// Install middleware
app.use(cookieParser())

app.use(bodyParser.json())
const key = TokenStorage.getToken() || '';
const instance = axios.create({
  timeout: 30000,
});

let baseUrl = process.env.backend_api_url

instance.interceptors.response.use((response) => {
  return response
}, async function (error) {
  const originalRequest = error.config;
  console.log('error ', [error.config.url, error.response.status, !error.config.url.includes("refreshToken")]);
  if (!error.config.url.includes("refreshToken") &&
    !error.config.url.includes("publicKey") &&
    !error.config.url.includes("signin") &&
    error.response.status === 401 &&
    !originalRequest._retry) {
    try {
      originalRequest._retry = true;
      const refreshToken = storage.getItem('refreshToken')
      const body = {
        refreshToken
      }
      console.log("refreshToken : " + refreshToken)
      // console.log(req.headers)

      await instance.post(baseUrl + '/users/refreshToken', body).then((response) => {
        console.log("/user/refreshToken")
        console.log("response",response)
        storage.setItem('refreshToken', response.data.refresh_token)
        originalRequest.headers['Authorization'] = `Bearer ${response.data.access_token}`;
        instance.defaults.headers.common['Authorization'] = `Bearer ${response.data.accessToken}`;
      }).catch((err) => {
        console.log(err);
        // refreshToken = null;
      });
      return instance(originalRequest);
    } catch (e) {
      console.log("try catch " + e)
    }
  }
})

// [POST] /logout
app.post('/authenticate', async (req, res) => {

  // console.log('authenticate')
  const data = req.body
  // console.log(decrypt(data.aesData, key))
  req.body = decrypt(data.aesData, key)
  let baseUrl = process.env.backend_api_url
  // console.log(baseUrl)
  try {
    if (req.headers.type && req.headers.type === "WORKFLOW") {
      baseUrl = process.env.backend_camunda_api_url
    }
    // console.log("baseUrl ")
    // console.log(baseUrl+ req.url)
    let response: AxiosResponse<any> = {} as AxiosResponse<any>

    if (req.headers.authorization) {
      response = await instance.post(baseUrl + req.url, JSON.parse(req.body), {
        headers: {
          "Authorization": req.headers.authorization as string
        }
      })
    } else {
      response = await instance.post(baseUrl + req.url, JSON.parse(req.body))
    }
    // console.log("authenticate response")
    // console.log(response.data)
    res.json({ data: encrypt(response.data, key) })
  } catch (error: any) {
    // console.log("error")
    const response = JSON.stringify((error)?.response?.data.detail)
    // console.log((error)?.response)
    // console.log(`Error: ` + response);
    res.status(400)
    res.json({ data: encrypt(response, key), status: false })
  }

})
app.get('/user/publicKey', async (req, res) => {
  // console.log("/user/publicKey")
  // console.log(req.headers.authorization)
  // console.log('GET')
  // console.log("request")
  // console.log(req.url)
  // console.log(req.url.includes('/user/publicKey'))
  // console.log(req.headers.authorization)

  try {
    // console.log("url")
    // console.log(baseUrl + '/api' + req.url)
    let response: AxiosResponse<any> = {} as AxiosResponse<any>
    response = await instance.get(process.env.backend_api_url + req.url)
    // console.log("response")
    console.log([req.url, response.data])
    storage.removeItem('refreshToken')
    res.json({ data: encrypt(response.data, key) })
  } catch (error: any) {
    const response = JSON.stringify((error)?.response?.data.detail)
    console.log(`Error: ` + error);
    res.status(400)
    res.json({ data: encrypt(response, key), status: false })
  }
})
app.post('/users/signin', async (req, res) => {
  console.log("POST" + req.url)
  const data = req.body
  //console.log("data : "  + JSON.stringify(data))
  req.body = decrypt(data.aesData, key)
  // console.log("request")
  // console.log("req.body",req.body)
  try {

    // console.log("url")
    // console.log(baseUrl + req.url)
    // console.log("request")
    let body = {}
    if (req.body) {
      body = JSON.parse(req.body)
    }

    // console.log(req.headers)
    let response: AxiosResponse<any> = {} as AxiosResponse<any>
    if (req.headers.authorization) {
      console.log(req.headers)

      response = await instance.post(process.env.backend_api_url + req.url, body, {
        headers: {
          "Authorization": req.headers.authorization as string
        }
      })
      console.log([req.url, req.headers.authorization,body,response.data])
    } else {
      response = await instance.post(process.env.backend_api_url + req.url, body)
      console.log([req.url,body,response.data])
    }
    // console.log('/users/signin : ' + JSON.stringify(response.data))
    const refreshToken = response.data.refresh_token
    storage.setItem('refreshToken', refreshToken)
    //console.log('item set refreshToken:', storage.getItem('refreshToken'))
    console.log([req.url, response.data])
    res.json({ data: encrypt(response.data, key), status: true })
  } catch (error: any) {
    console.log("error")
    // console.log("timeout")
    console.log(error)
    // console.log((error)?.response)
    const response = JSON.stringify((error)?.response?.data.detail)
    // console.log(`Error: ` + response);
    res.status(400)
    res.json({ data: encrypt(response, key), status: false })
  }

  // res.json(response.data)
})
app.post('/users/refreshToken', async (req, res) => {
  console.log("/users/refreshToken")
  const data = req.body
  req.body = decrypt(data.aesData, key)
  // console.log("request")
  // console.log("req.body",req.body)
  try {
    const refreshToken = storage.getItem('refreshToken')
    console.log("refreshToken : " + refreshToken)
    const body = {
      refreshToken
    }
    // console.log(req.headers)
    let response: AxiosResponse<any> = {} as AxiosResponse<any>

    response = await instance.post(process.env.backend_api_url + req.url, body)
    console.log([req.url, req.headers.authorization,body,response.data])
    res.json({ data: encrypt(response.data, key), status: true })
  } catch (error: any) {
    console.log("error")
    // console.log("timeout")
    console.log(error)
    // console.log((error)?.response)
    const response = JSON.stringify((error)?.response?.data.detail)
    // console.log(`Error: ` + response);
    res.status(400)
    res.json({ data: encrypt(response, key), status: false })
  }

  // res.json(response.data)
})
app.post('/users/logout', (req, res) => {
  console.log("/users/logout")
  storage.removeItem("refreshToken")
  res.send("ok")
})

app.post('*', async (req, res) => {
  // console.log("POST")
  const data = req.body
  req.body = decrypt(data.aesData, key)
  // console.log("request")
  // console.log([req.url,req.body])
  let token = null
  try {
    if (req.headers.type && req.headers.type === "WORKFLOW") {
      baseUrl = process.env.backend_camunda_api_url
      token = req.headers.accesstoken
      req.headers.Authorization = 'Bearer ' + token
      // console.log("pathpathpath", req.path)
      if (req.path === '/panelys-workflow/initiateVirtualAccountCreation') {
        // const AccessToken = TokenStorageV2.getToken("AccessToken")
        if (token) {
          // console.log(token)
          // @ts-ignore
          // req.defaults.headers.commons.AccessToken = token
        }
      }

    } else {
      baseUrl = process.env.backend_api_url
    }
    // console.log("url")
    let body = {}
    if (req.body) {
      body = JSON.parse(req.body)
    }
    let reqHeaders = {
      "Authorization": req.headers.authorization as string
    }

    if (token) {
      reqHeaders = {
        "AccessToken": token,
        ...reqHeaders
      } as any
    }


    //  console.log("body",body)
    // console.log("headers", reqHeaders)
    let response: AxiosResponse<any> = {} as AxiosResponse<any>
    if (req.headers.authorization) {

      response = await instance.post(baseUrl + req.url, body, {
        headers: reqHeaders
      })
      console.log([req.url,body,response.data,reqHeaders])
    } else {
      response = await instance.post(baseUrl + req.url, body)
      console.log([req.url,body,response.data])
    }

    // console.log({data: response.data})
    // console.log({data: encrypt(response.data, key)})
    // console.log("response")
    // console.log([req.url,response.data])
    res.json({ data: encrypt(response.data, key), status: true })
  } catch (error: any) {
    console.log("error")
    // console.log("timeout")
    console.log(error)
    // console.log((error)?.response)
    const response = JSON.stringify((error)?.response?.data.detail)
    // console.log(`Error: ` + response);
    res.status(400)
    res.json({ data: encrypt(response, key), status: false })
  }

  // res.json(response.data)
})
app.put('*', async (req, res) => {
  // console.log("POST")
  const data = req.body
  // console.log("data")
  // console.log(data)
  req.body = decrypt(data.aesData, key)
  // console.log("request")
  // console.log([req.url,req.body])
  let baseUrl = process.env.backend_api_url
  try {
    if (req.headers.type && req.headers.type === "WORKFLOW") {
      baseUrl = process.env.backend_camunda_api_url
    }
    // console.log("url")
    // console.log(baseUrl + req.url)
    // console.log("request")
    let body = {}
    if (req.body) {
      body = JSON.parse(req.body)
    }
    // console.log(body)
    // console.log(req.headers)
    let response: AxiosResponse<any> = {} as AxiosResponse<any>
    if (req.headers.authorization) {
      response = await axios.put(baseUrl + req.url, body, {
        headers: {
          "Authorization": req.headers.authorization as string
        }
      })
      console.log([req.url,body,response.data,req.headers.authorization])
    } else {
      response = await instance.put(baseUrl + req.url, body)
      console.log([req.url,body,response.data])
    }

    // console.log({data: response.data})
    // console.log({data: encrypt(response.data, key)})
    // console.log("response")
    // console.log([req.url,response.data])
    res.json({ data: encrypt(response.data, key), status: true })
  } catch (error: any) {
    // console.log("error")
    // console.log((error)?.response)
    const response = JSON.stringify((error)?.response?.data.detail)
    // console.log(`Error: ` + response);
    res.status(400)
    res.json({ data: encrypt(response, key), status: false })
  }

  // res.json(response.data)
})
app.get('*', async (req, res) => {
  // console.log("request get")
  try {
    if (req.headers.type && req.headers.type === "WORKFLOW") {
      baseUrl = process.env.backend_camunda_api_url
    } else {
      baseUrl = process.env.backend_api_url
    }

    let response: AxiosResponse<any> = {} as AxiosResponse<any>
    if (req.headers.authorization) {
      response = await instance.get(baseUrl + req.url, {
        headers: {
          "Authorization": req.headers.authorization as string
        }
      })
      console.log([req.url,response.data,req.headers.authorization])
    } else {
      // console.log("else")
      response = await instance.get(baseUrl + req.url)
      console.log([req.url,response.data])
    }
    // console.log("get " + JSON.stringify(response.data))

    res.json({ data: encrypt(response.data, key) })
  } catch (error: any) {
    console.log('erreur get', error)
    const response = JSON.stringify((error)?.response?.data.detail)
    // console.log(`Error in get: ` + response);

    res.json({ data: encrypt(response, key), status: false })
  }
})

// Error handler
app.use((req, res) => {
  res.status(404).send(req.body + '')
})


// -- export app --
export default {
  path: '/api',
  handler: app
}
