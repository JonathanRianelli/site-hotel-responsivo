const navBtn = document.getElementById('navbarbtn')

navBtn.addEventListener('click', function() {
    const nav = document.getElementById('nav')
    nav.classList.toggle('active')
    navbarbtn.classList.toggle('active')
})