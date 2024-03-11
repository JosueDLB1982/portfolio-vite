export const setUserTheme = () => {
    // verifica el color-scheme del SO y lo carga por defecto
    const isDarkTheme = window.matchMedia('(prefers-color-scheme: dark)')
    const setTheme = (newTheme) => {
        document.documentElement.setAttribute('data-theme', newTheme)
    }
    if(isDarkTheme.matches){
        setTheme('dark')
    }

    // detecta cambios en la configuración del color-scheme en el SO
    isDarkTheme.addEventListener('change', (e) => {
        setTheme(e.matches ? 'dark' : 'light')
    })

    const lightModeBtn = document.querySelector('.light-mode-btn')
    const darkModeBtn = document.querySelector('.dark-mode-btn')

    // detecta los cambios a través de los botones de la página
    lightModeBtn.addEventListener('click', () => {
        setTheme('dark')
    })

    darkModeBtn.addEventListener('click', () => {
        setTheme('light')
    })
}