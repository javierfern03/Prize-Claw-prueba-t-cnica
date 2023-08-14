import { btnAudio } from './audio.js'

// buttons
const btnClaw = document.querySelector('.btn-claw')
const btnTop = document.querySelector('.btn-top')
const btnBottom = document.querySelector('.btn-bottom')
const btnLeft = document.querySelector('.btn-left')
const btnRight = document.querySelector('.btn-right')

// button state
let buttonPressed = false

const btnClowFunction = () => {
  if (!buttonPressed) {
    btnAudio()
    buttonPressed = true
    btnClaw.firstElementChild.src = 'images/BTN_Garra-DW.png'

    setTimeout(() => {
      btnClaw.firstElementChild.src = 'images/BTN_Garra.png'
      buttonPressed = false
      $('.rating').removeClass('hidden')
      $('.game-controllers').fadeOut()
    }, 3000)
  }
}

const btnTopFunction = () => {
  if (!buttonPressed) {
    btnAudio()
    buttonPressed = true
    btnTop.firstElementChild.src = 'images/BTN_Cima-DW.png'

    setTimeout(() => {
      btnTop.firstElementChild.src = 'images/BTN_Cima.png'
      buttonPressed = false
    }, 200)
  }
}

const btnBottomFunction = () => {
  if (!buttonPressed) {
    btnAudio()
    buttonPressed = true
    btnBottom.firstElementChild.src = 'images/BTN_Baixo-DW.png'

    setTimeout(() => {
      btnBottom.firstElementChild.src = 'images/BTN_Baixo.png'
      buttonPressed = false
    }, 200)
  }
}

const btnLeftFunction = () => {
  if (!buttonPressed) {
    btnAudio()
    buttonPressed = true
    btnLeft.firstElementChild.src = 'images/BTN_Esquerda-DW.png'

    setTimeout(() => {
      btnLeft.firstElementChild.src = 'images/BTN_Esquerda.png'
      buttonPressed = false
    }, 200)
  }
}

const btnRightFunction = () => {
  if (!buttonPressed) {
    btnAudio()
    buttonPressed = true
    btnRight.firstElementChild.src = 'images/BTN_Direita-DW.png'

    setTimeout(() => {
      btnRight.firstElementChild.src = 'images/BTN_Direita.png'
      buttonPressed = false
    }, 200)
  }
}

btnClaw.addEventListener('click', btnClowFunction)
btnTop.addEventListener('click', btnTopFunction)
btnBottom.addEventListener('click', btnBottomFunction)
btnLeft.addEventListener('click', btnLeftFunction)
btnRight.addEventListener('click', btnRightFunction)

// form validation
const input = document.querySelector('input')

input.addEventListener('input', function () {
  this.value = this.value.toUpperCase()
  if (this.value.length > 3) {
    input.style.border = '2px solid red'
    this.value = this.value.slice(0, 3)
    return
  }
  input.style.border = 'none'
})

const submit = document.querySelector('#submit')

submit.addEventListener('click', function (event) {
  event.preventDefault()
  btnAudio()
  if (input.value === 0) {
    input.style.border = '2px solid red'
    input.focus()
    return
  }
  $('.rating').fadeOut()
  $('.gameEnd').removeClass('hidden')
})
