/* that did help a lot thanks! but ultimately the issue was converting it to a request that firebase could understand. I had to do an old school
urlToBlob = url => {
   return new Promise((resolve, reject) => {
     var xhr = new XMLHttpRequest();
     xhr.onerror = reject;
     xhr.onreadystatechange = () => {
       if (xhr.readyState === 4) {
         resolve(xhr.response);
       }
     };
     xhr.open("GET", url);
     xhr.responseType = "blob"; // convert type
     xhr.send();
   });
 };





 Thomas Weidner [8:14 PM]
i figured out how to load data to the db

James Santos [8:15 PM]
whoa gj you’re on a roll

dare I ask?

Thomas Weidner [8:17 PM]
import * as firebase from "firebase";
import 'firebase/firestore'
post = async () => {
   await firebase
     .firestore()
     .collection("users")
     .add({
       email: "mangazoomies@aol.com"
     })
 }; */
