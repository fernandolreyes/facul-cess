let navBar = document.querySelector('#header')

document.addEventListener("scroll", ()=>{
    let scrollTop = window.scrollY

    if(scrollTop > 0){
        navBar.classList.add('menu-dinamico')
    } else {
        navBar.classList.remove('menu-dinamico')
    }

})