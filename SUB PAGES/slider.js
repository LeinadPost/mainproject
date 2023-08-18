const allSlideMenu = document.querySelectorAll('#side-bar .side-menu li a ')

allSlideMenu.forEach(item=> {
    const li = item.parentElement;

    item.addEventListener('click', function () {
        allSlideMenu.forEach(i=> {
            i.parentElement.classList.remove('active')
        })
        li.classList.add('active')
    })
   
})