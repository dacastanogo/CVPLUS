window.addEventListener('load', () => {
    console.log('jasefsfseaf')
    fetch(' http://localhost:4000/api/edit')
    .then((data) => data.json())
    .then((data) => console.log(data))

    
})