const handleLink = function(e) {
  e.preventDefault();
  index = parseInt(this.dataset.key);
  title.innerHTML = musiques[index].titre;
  singer.innerHTML = musiques[index].chanteur;
  cover.src = musiques[index].cover;
  actualSong = musiques[index].source;
  setSong();
};

playLinks.forEach(playLink => playLink.addEventListener('click', handleLink));
