play.addEventListener('click', handlePlay);

previous.addEventListener('click', previousSong);

next.addEventListener('click', nextSong);

sound.addEventListener('ended', nextSong);

shuffleButton.addEventListener('click', handleShuffle);

// list.addEventListener('click', showPlaylist);

favSvg.addEventListener('click', addFav);

volumeRange.addEventListener('input', handleVolume);

timeRange.addEventListener('input', handleTime);
