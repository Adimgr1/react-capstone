import CryptoJS from "crypto-js";
const secretKey = "This is secret lol";

const savetoStorage = (key, data) => {
  const encryptedData = CryptoJS.AES.encrypt(
    JSON.stringify(data),
    secretKey
  ).toString();
  localStorage.setItem(key, encryptedData)
};
const decryptingData=(key)=>{
     const encryptedData= localStorage.getItem(key);
     if(!encryptedData) return null;

     try{
          const bytes= CryptoJS.AES.decrypt(encryptedData, secretKey);
          return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
     }catch(error){
          console.log(error)
          return null;
     }

}
export {savetoStorage, decryptingData}
