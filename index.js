// javascript

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyDO6ZEly4doiQJGLXp_I2jia51xp45oDmI",
  authDomain: "idealab1-40b31.firebaseapp.com",
  projectId: "idealab1-40b31",
  storageBucket: "idealab1-40b31.appspot.com",
  messagingSenderId: "1023326560109",
  appId: "1:1023326560109:web:ffb580b6c70cd106bec464",
  measurementId: "G-FG0TBB2826",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import {
  getDatabase,
  get,
  ref,
  set,
  child,
  update,
  remove,
  onValue,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const db = getDatabase();

// function to toggle state of device on click
function ToggleData(dir, device) {
  console.log(device);
  const dbref = ref(db);
  // let currState;
  dir = dir + "/";
  get(child(dbref, dir + device))
    .then((snapshot) => {
      if (snapshot.exists()) {
        // console.log(snapshot.val());
        let value = snapshot.val();
        console.log(value);

        // toggling/updating data
        let newValue = !value;
        update(ref(db, dir), {
          [device]: newValue,
        })
          .then(() => {
            console.log("data stored successfully " + device + " " + newValue);
          })
          .catch((error) => {
            console.log("unsuccessful, error: " + error);
          });
      } else {
        console.log("No data found: " + device);
      }
    })
    .catch((error) => {
      console.log("unsuccessful, error" + error);
    });
}

// ToggleData("Room1", "im5")  // function call to toggle data to check whether it worls properly or not

// function to generate key-value pairs in database
function SetData(dir, device) {
  dir = dir + "/";
  update(ref(db, dir), {
    [device]: false,
  })
    .then(() => {
      console.log("data updated successfully");
    })
    .catch((error) => {
      console.log("unsuccessful, error: " + error);
    });
}

// // Driver for set function
// for (let i = 0; i < 9; i++) {
//     let v = "im" + (i+1);
//     SetData("Room1", v);
// };

// list of paths to the images
const room1On = [
  "imgs/r1_on_0.jpg",
  "imgs/r1_on_1.jpg",
  "imgs/r1_on_2.jpg",
  "imgs/r1_on_3.jpg",
  "imgs/r1_on_4.jpg",
  "imgs/r1_on_5.jpg",
  "imgs/r1_on_6.jpg",
  "imgs/r1_on_7.jpg",
  "imgs/r1_on_8.jpg",
  "imgs/r1_on_9.jpg",
];

const room1Off = [
  "imgs/r1_off_0.jpg",
  "imgs/r1_off_1.jpg",
  "imgs/r1_off_2.jpg",
  "imgs/r1_off_3.jpg",
  "imgs/r1_off_4.jpg",
  "imgs/r1_off_5.jpg",
  "imgs/r1_off_6.jpg",
  "imgs/r1_off_7.jpg",
  "imgs/r1_off_8.jpg",
  "imgs/r1_off_9.jpg",
];

// function to render images

// event listner
const images = document.querySelectorAll(".ind-imgs");

images.forEach((image) => {
  image.addEventListener("click", function handleClick(event) {
    //   console.log('box clicked', event.target.classList[0]);
    let eleClass0 = String(event.target.classList[0]);
    let dir = "";
    if (eleClass0 == "img-room1") {
      dir = "room1";
    }

    let device = String(event.target.id).slice(3);
    console.log(dir, device);
    ToggleData(dir, device);
  });
});

// old values and new values List
let oldValuesR1 = [];
let currentValuesR1 = [];

// looking for updates n room1
const dataRoomRef = ref(db, "/");
onValue(dataRoomRef, (snapshot) => {
  const data1 = snapshot.val().room1;

  currentValuesR1 = getList(data1);
  console.log("currentValuesR1: ", currentValuesR1);

  oldValuesR1 = currentValuesR1;
  renderAllImgs(currentValuesR1);
});

// function to convert the JSON data object fetched from firebase to List
function getList(data) {
  var convert = Object.keys(data).map(function (key) {
    return data[key];
  });
  return convert;
}

// function to render images
function renderAllImgs(currVal1) {
  // console.log("currVal1",currVal1);
  Object.keys(images).forEach((img) => {
    if (img >= 0 && img <= 9) {
      if (currVal1[img]) {
        images[img].src = room1On[img];
      } else {
        images[img].src = room1Off[img];
      }
    }
  });
}

import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

const auth = getAuth();
let email = "User-mohit@gmail.com";
let password = "asdf0000";
