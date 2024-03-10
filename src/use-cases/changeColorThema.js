
export const setDarkMode = () => {
    setUserTheme('dark')
}

export const setLightMode = () => {
    setUserTheme('light')
}

export const setUserTheme = (newTheme) => {
    // referencias HTML
    const lightModeBtn = document.querySelector('.light-mode-btn')
    const darkModeBtn = document.querySelector('.dark-mode-btn')
    
    // listeners
    lightModeBtn.addEventListener('click', () => {
        setDarkMode()
    })
    darkModeBtn.addEventListener('click', () => {
        setLightMode()
    } )
    // documentElement es el elemento rauz en el HTML, buscará el atributo indicado y aplicará el cambio
    document.documentElement.setAttribute('data-theme', newTheme)
}
