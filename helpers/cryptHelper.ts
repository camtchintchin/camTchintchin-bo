import CryptoJS from "crypto-js";
// Code goes here
const keySize = 256;

const iterations = 100;


export function encrypt (data: any, pass:string): string {
  const salt = CryptoJS.lib.WordArray.random(128/8);

  const key = CryptoJS.PBKDF2(pass, salt, {
    keySize: keySize/32,
    iterations
  });

  const iv = CryptoJS.lib.WordArray.random(128/8);

  const encrypted = CryptoJS.AES.encrypt(JSON.stringify(data), key, {
    iv,
    padding: CryptoJS.pad.Pkcs7,
    mode: CryptoJS.mode.CBC

  });

  // salt, iv will be hex 32 in length
  // append them to the ciphertext for use  in decryption
  const transitmessage = salt.toString()+ iv.toString() + encrypted.toString();
  return transitmessage;
}

export function decrypt (data: any, pass: string): any {
  // console.log("data", data);
  const salt = CryptoJS.enc.Hex.parse(data.substr(0, 32));
  const iv = CryptoJS.enc.Hex.parse(data.substr(32, 32))
  const encrypted = data.substring(64);

  const key = CryptoJS.PBKDF2(pass, salt, {
    keySize: keySize/32,
    iterations
  });

  const decrypted = CryptoJS.AES.decrypt(encrypted, key, {
    iv,
    padding: CryptoJS.pad.Pkcs7,
    mode: CryptoJS.mode.CBC

  })
  return decrypted.toString(CryptoJS.enc.Utf8) ;
}
