'use strict'
window.addEventListener('load', () => {
  let nameTag = document.getElementById('name')
  nameTag.addEventListener('click', () => {
    nameTag.innerHTML = 'Changed'
  })
})
