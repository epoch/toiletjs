

const bowl = document.querySelector('.bowl')


function poop() {
  bowl.style.backgroundColor = 'darkolivegreen'
  bowl.style.width = '500px'
}


bowl.addEventListener('click', poop)