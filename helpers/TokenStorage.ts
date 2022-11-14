export class TokenStorage {
  static getToken(): string | undefined {
    return "9^lvYrJY$'G[&uA+3e1e^<gkb+gBli(komY<?wkC?-_6Rn[eGkNTfE8jEMM(WCQ"
    // const key = "test";
    // const data = Cookies.get(tokenName);
    // const bytes = AES.decrypt(data as string, key);
    // let token = "";
    // if (bytes.toString()) {
    //   token = bytes.toString(CryptoJS.enc.Utf8);
    // }
    // return token;
  }

  // static setToken(name: string, value: string) {
  //   const key = "test";
  //   const body = AES.encrypt(value, key).toString();
  //   const encryptedData = body;
  //   Cookies.set(name, encryptedData, { expires: 1 });
  // }
  //
  // static deleteToken(name: string) {
  //   Cookies.remove(name);
  // }
  //
  // static deleteAll() {
  //   Object.keys(Cookies.get()).forEach(function(cookieName) {
  //     Cookies.remove(cookieName);
  //   });
  // }
}


/**
 import Cookies from "js-cookie";
 import * as CryptoJS from "crypto-js";
 export class TokenStorage {
  static getToken(tokenName: string): string | undefined {
    const key = "OCI@MA_FIBRE2020";
    // const data = Cookies.get(tokenName);
    const bytes = CryptoJS.AES.decrypt(tokenName as string, key);
    let token = "";
    if (bytes.toString()) {
      token = bytes.toString(CryptoJS.enc.Utf8);
    }
    return token;
  }

  static setToken(name: string, value: string) {
    const key = "OCI@MA_FIBRE2020";
    const body = CryptoJS.AES.encrypt(value, key).toString();
    const encryptedData = body;
    Cookies.set(name, encryptedData, { expires: 1 });
  }

  static deleteToken(name: string) {
    Cookies.remove(name);
  }

  static deleteAll() {
    Object.keys(Cookies.get()).forEach(function(cookieName) {
      Cookies.remove(cookieName);
    });
  }
}

 **/
