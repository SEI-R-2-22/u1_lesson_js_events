const buttons = document.querySelectorAll('.btn')

const addText = () => {
  document.body.append('It seems as if it has been clicked!')
}

const colors = ['black', 'white', 'red', 'yellow', 'blue', 'green', 'orange', 'purple', 'pink']

for (let i=0; i < buttons.length; i++) {
  
  buttons[i].innerText = colors[i]

  buttons[i].addEventListener('click', () => {
    document.body.classList.value = ''
    document.body.classList.toggle(colors[i])
  })
}
