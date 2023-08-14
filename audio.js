// music
const btnMusic = document.querySelector('.btn-audio')

let musicOn = false

btnMusic.addEventListener('click', () => {
  const music = document.querySelector('#audioelement')
  if (!musicOn) {
    btnMusic.src = 'images/icons8-audio-96.png'
    musicOn = true
    music.play()
    return
  }
  btnMusic.src = 'images/icons8-mute-96.png'
  music.pause()
  musicOn = false
})

// button audio
export function btnAudio () {
  const snd = new Audio('Sounds/button.wav')
  snd.play()
}
