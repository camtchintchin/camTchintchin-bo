
import Cookies from "js-cookie";
import * as CryptoJS from "crypto-js";
export class TokenStorageV2 {
  static getToken(tokenName: string): string | undefined {
    const key = "OCI@MA_FIBRE2020";
    const data = Cookies.get(tokenName);
    if(data){

      const bytes = CryptoJS.AES.decrypt(data as string, key);
      let token = "";
      if (bytes.toString()) {
        token = bytes.toString(CryptoJS.enc.Utf8);
      }
      // console.log("token",token)
      // console.log("getToken", token)
      // console.log("tokenName", tokenName)
      return token;
    }

  }

  static setToken(name: string, value: string) {
    // console.log("setToken", value)
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

