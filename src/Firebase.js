import { getDatabase } from "firebase/database"

const app = {
     apiKey: "AIzaSyA1PLhH1JuAIVYjh531gVwXYEcY2ezI13A",
     authDomain: "volunteers-f47ae.firebaseapp.com",
     databaseURL: "https://volunteers-f47ae-default-rtdb.firebaseio.com",
     projectId: "volunteers-f47ae",
     storageBucket: "volunteers-f47ae.appspot.com",
     messagingSenderId: "926948479389",
     appId: "1:926948479389:web:a93f3ffd480f12c70a5f74",
     measurementId: "G-ESDWHDHFL5"
   };

   



   export const database = getDatabase(app);