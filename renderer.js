const rows = [
  { row1: ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'] },
  { row2: ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'] },
  { row3: ['Z', 'X', 'C', 'V', 'B', 'N', 'M'] },
  { row4: ['Space'] }
];

const keyboard = document.getElementById('keyboard')

rows.forEach(row => {
  for (let key in row) {
    for(let i = 0; i < row[key].length; i++){
      let key_name = row[key][i]
      let key_board = document.createElement('div')
      key_board.className = 'key'
      key_board.id = `tecla-${key_name}`;
      key_board.innerText = `${key_name}`

      keyboard.appendChild(key_board)
    }
    keyboard.appendChild(document.createElement('br'))
  }
})

let text = document.getElementById('text')

window.addEventListener('keydown', (e) => {


  if(e.key === 'Backspace') {
    text.innerHTML = text.innerHTML.slice(0, -1)
    return
  }
  if (e.key === 'Shift' || e.key === 'Control' || e.key === 'Alt' || e.key === "Tab") { return false; }
  if(e.key === 'Enter') {
    text.innerHTML += '<br>'
    return
  }
  text.innerHTML += e.key;
  
  let id = e.code.replace('Key', '')
  let key = document.getElementById(`tecla-${id}`)
  if(key) key.classList.add('active')
})
window.addEventListener('keyup', (e) => {
  let id = e.code.replace('Key', '')
  let key = document.getElementById(`tecla-${id}`)
  if(key) key.classList.remove('active')
})