const handleVolume = function() {
  sound.volume = volumeRange.value / 100;
};

const handleTime = function() {
  sound.currentTime = (timeRange.value * sound.duration) / 100;
}

setInterval(function() {
  timeRange.value = (sound.currentTime / sound.duration) * 100;
}, 1000);
