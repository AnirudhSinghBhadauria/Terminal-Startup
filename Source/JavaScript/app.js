let Date_Time, terminalText, additionalText;
let time,  timer = 7;
let timed_out = false;
const engine = document.querySelector(`#search`);
const searchEngine = document.querySelector(`#searchEngine`);
const searchBox = document.querySelector(`#searchBox`);
const links = document.querySelector(`#links`) 


const countvisits = async () => {
  try {
    const visits = await axios.get(
      `https://api.countapi.xyz/update/terminator.app/purplepebbel/?amount=1`
    );
    document.querySelector(`#screenVersion`).innerText = visits.data.value;

    terminalText = new Typed(".terminalText", {
      strings: [
        `
                  Copyright (c) 2022  Anirudh Singh Bhadauria | terminator but better <br>
                   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                  IMPLIED, <br>
                   INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, <br>
                  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.<br>
                  The above copyright notice and this permission notice shall be included in all
                  copies or substantial portions of the Software.<br>
                  `,
      ],
      typeSpeed: Infinity,
      loop: false,
    });
  } catch (error) {
    console.log(`Requst Unsuccesfull 😢`);
  }
};

const Date_Time_Maker = () => {
  // <------------MakingTime------------>
  let date = new Date(),
    Hours = date.getHours(),
    Minutes = date.getMinutes(),
    Seconds = date.getSeconds(),
    session = "AM";
  if (Hours == 0) {
    Hours = 12;
  }
  if (Hours > 12) {
    Hours = Hours - 12;
    session = "PM";
  }
  Hours = Hours < 10 ? "0" + Hours : Hours;
  Minutes = Minutes < 10 ? "0" + Minutes : Minutes;
  Seconds = Seconds < 10 ? "0" + Seconds : Seconds;
  let time = `${Hours}:${Minutes}:${Seconds} ${session}`;
  // <------------MakingDTime----------->

  // <------------MakingDate------------>
  let days = [`Monday`,`Tuesday`,`Wednesday`,`Thursday`,`Friday`,`Saturday`,`Sunday`,];
  let months = [`January`,`February`,`March`,`April`,`May`,`June`,`July`,`August`,`September`,`October`,`November`,`December`
  ];
  const day = days[date.getDay()];
  const curruntdate = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  // <------------MakingDate------------>

  document.querySelector(
    `#Date_Time`
  ).innerText = `> ${day}, ${month} ${curruntdate} ${year}, ${time} (GMT+5:30) IST`;

  setTimeout(function () {
    Date_Time_Maker();
  }, 1000);
};

Date_Time_Maker();
countvisits();

document.querySelector(`#Engine`).addEventListener(`submit`, (action) => {
  action.preventDefault();
  searchEngineSelector(`g`, `#E80F88`, `https://www.google.co.in/search`, `q`);
  searchEngineSelector(`yt`,`red`,`https://www.youtube.com/results`,`search_query`);
  searchEngineSelector(`rd`, `#FF5B00`, `https://www.reddit.com/search`, `q`);
  searchEngineSelector(`tt`, `#34B3F1`, `https://twitter.com/search`, `q`);
  searchEngineSelector(`fk`, `#3B9AE1`, `https://www.flipkart.com/search`, `q`);
  searchEngineSelector(`az`, `#F6F54D`, `https://www.amazon.in/s`, `k`);
  searchEngineSelector(`am`,`#827397`,`https://music.apple.com/us/search`,`term`);
  searchEngineSelector(`wp`,`#E9D5DA`,`https://en.wikipedia.org/wiki`,`search`);
  searchEngineSelector(`pv`,`#C1D5A4`,`https://www.primevideo.com/search/ref=atv_nb_sr`,`phrase`);
  searchEngineSelector(`sc`, `#F15412`, `https://soundcloud.com/search`, `q`);
  searchEngineSelector(`nf`, `#E64848`, `https://www.netflix.com/search`, `q`);
  searchEngineSelector(`gt`,`green`,`https://translate.google.co.in/?sl=en&tl=hi`,`text`);
});

const searchEngineSelector = (tag, color, link, name) => {
  if (searchEngine.value === `${tag}`) {
    searchBox.style.display = `block`;
    searchBox.focus();
    searchEngine.style.color = `${color}`;
    search.setAttribute(`action`, `${link}`);
    searchBox.setAttribute(`name`, `${name}`);
  }
};

window.addEventListener(`keydown`, (action) => {
  if (action.keyCode === 27 || action.key === `escape`) {
    searchBox.value = ``;
    searchEngine.value = ``;
    searchEngine.focus();
    searchBox.style.color = `rgba(255, 255, 255, 0.607)`;
    searchEngine.style.color = `rgba(255, 255, 255, 0.607)`;
  }
});


// ------------------------------------SCREEN-SAVER------------------------------------
    window.addEventListener(`mousemove`,resetTimer);
    window.addEventListener(`keypress`,resetTimer);
    window.addEventListener(`click`,resetTimer);
    window.addEventListener(`scroll`,resetTimer);

  function logout() {
    timed_out = true;
    ballbounce();
   
  }

  function resetTimer() {
    clearTimeout(time);
    timer = 7;  
    timed_out = false;
    time = setTimeout(logout, 7000);
  }

  function ballbounce() {
    if (timed_out) {
      document.querySelector(".audio-bars").scrollIntoView();
    }
  }
  
  document.querySelector(`.audio-bars`).addEventListener(`mousemove`,()=>{
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  })
  searchEngine.addEventListener(`change`,()=>{
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  })
  searchBox.addEventListener(`change`,()=>{
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  })

// ------------------------------------SCREEN-SAVER------------------------------------



