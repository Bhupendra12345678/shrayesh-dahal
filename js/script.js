'use strict';



/**
 * all music information
 */

const musicData = [
  {
    backgroundImage: "./images/post-2.jpg",
    posterUrl: "./images/1.jpg",
    title: "मतकर अभिमान रे बन्दे",
    album: "Anup Jalota",
    year: 1,
    artist: "Bhajan",
    musicPath: "https://firebasestorage.googleapis.com/v0/b/music-cf108.appspot.com/o/Mat%20Kar%20Tu%20%20Anup%20.mp3?alt=media&token=6cab709b-967a-4391-af4e-7e9b89b99c44",
  },
  {
    backgroundImage: "./images/post-2.jpg",
    posterUrl: "./images/2.jpg",
    title: "मे बालक  तु  शेरावाली मा ",
    album: "Jubin_Nautiyal",
    year: 2,
    artist: "Bhajan",
    musicPath: "https://firebasestorage.googleapis.com/v0/b/music-cf108.appspot.com/o/Jubin%20Nautiyal%20Main%20Balak%20Tu%20Mata.mp3?alt=media&token=728f01c1-3735-492a-8173-4468f4357e0b",
  },
  {
   backgroundImage: "./images/post-2.jpg",
    posterUrl: "./images/3.jpg",
    title: "मेर घर राम आए हे ",
    album: "Jubin_Nautiyal",
    year: 3,
    artist: "Bhajan",
    musicPath: "https://firebasestorage.googleapis.com/v0/b/music-cf108.appspot.com/o/Jubin%20Nautiyal%20Mere%20Ghar%20Ram%20Aaye%20Hain.mp3?alt=media&token=ca2113f2-98a2-4088-8dba-fa8feb6f8c16",
  },
  {
    backgroundImage: "./images/post-2.jpg",
    posterUrl: "./images/4.jpg",
    title: "मेरी मा के बराबर कोहिनही ",
    album: "Jubin_Nautiyal",
    year: 4,
    artist: "Bhajan",
    musicPath: "https://firebasestorage.googleapis.com/v0/b/music-cf108.appspot.com/o/Meri%20Maa%20Ke%20Barabar%20Koi%20Nahi.mp3?alt=media&token=356ecd70-f0b6-466a-ad7f-db2d149c3070",
  },
  {
    backgroundImage: "./images/post-2.jpg",
    posterUrl: "./images/5.jpg",
    title: "मतकर अभिमान रे बन्दे ",
    album: "Menuka Poudel",
    year: 5,
    artist: "Bhajan",
    musicPath: "https://firebasestorage.googleapis.com/v0/b/music-cf108.appspot.com/o/%E0%A4%AE%E0%A4%A4%E0%A4%95%E0%A4%B0%20%E0%A4%85%E0%A4%AD%E0%A4%BF%E0%A4%AE%E0%A4%BE%E0%A4%A8%20%20%E0%A4%B0%E0%A5%87%20%E0%A4%AC%E0%A4%A8%E0%A5%8D%E0%A4%A6%E0%A5%87%20%20%E0%A4%AE%E0%A5%87%E0%A4%A8%E0%A5%81%E0%A4%95%E0%A4%BE%20%E0%A4%AA%E0%A5%8C%E0%A4%A1%E0%A4%B2%20.mp3?alt=media&token=3e4ddab4-3faf-4e35-9a0c-2b672ab49743",
  
  
  
  
  },
  {
    backgroundImage: "./images/post-2.jpg",
    posterUrl: "./images/6.jpg",
    title: "आरती किजै हनुमान ललाकी",
    album: "Jai Shree Hanuman",
    year: 6,
    artist: "Hanuman Bhajan",
    musicPath: "https://firebasestorage.googleapis.com/v0/b/music-cf108.appspot.com/o/song1.mp3?alt=media&token=89ccded3-70fc-4fac-a5c1-9161ee309447",
  },
  {
    backgroundImage: "./images/post-2.jpg",
    posterUrl: "./images/7.jpg",
    title: "बजरँग बाण",
    album: "Jai Shree Hanuman",
    year: 7,
    artist: "Hanuman Bhajan",
    musicPath: "https://firebasestorage.googleapis.com/v0/b/music-cf108.appspot.com/o/song2.mp3?alt=media&token=4a8989e6-2ce0-445d-9309-dcea5eabdebb",
  },
  {
    backgroundImage: "./images/post-2.jpg",
    posterUrl: "./images/8.jpg",
    title: "संकटमोचन हनुमान अष्टक",
    album: "Jai Shree Hanuman",
    year: 8,
    artist: "Hanuman Bhajan",
    musicPath: "https://firebasestorage.googleapis.com/v0/b/music-cf108.appspot.com/o/song3.mp3?alt=media&token=20287d0a-fc52-48af-8749-23048f34a6d7",
  },
  {
    backgroundImage: "./images/post-2.jpg",
    posterUrl: "./images/9.jpg",
    title: "Ashtottara Shatanamavali",
    album: "Jai Shree Hanuman",
    year: 9,
    artist: "Hanuman Bhajan",
    musicPath: "https://firebasestorage.googleapis.com/v0/b/music-cf108.appspot.com/o/song4.mp3?alt=media&token=029ee089-2f89-49f5-88b1-6a1bbbb00068",
  },
  {
    backgroundImage: "./images/post-2.jpg",
    posterUrl: "./images/10.jpg",
    title: "मारुती नंदन नमो नमः",
    album: "jai Shree Hanuman",
    year: 10,
    artist: "Hanuman Bhajan",
    musicPath: "https://firebasestorage.googleapis.com/v0/b/music-cf108.appspot.com/o/song5.mp3?alt=media&token=ab9c6056-702b-4a7a-b8f7-7ce443d2789b",
  },
  {
    backgroundImage: "./images/post-2.jpg",
    posterUrl: "./images/11.jpg",
    title: "हे  बजरंग बली हनुमान",
    album: "jai Shree Hanuman",
    year: 11,
    artist: "Hanuman Bhajan",
    musicPath: "https://firebasestorage.googleapis.com/v0/b/music-cf108.appspot.com/o/song6.mp3?alt=media&token=84a27880-411d-43ef-8739-aeefb4fe2e9d",
  },
  {
    backgroundImage: "./images/post-2.jpg",
    posterUrl: "./images/12.jpg",
    title: "हमारे राम जी से राम राम",
    album: "jai Shree Hanuman",
    year: 12,
    artist: "Hanuman Bhajan",
    musicPath: "https://firebasestorage.googleapis.com/v0/b/music-cf108.appspot.com/o/song7.mp3?alt=media&token=c6982351-51d8-4e44-8072-3d9b37ac35aa",
  },
  {
    backgroundImage: "./images/post-2.jpg",
    posterUrl: "./images/13.jpg",
    title: "हे दुख भन्जन",
    album: "jai Shree Hanuman",
    year: 13,
    artist: "jai Shree Hanuman",
    musicPath: "https://firebasestorage.googleapis.com/v0/b/music-cf108.appspot.com/o/song8.mp3?alt=media&token=7a398817-c092-4e39-9b77-89d7ae86da0e",
  },
  {
    backgroundImage: "./images/post-2.jpg",
   posterUrl: "./images/14.jpg",
    title: "श्री रामरक्षास्तोत्म ",
    album: "Jai Shree Ram",
    year: 14,
    artist: "Bhajan",
    musicPath: "https://firebasestorage.googleapis.com/v0/b/music-cf108.appspot.com/o/song9.mp3?alt=media&token=703c8a13-560b-4478-baec-3278182d9d67",
  },
];



/**
 * add eventListnere on all elements that are passed
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * PLAYLIST
 * 
 * add all music in playlist, from 'musicData'
 */

const playlist = document.querySelector("[data-music-list]");

for (let i = 0, len = musicData.length; i < len; i++) {
  playlist.innerHTML += `
  <li>
    <button class="music-item ${i === 0 ? "playing" : ""}" data-playlist-toggler data-playlist-item="${i}">
      <img src="${musicData[i].posterUrl}" width="800" height="800" alt="${musicData[i].title} Album Poster"
        class="img-cover">

      <div class="item-icon">
        <span class="material-symbols-rounded">equalizer</span>
      </div>
    </button>
  </li>
  `;
}



/**
 * PLAYLIST MODAL SIDEBAR TOGGLE
 * 
 * show 'playlist' modal sidebar when click on playlist button in top app bar
 * and hide when click on overlay or any playlist-item
 */

const playlistSideModal = document.querySelector("[data-playlist]");
const playlistTogglers = document.querySelectorAll("[data-playlist-toggler]");
const overlay = document.querySelector("[data-overlay]");

const togglePlaylist = function () {
  playlistSideModal.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("modalActive");
}

addEventOnElements(playlistTogglers, "click", togglePlaylist);



/**
 * PLAYLIST ITEM
 * 
 * remove active state from last time played music
 * and add active state in clicked music
 */

const playlistItems = document.querySelectorAll("[data-playlist-item]");

let currentMusic = 0;
let lastPlayedMusic = 0;

const changePlaylistItem = function () {
  playlistItems[lastPlayedMusic].classList.remove("playing");
  playlistItems[currentMusic].classList.add("playing");
}

addEventOnElements(playlistItems, "click", function () {
  lastPlayedMusic = currentMusic;
  currentMusic = Number(this.dataset.playlistItem);
  changePlaylistItem();
});



/**
 * PLAYER
 * 
 * change all visual information on player, based on current music
 */

const playerBanner = document.querySelector("[data-player-banner]");
const playerTitle = document.querySelector("[data-title]");
const playerAlbum = document.querySelector("[data-album]");
const playerYear = document.querySelector("[data-year]");
const playerArtist = document.querySelector("[data-artist]");

const audioSource = new Audio(musicData[currentMusic].musicPath);

const changePlayerInfo = function () {
  playerBanner.src = musicData[currentMusic].posterUrl;
  playerBanner.setAttribute("alt", `${musicData[currentMusic].title} Album Poster`);
  document.body.style.backgroundImage = `url(${musicData[currentMusic].backgroundImage})`;
  playerTitle.textContent = musicData[currentMusic].title;
  playerAlbum.textContent = musicData[currentMusic].album;
  playerYear.textContent = musicData[currentMusic].year;
  playerArtist.textContent = musicData[currentMusic].artist;

  audioSource.src = musicData[currentMusic].musicPath;

  audioSource.addEventListener("loadeddata", updateDuration);
  playMusic();
}

addEventOnElements(playlistItems, "click", changePlayerInfo);

/** update player duration */
const playerDuration = document.querySelector("[data-duration]");
const playerSeekRange = document.querySelector("[data-seek]");

/** pass seconds and get timcode formate */
const getTimecode = function (duration) {
  const minutes = Math.floor(duration / 60);
  const seconds = Math.ceil(duration - (minutes * 60));
  const timecode = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  return timecode;
}

const updateDuration = function () {
  playerSeekRange.max = Math.ceil(audioSource.duration);
  playerDuration.textContent = getTimecode(Number(playerSeekRange.max));
}

audioSource.addEventListener("loadeddata", updateDuration);



/**
 * PLAY MUSIC
 * 
 * play and pause music when click on play button
 */

const playBtn = document.querySelector("[data-play-btn]");

let playInterval;

const playMusic = function () {
  if (audioSource.paused) {
    audioSource.play();
    playBtn.classList.add("active");
    playInterval = setInterval(updateRunningTime, 500);
  } else {
    audioSource.pause();
    playBtn.classList.remove("active");
    clearInterval(playInterval);
  }
}

playBtn.addEventListener("click", playMusic);


/** update running time while playing music */

const playerRunningTime = document.querySelector("[data-running-time");

const updateRunningTime = function () {
  playerSeekRange.value = audioSource.currentTime;
  playerRunningTime.textContent = getTimecode(audioSource.currentTime);

  updateRangeFill();
  isMusicEnd();
}



/**
 * RANGE FILL WIDTH
 * 
 * change 'rangeFill' width, while changing range value
 */

const ranges = document.querySelectorAll("[data-range]");
const rangeFill = document.querySelector("[data-range-fill]");

const updateRangeFill = function () {
  let element = this || ranges[0];

  const rangeValue = (element.value / element.max) * 100;
  element.nextElementSibling.style.width = `${rangeValue}%`;
}

addEventOnElements(ranges, "input", updateRangeFill);



/**
 * SEEK MUSIC
 * 
 * seek music while changing player seek range
 */

const seek = function () {
  audioSource.currentTime = playerSeekRange.value;
  playerRunningTime.textContent = getTimecode(playerSeekRange.value);
}

playerSeekRange.addEventListener("input", seek);

/**
 * END MUSIC
 */

const isMusicEnd = function () {
  audioSource.addEventListener('ended', skipNext);
  }

/**
 * SKIP TO NEXT MUSIC
 */

const playerSkipNextBtn = document.querySelector("[data-skip-next]");

const skipNext = function () {
  lastPlayedMusic = currentMusic;

  if (isShuffled) {
    shuffleMusic();
  } else {
    currentMusic >= musicData.length - 1 ? currentMusic = 0 : currentMusic++;
  }

  changePlayerInfo();
  changePlaylistItem();
}

playerSkipNextBtn.addEventListener("click", skipNext);



/**
 * SKIP TO PREVIOUS MUSIC
 */

const playerSkipPrevBtn = document.querySelector("[data-skip-prev]");

const skipPrev = function () {
  lastPlayedMusic = currentMusic;

  if (isShuffled) {
    shuffleMusic();
  } else {
    currentMusic <= 0 ? currentMusic = musicData.length - 1 : currentMusic--;
  }

  changePlayerInfo();
  changePlaylistItem();
}

playerSkipPrevBtn.addEventListener("click", skipPrev);



/**
 * SHUFFLE MUSIC
 */

/** get random number for shuffle */
const getRandomMusic = () => Math.floor(Math.random() * musicData.length);

const shuffleMusic = () => currentMusic = getRandomMusic();

const playerShuffleBtn = document.querySelector("[data-shuffle]");
let isShuffled = false;

const shuffle = function () {
  playerShuffleBtn.classList.toggle("active");

  isShuffled = isShuffled ? false : true;
}

playerShuffleBtn.addEventListener("click", shuffle);



/**
 * REPEAT MUSIC
 */

const playerRepeatBtn = document.querySelector("[data-repeat]");

const repeat = function () {
  if (!audioSource.loop) {
    audioSource.loop = true;
    this.classList.add("active");
  } else {
    audioSource.loop = false;
    this.classList.remove("active");
  }
}

playerRepeatBtn.addEventListener("click", repeat);



/**
 * MUSIC VOLUME
 * 
 * increase or decrease music volume when change the volume range
 */

const playerVolumeRange = document.querySelector("[data-volume]");
const playerVolumeBtn = document.querySelector("[data-volume-btn]");

const changeVolume = function () {
  audioSource.volume = playerVolumeRange.value;
  audioSource.muted = false;

  if (audioSource.volume <= 0.1) {
    playerVolumeBtn.children[0].textContent = "volume_mute";
  } else if (audioSource.volume <= 0.5) {
    playerVolumeBtn.children[0].textContent = "volume_down";
  } else {
    playerVolumeBtn.children[0].textContent = "volume_up";
  }
}

playerVolumeRange.addEventListener("input", changeVolume);


/**
 * MUTE MUSIC
 */

const muteVolume = function () {
  if (!audioSource.muted) {
    audioSource.muted = true;
    playerVolumeBtn.children[0].textContent = "volume_off";
  } else {
    changeVolume();
  }
}

playerVolumeBtn.addEventListener("click", muteVolume);
