// SELECTEURS
// document.querySelector("h4").style.background = "yellow";

// const baliseHTML = document.querySelector("h4");

//click-event
const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const response = document.querySelector("p");

questionContainer.addEventListener("click", () => {
  questionContainer.classList.toggle("question-clicked");
});

btn1.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "green";
});
btn2.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "red";
});

const mousemove = document.querySelector(".mousemove");
console.log(mousemove);

window.addEventListener("mousemove", (e) => {
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
});

window.addEventListener("mousedown", () => {
  mousemove.style.transform = "scale(2) translate(-25%, -25%)";
});
window.addEventListener("mouseup", () => {
  mousemove.style.transform = "scale(1) translate(-50%, -50%)";
  mousemove.style.border = "2px solid teal";
});

questionContainer.addEventListener("mouseenter", () => {
  questionContainer.style.background = "rgba(0,0,0, 0.6)";
});
questionContainer.addEventListener("mouseout", () => {
  questionContainer.style.background = "pink";
});

response.addEventListener("mouseover", () => {
  response.style.transform = "rotate(2deg)";
});

//-----------------------------
const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");

const ring = () => {
  const audio = new Audio();
  audio.src = "./enter.mp3";
  audio.play();
};

document.addEventListener("keypress", (e) => {
  key.textContent = e.key;

  if (e.key === "j") {
    keypressContainer.style.background = "pink";
  } else if (e.key === "h") {
    keypressContainer.style.background = "teal";
  } else {
    keypressContainer.style.background = "red";
  }

  // ring();
});

//______________________________________

const nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
  console.log(window.scrollY);

  if (window.scrollY > 120) {
    nav.style.top = "0";
  } else {
    nav.style.top = "-50px";
  }
});

//-----------------------------------------
const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector("select");
const form = document.querySelector("form");
let pseudo = "";
let language = "";

inputName.addEventListener("input", (e) => {
  pseudo = e.target.value;
});

select.addEventListener("input", (e) => {
  language = e.target.value;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (cgv.checked) {
    document.querySelector("form >div").innerHTML = `
     <h3>Pseudo : ${pseudo}</h3>
     <h4>Langage préféré : ${language}</h4>
     `;
  } else {
    alert("Veuillez accepter les CGV");
  }
});

//-----------------------------------------------
//load event

window.addEventListener("load", () => {
  console.log("document chargé !");
});

//-------------------------------------------------
const boxes = document.querySelectorAll(".box");
console.log(boxes);

boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    e.target.style.transform = "scale(0.7)";
  });
});

//---------------------------------------------------
//addEventListener et onclick

document.body.onclick = () => {
  // console.log("click!!");
};

//Bubbling => fin (de base l'eventListener est paramétré en mode Bubbling)
document.body.addEventListener(
  "click",
  () => {
    // console.log("click 1 ! ");
  },
  false
);

//Usecapture
document.body.addEventListener(
  "click",
  () => {
    // console.log("click 2  ! ");
  },
  true
);

//-------------------------------------------------
// questionContainer.addEventListener("click", (e) => {
//   alert("Test");
//   e.stopPropagation();
// });

//------------------------------------------------
//remoceEventListener

//------------------------------------------------
//BOM

// console.log(window.innerHeight);
// console.log(window.scrollY);

// window.open("http://google.com");
//window.close()

let answer;

// alert("Hello");
btn2.addEventListener("click", () => {
  confirm("Voulez vous vraiment vous tromper ?");
});
btn1.addEventListener("click", () => {
  answer = prompt("Entrer votre nom !");
  questionContainer.innerHTML += "<h3>Bravo " + answer + "</h3>";
});

//timer
setTimeout(() => {
  questionContainer.style.borderRadius = "300px";
}, 2000);

// let interval = setInterval(() => {
//   document.body.innerHTML += `
//   <div class='box'>
//     <h2>Nouvelle Boite !</h2>
//   </div>
//   `;
// }, 1000);

// document.body.addEventListener("click", () => {
//   clearInterval(interval);
// });

//geolocation

// const options = {
//   enableHighAccuracy: true,
//   timeout: 5000,
//   maximumAge: 0,
// };

// function success(pos) {
//   const crd = pos.coords;

//   console.log("Your current position is:");
//   console.log(`Latitude : ${crd.latitude}`);
//   console.log(`Longitude: ${crd.longitude}`);
//   console.log(`More or less ${crd.accuracy} meters.`);
// }

// function error(err) {
//   console.warn(`ERROR(${err.code}): ${err.message}`);
// }

// navigator.geolocation.getCurrentPosition(success, error, options);

window.addEventListener("mousemove", (e) => {
  console.log(e);
  nav.style.setProperty("--x", e.layerX + "px");
  nav.style.setProperty("--y", e.layerY + "px");
});
