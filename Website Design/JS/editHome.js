window.addEventListener('load', () => {
    let dataCvs 
    console.log('jasefsfseaf')
    fetch(' http://localhost:4000/api/edit')
    .then((data) => data.json())
    .then((data) =>  {
        console.log(data)
        let lastCv = data[data.length - 1]
        console.log(lastCv)
        const toChange = document.getElementsByClassName('tochange')
        console.log(toChange[0].id)    
        for (let i = 0; i < toChange.length; i++) {
            document.getElementById(toChange[i].id).innerHTML = lastCv[`${toChange[i].id}`]
        }
    })

})

function display1() {
    var x = document.getElementById("zoom1");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function display2() {
    var x = document.getElementById("zoom2");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }