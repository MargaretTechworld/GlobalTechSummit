// ---------------TOGGLE BAR-----------------------------
let toggleMenu = document.querySelector(".toggleBar");
let closeLink = document.querySelector(".close");
let Menus = document.querySelector(".nav-links-ul");

toggleMenu.addEventListener("click", () =>{
 
  Menus.classList.toggle("show")
})
closeLink.addEventListener("click", () => {
  Menus.classList.remove("show")
})

// ---------------Speaker Section------------------
const speakersDetails =[
  {
  speakerImg:"./images/speaker_01.png", 
  speakerName:"Yochai Benkler",
  speakerProfession:"Beriaman Professor of Enterprenurial legal studies at Harvard Law School",
  speakerBio:"Benlker studies commons based peer production and published his seminal book. The Wealth of Networks in 2006"
},

{
  speakerImg:"./images/speaker_02.png", 
  speakerName:"SahYeong Noh",
  speakerProfession:"Beriaman Professor of Enterprenurial legal studies at Harvard Law School",
  speakerBio:"Benlker studies commons based peer production and published his seminal book. The Wealth of Networks in 2006"
},

{
  speakerImg:"./images/speaker_03.png", 
  speakerName:"Lila Tretikov",
  speakerProfession:"Beriaman Professor of Enterprenurial legal studies at Harvard Law School",
  speakerBio:"Benlker studies commons based peer production and published his seminal book. The Wealth of Networks in 2006"
},

{
  speakerImg:"./images/speaker_04.png", 
  speakerName:"Kilnam Chon",
  speakerProfession:"Beriaman Professor of Enterprenurial legal studies at Harvard Law School",
  speakerBio:"Benlker studies commons based peer production and published his seminal book. The Wealth of Networks in 2006"
},


{
  speakerImg:"./images/speaker_05.png", 
  speakerName:"Julia Leda",
  speakerProfession:"Beriaman Professor of Enterprenurial legal studies at Harvard Law School",
  speakerBio:"Benlker studies commons based peer production and published his seminal book. The Wealth of Networks in 2006"
},

{
  speakerImg:"./images/speaker_06.png", 
  speakerName:"Ryan Merkley",
  speakerProfession:"Beriaman Professor of Enterprenurial legal studies at Harvard Law School",
  speakerBio:"Benlker studies commons based peer production and published his seminal book. The Wealth of Networks in 2006"
}];

const speakerContainer= document.querySelector(".speakers-grid")
function generateSpeakers(){
  speakersDetails.forEach(speaker => {
  speakerContainer.innerHTML += 
  `
  <div class="speaker-div">
    <div class="speaker-img">
      <img src="${speaker.speakerImg}" alt="${speaker.speakerName}">
    </div>
    <div class="about-speaker">
      <h4 class="speaker-name">${speaker.speakerName}</h4>
      <p class="speaker-profession">${speaker.speakerProfession}</p>
      <div class="rule"></div>
      <p class="speaker-bio">${speaker.speakerBio}</p>
    </div>
  </div>
  `
  });
}
generateSpeakers()