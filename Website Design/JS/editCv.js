'use strict'
window.addEventListener('load', () => {
  let nameTag = document.getElementById('name')
  let titleTag = document.getElementById('title')
  let profileTag = document.getElementById('profile')

  const editName = document.getElementById("edit-name")
  const saveName = document.getElementById("save-name")
  const editProfile = document.getElementById("profile-edit")
  const saveProfile = document.getElementById("save-profile")

  saveName.addEventListener('click', () => {
    console.log(editName.value)
    nameTag.innerHTML = editName.value
  })

  editName.addEventListener('onchange', () => {
    console.log("Focus")
  })
  saveProfile.addEventListener('click', () => {
    let lengthProfile = editProfile.value.length
    if (lengthProfile > 300) {
      let sumHeigth = 0
      for (let i = 0; i < lengthProfile; i++) {
        if (i % 50 == 0) {
          sumHeigth += 25
        }
        sumHeigth -= 25
      }
      console.log(sumHeigth)
      document.querySelector(".template-section1").style.height = `${sumHeigth}px`

    }
      profileTag.innerHTML = editProfile.value
  })
})
