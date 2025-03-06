// script.js
const audioPlayer = document.getElementById('audio-player');
const playBtn = document.getElementById('play-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const progressBar = document.getElementById('progress-bar');
const trackTitle = document.getElementById('track-title');
const trackArtist = document.getElementById('track-artist');
const albumCover = document.getElementById('album-cover');

// List of songs
const songs = [
  { title: "Song 1", artist: "Artist 1", file: "music/song1.mp3", albumCover: "images/cover1.jpg" },
  { title: "Song 2", artist: "Artist 2", file: "music/song2.mp3", albumCover: "images/cover2.jpg" },
  { title: "Song 3", artist: "Artist 3", file: "music/song3.mp3", albumCover: "images/cover3.jpg" }
];

let currentSongIndex = 0;

// Load the first song
loadSong(currentSongIndex);

// Play/Pause button functionality
playBtn.addEventListener('click', () => {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playBtn.textContent = 'Pause';
  } else {
    audioPlayer.pause();
    playBtn.textContent = 'Play';
  }
});

// Prev button functionality
prevBtn.addEventListener('click', () => {
  currentSongIndex = currentSongIndex === 0 ? songs.length - 1 : currentSongIndex - 1;
  loadSong(currentSongIndex);
  audioPlayer.play();
  playBtn.textContent = 'Pause';
});

// Next button functionality
nextBtn.addEventListener('click', () => {
  currentSongIndex = currentSongIndex === songs.length - 1 ? 0 : currentSongIndex + 1;
  loadSong(currentSongIndex);
  audioPlayer.play();
  playBtn.textContent = 'Pause';
});

// Update progress bar as the song plays
audioPlayer.addEventListener('timeupdate', () => {
  const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
  progressBar.value = progress;
});

// Update song when the user interacts with the progress bar
progressBar.addEventListener('input', () => {
  const seekTime = (progressBar.value / 100) * audioPlayer.duration;
  audioPlayer.currentTime = seekTime;
});

// Function to load a song and update UI
function loadSong(songIndex) {
  const song = songs[songIndex];
  audioPlayer.src = song.file;
  trackTitle.textContent = song.title;
  trackArtist.textContent = song.artist;
  albumCover.src = song.albumCover;
  playBtn.textContent = 'Play';
}

