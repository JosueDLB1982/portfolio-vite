
export const mobileMenu = () => {
    const closeMobileMenu = document.querySelectorAll('.menu-item')
    const mobileMenu = document.querySelector('.checkbox')

    closeMobileMenu.forEach(e => {
        e.addEventListener('click', () => {            
            if(mobileMenu.checked) mobileMenu.checked = false
        })
    })
}