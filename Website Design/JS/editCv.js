'use strict'
window.addEventListener('load', () => {
  let nameTag = document.getElementById('name')
  let titleTag = document.getElementById('title')
  let profileTag = document.getElementById('profile')
  let education1Tag = document.getElementById('education1')
  let educationyear1Tag = document.getElementById('educationyear1')
  let education2Tag = document.getElementById('education2')
  let educationyear2Tag = document.getElementById('educationyear2')
  let emailTag = document.getElementById('user-email')
  let phoneTag = document.getElementById('user-phone')
  let githubTag = document.getElementById('user-github')
  let linkedinTag = document.getElementById('user-linkedin')
  let pname1Tag = document.getElementById('pname1')
  let pcompany1Tag = document.getElementById('pcompany1')
  let pyear1Tag = document.getElementById('pyear1')
  let pdescription1Tag = document.getElementById('pdescription1')
  let pname2Tag = document.getElementById('pname2')
  let pcompany2Tag = document.getElementById('pcompany2')
  let pyear2Tag = document.getElementById('pyear2')
  let pdescription2Tag = document.getElementById('pdescription2')
  let zoomnameyear1Tag = document.getElementById('zoomnameyear1')
  let zoomposition1Tag = document.getElementById('zoomposition1')
  let zoombrief1Tag = document.getElementById('zoombrief1')



  const editName = document.getElementById("edit-name")
  const saveName = document.getElementById("save-name")
  const editTitle = document.getElementById("edit-title")
  const saveTitle = document.getElementById("save-title")
  const editProfile = document.getElementById("profile-edit")
  const saveProfile = document.getElementById("save-profile")
  const editEduname1 = document.getElementById("eduname1-edit")
  const saveEduname1 = document.getElementById("save-eduname1")
  const editEduyear1 = document.getElementById("eduyear1-edit")
  const saveEduyear1 = document.getElementById("save-eduyear1")
  const editEduname2 = document.getElementById("eduname2-edit")
  const saveEduname2 = document.getElementById("save-eduname2")
  const editEduyear2 = document.getElementById("eduyear2-edit")
  const saveEduyear2 = document.getElementById("save-eduyear2")
  const editemail = document.getElementById("email-edit")
  const saveemail = document.getElementById("save-email")
  const editphone = document.getElementById("phone-edit")
  const savephone = document.getElementById("save-phone")
  const editgithub = document.getElementById("github-edit")
  const savegithub = document.getElementById("save-github")
  const editlinkedin = document.getElementById("linkedin-edit")
  const savelinkedin = document.getElementById("save-linkedin")
  const editpname1 = document.getElementById("proname1-edit")
  const savepname1 = document.getElementById("save-proname1")
  const editcompany1 = document.getElementById("companame1-edit")
  const savepcompany1 = document.getElementById("save-companame1")
  const editpyear1 = document.getElementById("proyear1-edit")
  const savepyear1 = document.getElementById("save-proyear1")
  const editpdescription1 = document.getElementById("probrief1-edit")
  const savepdescription1 = document.getElementById("save-probrief1")
  const editpname2 = document.getElementById("proname2-edit")
  const savepname2 = document.getElementById("save-proname2")
  const editcompany2 = document.getElementById("companame2-edit")
  const savepcompany2 = document.getElementById("save-companame2")
  const editpyear2 = document.getElementById("proyear2-edit")
  const savepyear2 = document.getElementById("save-proyear2")
  const editpdescription2 = document.getElementById("probrief2-edit")
  const savepdescription2 = document.getElementById("save-probrief2")
  const editcpandyear1 = document.getElementById("cpandyear1-edit")
  const savecpandyear1 = document.getElementById("save-cpandyear1")
  const editztitle1 = document.getElementById("ztitle1-edit")
  const saveztitle1 = document.getElementById("save-ztitle1")
  const editzbrief1 = document.getElementById("zbrief1-edit")
  const savezbrief1 = document.getElementById("save-zbrief1")

/*
editName.addEventListener('change', (event) => {
  console.log('Hola jajaj')
  console.log(event.target.value)
})
  saveName.addEventListener('click', () => {
    nameTag.innerHTML = editName.value
  })

  saveTitle.addEventListener('click', () => {
    titleTag.innerHTML = editTitle.value
  })

  saveEduname1.addEventListener('click', () => {
    education1Tag.innerHTML = editEduname1.value
  })

  saveEduyear1.addEventListener('click', () => {
    educationyear1Tag.innerHTML = editEduyear1.value
  })

  saveEduname2.addEventListener('click', () => {
    education2Tag.innerHTML = editEduname2.value
  })

  saveEduyear2.addEventListener('click', () => {
    educationyear2Tag.innerHTML = editEduyear2.value
  })

  saveemail.addEventListener('click', () => {
    emailTag.innerHTML = editemail.value
  })

  savephone.addEventListener('click', () => {
    phoneTag.innerHTML = editphone.value
  })

  savegithub.addEventListener('click', () => {
    githubTag.innerHTML = editgithub.value
  })

  savelinkedin.addEventListener('click', () => {
    linkedinTag.innerHTML = editlinkedin.value
  })

  savepname1.addEventListener('click', () => {
    pname1Tag.innerHTML = editpname1.value
  })

  savepcompany1.addEventListener('click', () => {
    pcompany1Tag.innerHTML = editcompany1.value
  })

  savepyear1.addEventListener('click', () => {
    pyear1Tag.innerHTML = editpyear1.value
  })

  savepdescription1.addEventListener('click', () => {
    pdescription1Tag.innerHTML = editpdescription1.value
  })

  savepname2.addEventListener('click', () => {
    pname2Tag.innerHTML = editpname2.value
  })

  savepcompany2.addEventListener('click', () => {
    pcompany2Tag.innerHTML = editcompany2.value
  })

  savepyear2.addEventListener('click', () => {
    pyear2Tag.innerHTML = editpyear2.value
  })

  savepdescription2.addEventListener('click', () => {
    pdescription2Tag.innerHTML = editpdescription2.value
  })

  savecpandyear1.addEventListener('click', () => {
    zoomnameyear1Tag.innerHTML = editcpandyear1.value
  })

  saveztitle1.addEventListener('click', () => {
    zoomposition1Tag.innerHTML = editztitle1.value
  })

  savezbrief1.addEventListener('click', () => {
    zoombrief1Tag.innerHTML = editzbrief1.value
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
  })*/
})

function colorbg(){
  var select = document.getElementById('themepicker');
  var color = select.options[select.selectedIndex].value;
  var x = document.getElementsByClassName("editable");
  for( let i = 0; i < x.length; i++){
    x[i].style.background = color;
  }

  //document.getElementsByClassName("editable").style.background = color;
}

function changetxt(){
  var changable = document.getElementsByClassName("tochange");
  var changer = document.getElementsByClassName("changer");

  for (let i = 0; i < changer.length; i++){
    console.log(changer[i].value, changer[i].name)
    if (changer[i].value.length == 0){
      continue
    }

    changable[i].innerHTML = changer[i].value
  }
}

function createcv(){
  let changer = document.getElementsByClassName("changer");
  console.log(changer)
  let objfetch = {}
  for (let i = 0; i < changer.length; i++){
    objfetch.changer[i].name =changer[i].value
  }
  console.log(objfetch)
}