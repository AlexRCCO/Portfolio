const volumeRange = document.querySelector('.vol input');

const cover = document.querySelector('.cover img');
let newCover;

const previous = document.querySelector('.prev');
const next = document.querySelector('.next');
const play = document.querySelector('.play');
const sound = document.querySelector('.sound');

const favSvg = document.querySelector('#favSvg');
const favSvgPath = document.querySelector('#favSvg path');

const playSvg = document.querySelector('#playSvg');

const list = document.querySelector('.list');
const listPoly = document.querySelectorAll('.list polyline')
const playlist = document.querySelector('.playlist');
const playLinks = document.querySelectorAll('.playlist a');

const title = document.querySelector('.title');
const singer = document.querySelector('.name')

const currentTime = sound.currentTime;
const timeRange = document.querySelector('.cover input');

const shuffleButton = document.querySelector('.shuffle');
let shuffle = false;
let loop = false;

let index = 0;
let actualSong = musiques[index].source;
let newSong;
title.innerHTML = musiques[index].titre;
singer.innerHTML = musiques[index].chanteur;
cover.src = musiques[index].cover;
sound.src = `${actualSong}`;
