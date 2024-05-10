const express = require('express')
const app = express()
const port = 3000
// const firebase = require("firebase");

const firebase = require('firebase/app');
const auth = require('firebase/auth');

const firebaseConfig = {
  apiKey: "AIzaSyAC1ye7j69735898iVphpFv_chjn5cL1ns",
  authDomain: "productivityapp-fa59f.firebaseapp.com",
  projectId: "productivityapp-fa59f",
  storageBucket: "productivityapp-fa59f.appspot.com",
  messagingSenderId: "365868967608",
  appId: "1:365868967608:web:9adf906a22c55028ff364d",
  measurementId: "G-4J2YSPFF56"
};
firebase.initializeApp(firebaseConfig);
function registeruser(email,password) {
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      console.log(user);
      console.log("Signed Up!!");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);

    });
}

function login(email,password){
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    var user = userCredential.user;
      console.log("logined in!!")
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage);
  });
}

function signout(){
  firebase.auth().signOut().then(() => {
  // Sign-out successful.
    console.log("Signed Out")
  }).catch((error) => {
    // An error happened.
  });
}

app.set('view engine','ejs');
app.use(express.urlencoded({
  extended: true
}));
app.get('/', (req, res) => {
  res.render('index', {test: 'Welcome to the Productivity App'});
});

app.get("/register", async(req,res) =>{
  res.render('register');

})

app.get("/login", async(req,res) =>{
  res.render('login');
})

app.post('/register', async(req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  console.log(email,password);
  registeruser(email,password)
});

app.post('/login', async(req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  console.log(email,password)
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});


