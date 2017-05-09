const setSong = function() {
  let newSong = actualSong;
    sound.src= `${newSong}`;
    if(sound.paused) {
      playSvg.style.display = "none";
    } else{
      playSvg.style.display = "";
    }
    sound.play();
  };

const handlePlay = function() {
  if(sound.paused) {
    sound.play();
    playSvg.style.display = "none";
  } else {
    sound.pause();
    playSvg.style.display = "";
  }
};

const handleShuffle = function() {
  if(!shuffle) {
  shuffle = true;
  } else {
    shuffle = false;
  }
};

const previousSong = function() {
  if(!shuffle){
    if(index > 0) {
      title.innerHTML = musiques[index-1].titre;
      singer.innerHTML = musiques[index-1].chanteur;
      newCover = musiques[index-1].cover;
      cover.src = newCover;
      actualSong = musiques[index-1].source;
      index--;
      setSong();
      } else {
        index = musiques.length - 1;
        title.innerHTML = musiques[index].titre;
        singer.innerHTML = musiques[index].chanteur;
        newCover = musiques[index].cover;
        cover.src = newCover;
        actualSong = musiques[index].source;
        setSong();
      } 
    } else {
      index = randomIndex();
      title.innerHTML = musiques[index].titre;
      newCover = musiques[index].cover;
      cover.src = newCover;
      actualSong = musiques[index].source;
      setSong();
    }
  };

const nextSong = function() {
  if(!shuffle) {
    if (index < musiques.length - 1) {
      title.innerHTML = musiques[index+1].titre;
      singer.innerHTML = musiques[index+1].chanteur;
      newCover = musiques[index+1].cover;
      cover.src = newCover;
      actualSong = musiques[index+1].source;
      index++;
      setSong();
      } else {
        index = 0;
        title.innerHTML = musiques[index].titre;
        singer.innerHTML = musiques[index].chanteur;
        newCover = musiques[index].cover;
        cover.src = newCover;
        actualSong = musiques[index].source;
        setSong();
      }
  } else {
    index = randomIndex();
    title.innerHTML = musiques[index].titre;
    singer.innerHTML = musiques[index].chanteur;
    newCover = musiques[index].cover;
    cover.src = newCover;
    actualSong = musiques[index].source;
    setSong();
  }
};
