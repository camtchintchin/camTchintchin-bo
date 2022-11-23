import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import axios, { AxiosResponse } from "axios";
// import cookie from "js-cookie";

// const session = require("express-session")
const storage = require('node-sessionstorage')
const moment = require('moment')

console.log("api express")
// import {TokenStorageV2} from "../helpers/TokenStorageV2";
// Create app
const app = express()

// Install middleware
app.use(cookieParser())

app.use(bodyParser.json())
const instance = axios.create({
  timeout: 30000,
});

let baseUrl = process.env.api_url +"/api"

instance.interceptors.response.use((response) => {
  return response
}, async function (error) {
  const originalRequest = error.config;
  console.log('error ', [error.config.url, error.response.status, !error.config.url.includes("refreshToken")]);

})

// [POST] /logout
app.post('/signin', async (req, res) => {
  let baseUrl = process.env.api_url +"/api"
  console.log("POST api" + req.url)
  console.log("Base api" + baseUrl)
  const data = req.body
  //console.log("data : "  + JSON.stringify(data))
  // console.log("request")
  // console.log("req.body",req.body)
  try {

    console.log("try  ")
    // console.log(baseUrl + req.url)
    // console.log("request")
    const body = req.body
    // if (req.body) {
    //   body = JSON.parse(req.body)
    // }

    // console.log(req.headers)
    let response: any

    console.log("base url before",baseUrl)

    if (req.headers.authorization) {
      console.log(req.headers)
      console.log("base url in response",baseUrl)

      response = await instance.post(baseUrl + req.url, body, {
        headers: {
          "Authorization": req.headers.authorization as string
        }
      })
      console.log(["url-->"+req.url, "header-->"+req.headers.authorization,"body-->"+body,"res-->"+response.data])
    } else {
      console.log("in elese","Baseurl-->"+baseUrl + "url-->"+req.url)
      response = await instance.post(baseUrl + req.url, body)
      // console.log([req.url,body,response])
    }
    // console.log('/users/signin : ' + JSON.stringify(response.data))
    // const refreshToken = response.data.refresh_token
    // storage.setItem('refreshToken', refreshToken)
    console.log("error 1")
    if (response){
      res.json({data:response.data})

    }else{
      res.json({data: {code:'99'}})
    }
      // console.log("json test", {response})

    //console.log('item set refreshToken:', storage.getItem('refreshToken'))
    // console.log([req.url, response.data])
    // con  sole.log("error 3")




  } catch (error: any) {
    console.log("error in post signin")
    // console.log("timeout")
    console.log(error)
    // console.log((error)?.response)
    // const response = JSON.stringify((error)?.response?.data.detail)
    // console.log(`Error: ` + response);
    res.status(400)
    res.json({code:"99"})
  }

  // res.json(response.data)
})
app.post('/v1/club', async (req, res) => {
  console.log("POST api" + req.url)
  console.log("Base api" + baseUrl)
  const data = req.body
  //console.log("data : "  + JSON.stringify(data))
  // console.log("request")
  // console.log("req.body",req.body)
  try {
    baseUrl= process.env.api_url_club+"/api"
    console.log("try  ")
    // console.log(baseUrl + req.url)
    // console.log("request")
    const body = req.body
    // if (req.body) {
    //   body = JSON.parse(req.body)
    // }

    // console.log(req.headers)
    let response: any

    console.log("base url before",baseUrl)

    if (req.headers.authorization) {
      // console.log(req.headers.authorization)
      console.log("base url in response",baseUrl)

      response = await instance.post(baseUrl + req.url, body, {
        headers: {
          "Authorization": req.headers.authorization as string
        }
      })
      console.log(["url-->"+req.url, "header-->"+req.headers.authorization,"body-->"+body])
    } else {
      console.log("in elese","Baseurl-->"+baseUrl + "url-->"+req.url)
      response = await instance.post(baseUrl + req.url, body)
      // console.log([req.url,body,response])
    }
    // console.log('/users/signin : ' + JSON.stringify(response.data))
    // const refreshToken = response.data.refresh_token
    // storage.setItem('refreshToken', refreshToken)
    console.log("error 1")
    if (response){
      res.json({data:response.data})

    }else{
      res.json({data: {code:'99'}})
    }
      // console.log("json test", {response})

    //console.log('item set refreshToken:', storage.getItem('refreshToken'))
    // console.log([req.url, response.data])
    // con  sole.log("error 3")




  } catch (error: any) {
    console.log("error in post signin")
    // console.log("timeout")
    console.log(error)
    // console.log((error)?.response)
    // const response = JSON.stringify((error)?.response?.data.detail)
    // console.log(`Error: ` + response);
    res.status(400)
    res.json({code:"99"})
  }

  // res.json(response.data)
})

app.post('*', async (req, res) => {
  console.log("POST")
  const body = req.body

  // req.body = decrypt(data.aesData, key)
  // console.log("request")
  // console.log([req.url,req.body])
  try {

    let response: AxiosResponse<any> = {} as AxiosResponse<any>
    if (req.headers.authorization) {
      console.log(req.headers)
      console.log("base url in response",baseUrl)

      response = await instance.post(baseUrl + req.url, body, {
        headers: {
          "Authorization": req.headers.authorization as string
        }
      })
      console.log([req.url, req.headers.authorization,body,response.data])
    } else {
      console.log("in elese",baseUrl + req.url)
      response = await instance.post(baseUrl + req.url, body)
      // console.log([req.url,body,response])
    }
    console.log("error 3")

    // console.log("get " + JSON.stringify(response.data))

    if (response){
      res.json({data:response})

    }else{
      res.json({data: {code:'99'}})
    }
  } catch (error: any) {
    console.log("error")
    // console.log("timeout")
    console.log(error)
    // console.log((error)?.response)
    const response = JSON.stringify((error)?.response?.data.detail)
    // console.log(`Error: ` + response);
    res.status(400)
    res.json({ data: (response), status: false })
  }

  // res.json(response.data)
})

app.put('*', async (req, res) => {
  // console.log("POST")
  const data = req.body
  // console.log("data")
  // console.log(data)
  // console.log("request")
  // console.log([req.url,req.body])
  let baseUrl = process.env.api_url
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
    res.json({ data: response.data, status: true })
  } catch (error: any) {
    // console.log("error")
    // console.log((error)?.response)
    const response = JSON.stringify((error)?.response?.data.detail)
    // console.log(`Error: ` + response);
    res.status(400)
    res.json({ data:response, status: false })
  }

  // res.json(response.data)
})
app.get('/v1/club', async (req, res) => {
  console.log("request get",req.url)
  try {

    let baseUrl = process.env.api_url_club +"/api"

    let response:any
    if (req.headers.authorization) {
      console.log("request in condition")

      response = await instance.get(baseUrl + req.url, {
        headers: {
          "Authorization": req.headers.authorization as string
        }
      })
      console.log("request after response")

      console.log([req.url,response.data,req.headers.authorization])
    } else {
      // console.log("else")
      response = await instance.get(baseUrl + req.url)
      console.log([req.url,response.data])
    }
    // console.log("get " + JSON.stringify(response.data))

    res.json(response.data.data)
  } catch (error: any) {
    console.log('erreur get', error)
    const response = JSON.stringify((error)?.response?.data.detail)
    // console.log(`Error in get: ` + response);

    res.json({ data: (response), status: false })
  }
})

app.get('*', async (req, res) => {
  console.log("request get")
  try {
    let baseUrl = process.env.api_url +"/api"

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

    res.json({ data: (response.data) })
  } catch (error: any) {
    console.log('erreur get', error)
    const response = JSON.stringify((error)?.response?.data.detail)
    // console.log(`Error in get: ` + response);

    res.json({ data: (response), status: false })
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
